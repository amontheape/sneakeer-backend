import { Router } from 'express'
import { validationEmailExists, validationToken } from '../middlewares/auth.middleware.js'
import { validationSchema } from '../middlewares/schema.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { emailSchema } from '../schemas/user.schema.js'
import { changeEmail } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.put('/change_email', [validationToken, dataSanitization, validationSchema(emailSchema), 
    validationEmailExists], changeEmail)

export default userRouter