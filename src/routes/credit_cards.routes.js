import { Router } from 'express'
import { create, getAll, getOne } from '../controllers/generic.controller.js'
import { validationSchema, validationToken } from '../middlewares/auth.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { creditCardsSchema } from '../schemas/credit_cards.schema.js'

const creditCardsRouter = Router()

creditCardsRouter.post('/address', [dataSanitization, validationSchema(creditCardsSchema), validationToken], create('CreditCards'))
creditCardsRouter.get('/address', validationToken, getAll('CreditCards'))
creditCardsRouter.get('/address', validationToken, getOne('CreditCards'))

export default creditCardsRouter