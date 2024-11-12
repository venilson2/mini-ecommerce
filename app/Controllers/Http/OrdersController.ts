import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import Product from 'App/Models/Product'

export default class OrdersController {
  public async index({ auth, response }: HttpContextContract) {
    try {

      const user = await auth.use('api').authenticate()

      const orders = await Order.query().where('user_id', user.id)

      return response.ok({ orders })
    } catch (error) {
      return response.status(500).json({
        message: 'An error occurred while fetching orders',
        error: error.message
      })
    }
  }

  public async store({ request, auth, response }: HttpContextContract) {
    try {
      const user = await auth.use('api').authenticate()

      const { productIds } = request.only(['productIds'])

      if (!productIds || productIds.length === 0) {
        return response.badRequest({ message: 'No products selected for the order' })
      }

      const products = await Product.query().whereIn('id', productIds)

      const totalAmount = products.reduce((total, product) => total + product.price, 0)

      if (products.length !== productIds.length) {
        return response.badRequest({ message: 'Some products not found' })
      }

      const order = await Order.create({
        userId: user.id, 
        totalAmount,
        status: 'pending',
        paymentStatus: 'pending',
      })

      return response.status(201).json({ message: 'Order created successfully', order })
    } catch (error) {
      return response.status(500).json({
        message: 'An error occurred while creating the order',
        error: error.message
      })
    }
  }
}
