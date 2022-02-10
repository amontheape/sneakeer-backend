import { Router } from 'express'
import { singIn, singUp } from '../controllers/auth.controller.js'
import { validationEmailExists, validationSchema } from '../middlewares/auth.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { userLoginSchema, userRegisterSchema } from '../schemas/auth.schema.js'

const authRouter = Router()

authRouter.post('/login', [dataSanitization, validationSchema(userLoginSchema)], singIn)
authRouter.post('/register', [dataSanitization, validationSchema(userRegisterSchema), validationEmailExists], singUp)

export default authRouter