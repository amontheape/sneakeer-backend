import { Router } from 'express'
import { create } from '../controllers/generic.controller.js'
import { sendEmail } from '../controllers/order.controller.js'
import { validationToken } from '../middlewares/auth.middleware.js'

const orderRouter = Router()

orderRouter.post('/order', validationToken, create('Orders'))
orderRouter.post('/send_email', validationToken, sendEmail)

export default orderRouter