import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash' 

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const { full_name, email, password } = request.only(['full_name', 'email', 'password'])

      const hashedPassword = await Hash.make(password)

      const user = await User.create({
        fullName: full_name,
        email,
        password: hashedPassword
      })

      return response.status(201).json({
        message: 'User created successfully',
        user
      })
    } catch (error) {
      return response.status(500).json({
        message: 'An error occurred during user creation',
        error: error.message
      })
    }
  }
}
