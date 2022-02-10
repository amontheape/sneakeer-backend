import { Router } from 'express'
import { create, getAll } from '../controllers/generic.controller.js'
import { validationSchema, validationToken } from '../middlewares/auth.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { addressSchema } from '../schemas/address.schema.js'

const addressRouter = Router()

addressRouter.post('/address', [dataSanitization, validationSchema(addressSchema), validationToken], create('Address'))
addressRouter.get('/address', validationToken, getAll('Address'))

export default addressRouter