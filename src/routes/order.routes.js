import { Router } from 'express'
import { create } from '../controllers/generic.controller.js'
import { sendEmail } from '../controllers/order.controller.js'
import { validationToken } from '../middlewares/auth.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { validationSchema } from '../middlewares/schema.middleware.js'
import { sendEmailSchema } from '../schemas/order.schema.js'

const orderRouter = Router()

orderRouter.post('/order', [dataSanitization, validationToken], create('Orders'))
orderRouter.get('/send_email', [validationSchema(sendEmailSchema), validationToken], sendEmail)

export default orderRouter