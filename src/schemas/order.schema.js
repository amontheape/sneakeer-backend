import joi from 'joi'

const sendEmailSchema = joi.object({
	email: joi.string().email().required()
});

export { 
	sendEmailSchema
}