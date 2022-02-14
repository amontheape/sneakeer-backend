import { Router } from 'express'
import { create, getAll, getOne } from '../controllers/generic.controller.js'
import { validationToken } from '../middlewares/auth.middleware.js'
import { validationSchema } from '../middlewares/schema.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { productSchema } from '../schemas/product.schema.js'

const productRouter = Router()

productRouter.post('/product', create('Products'))
productRouter.get('/products', getAll('Products'))
productRouter.get('/product', getOne('Products'))

export default productRouter