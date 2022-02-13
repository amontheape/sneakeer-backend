import joi from 'joi'

const emailSchema = joi.object({
	email: joi.string().email().required()
})

export {
    emailSchema
}