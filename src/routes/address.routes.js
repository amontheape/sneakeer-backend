import { Router } from 'express'
import { create, getAll } from '../controllers/generic.controller.js'
import { validationToken } from '../middlewares/auth.middleware.js'
import { validationSchema } from '../middlewares/schema.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { addressSchema } from '../schemas/address.schema.js'
import { adjustingUF } from '../middlewares/address.middleware.js'

const addressRouter = Router()

addressRouter.post('/address', [dataSanitization, adjustingUF, validationSchema(addressSchema), validationToken], create('Address'))
addressRouter.get('/address', validationToken, getAll('Address'))

export default addressRouter