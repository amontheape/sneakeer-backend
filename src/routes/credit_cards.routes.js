import { Router } from 'express'
import { create, getAll, getOne, getUserAll } from '../controllers/generic.controller.js'
import { validationToken } from '../middlewares/auth.middleware.js'
import { validationSchema } from '../middlewares/schema.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { creditCardsSchema } from '../schemas/credit_cards.schema.js'

const creditCardsRouter = Router()

creditCardsRouter.post('/credit_card', [dataSanitization, validationSchema(creditCardsSchema), validationToken], create('CreditCards'))
creditCardsRouter.get('/credit_cards', validationToken, getAll('CreditCards'))
creditCardsRouter.get('/credit_card', validationToken, getOne('CreditCards'))
creditCardsRouter.get('/user_credit_card', validationToken, getUserAll('CreditCards'))

export default creditCardsRouter