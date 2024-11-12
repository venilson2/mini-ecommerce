import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'full_name'})
  public fullName: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column({ autoCreate: true })
  public createdAt: DateTime

  @column({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
