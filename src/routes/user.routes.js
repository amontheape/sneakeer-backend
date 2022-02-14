import { Router } from 'express'
import { validationEmailExists, validationToken } from '../middlewares/auth.middleware.js'
import { validationSchema } from '../middlewares/schema.middleware.js'
import dataSanitization from '../middlewares/dataSanitization.middleware.js'
import { emailSchema, passwordSchema } from '../schemas/user.schema.js'
import { changeEmail, changePassword, changePersonalData } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.put('/change_email',
	[validationToken, dataSanitization, validationSchema(emailSchema), validationEmailExists],
	changeEmail)

userRouter.put('/change_password', [validationToken, dataSanitization,
	validationSchema(passwordSchema)], changePassword)

userRouter.put('/change_personal_data', [validationToken, dataSanitization,
	validationSchema()], changePersonalData)

export default userRouter