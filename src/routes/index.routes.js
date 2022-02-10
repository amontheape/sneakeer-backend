import { Router } from 'express'
import { index } from '../controllers/index.controller.js'
import { validationToken } from '../middlewares/auth.middleware.js'

const indexRouter = Router()

indexRouter.get('/', validationToken, index)

export default indexRouter