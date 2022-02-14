import joi from 'joi'

const productSchema = joi.object({
	name: joi.string().min(3).max(30).required(),
    price: joi.number().precision(2).required(),
	type: joi.string().valid('canoalto', 'canobaixo', 'esportivo').required(),
	brand: joi.string().required(),
	img: joi.string().required()
})

export {
	productSchema
}