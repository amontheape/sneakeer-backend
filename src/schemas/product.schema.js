import joi from 'joi'

const productSchema = joi.object({
	name: joi.string().min(3).max(30).required(),
    price: joi.number().precision(2).required(),
	description: joi.string().min(5).max(50).required(),
	type: joi.string().valid('casual', 'cano_alto', 'plataforma', 'pesportivo').required(),
	size: joi.string().min(1).max(4).required(),
	color: joi.string().required(),
	gender: joi.string().valid('women', 'man', 'unisex').required()
})

export {
	productSchema
}