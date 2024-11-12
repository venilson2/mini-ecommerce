import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const { email, password } = request.only(['email', 'password'])

      const user = await User.findBy('email', email)

      if (!user) {
        return response.unauthorized({ message: 'Invalid email' })
      }

      const isHashed = await Hash.verify(user.password, password)

      if (!isHashed) {
        return response.unauthorized({ message: 'Invalid credentials' })
      }

      const token = await auth.use('api').generate(user)

      return response.ok({ message: 'Login successful', token })
    } catch (error) {
      return response.status(500).json({
        message: 'An error occurred during login',
        error: error.message
      })
    }
  }
}
