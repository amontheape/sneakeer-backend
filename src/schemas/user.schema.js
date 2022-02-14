import joi from 'joi'

const emailSchema = joi.object({
	email: joi.string().email().required()
})

const passwordSchema = joi.object({
    password: joi.string().min(3).max(15).required(),
	new_password: joi.string().min(3).max(15).required(),
	new_password_confirmation: joi.any().valid(joi.ref('new_password')).required()
})

const personalDataSchema = joi.object({
    first_name: joi.string().min(2).max(20),
	last_name: joi.string().min(2).max(40)
})

export {
    emailSchema,
    passwordSchema,
    personalDataSchema
}