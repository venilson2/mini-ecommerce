import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
// import { validate } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    // const validation = await validate(request.all(), {
    //   email: 'required|email',
    //   password: 'required|min:6',
    // })

    // if (validation.fails()) {
    //   return response.badRequest(validation.messages())
    // }

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
  }
}
