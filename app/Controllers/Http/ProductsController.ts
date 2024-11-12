import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    try {
      const products = await Product.all()

      return response.ok({ products })
    } catch (error) {
      return response.status(500).json({
        message: 'An error occurred while fetching products',
        error: error.message
      })
    }
  }
}
