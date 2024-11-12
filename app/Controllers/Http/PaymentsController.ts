import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from "App/Models/Order";

export default class PaymentsController {
   async processPayment({ request, response }: HttpContextContract) {
       try {
            const { order_id } = request.only(['order_id']);

            const order = await Order.find(order_id);
            if (!order) {
                return response.status(404).json({ message: 'Order not found' });
            }

            const paymentSuccessful = true; 

            if (paymentSuccessful) {
                order.status = 'completed';
                await order.save();
                return response.json({ message: 'Payment processed successfully', order });
            } else {
                return response.status(500).json({ message: 'Payment failed' });
            }
       } catch (error) {
           return response.status(500).json({ message: 'An error occurred during payment processing', error: error.message });
       }
   }
}
