import { Router } from 'express'
import { singIn, singUp } from '../controllers/auth.controller.js'
import { validationEmailExists, validationSchema } from '../middlewares/auth.middleware.js'
import { userLoginSchema, userRegisterSchema } from '../schemas/auth.schema.js'

const authRouter = Router()

authRouter.post('/login', validationSchema(userLoginSchema), singIn)
authRouter.post('/register', [validationSchema(userRegisterSchema), validationEmailExists], singUp)

export default authRouter