import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public price: number
  
  @column()
  public description: string
  
  @column()
  public stock: number
  
  @column()
  public image: string

  @column()
  public createdAt: DateTime

  @column()
  public updatedAt: DateTime
}
