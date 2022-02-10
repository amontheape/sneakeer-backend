import joi from 'joi'

const addressSchema = joi.object({
	street: joi.string().min(2).max(40).required(),
	number: joi.string().min(1).max(5).required(),
	neighborhood: joi.string().min(5).max(20).required(),
    city: joi.string().min(4).max(20).required(),
	uf: joi.string()
    .valid('AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO')
    .required()
})

export { addressSchema }