import { Router } from 'express'
import { create, getAll, getOne } from '../controllers/generic.controller.js'
import { validationToken } from '../middlewares/auth.middleware.js'
import { validationSchema } from '../middlewares/schema.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { productSchema } from '../schemas/product.schema.js'

const productRouter = Router()

productRouter.post('/product', [dataSanitization, validationSchema(productSchema), validationToken], create('Product'))
productRouter.get('/products', validationToken, getAll('Product'))
productRouter.get('/product', validationToken, getOne('Product'))

export default productRouter