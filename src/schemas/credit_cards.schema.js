import joi from 'joi'

const creditCardsSchema = joi.object({
	name: joi.string().min(10).max(30).required(),
    number: joi.string().min(13).max(19).required(),
	cvv: joi.string().required(),
	card_brand: joi.string().valid('mastercard', 'visa', 'elo', 'pag_seguro', 'mercado_pago').required()
})

export { 
	creditCardsSchema
}