import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'

export default class UserSeederSeeder extends BaseSeeder {
  public async run () {
    await User.create({
      fullName: 'Example User',
      email: 'example@example.com',
      password: await Hash.make('123'),
      // createdAt: DateTime.local(),
      // updatedAt:  DateTime.local(),
    })
  }
}
