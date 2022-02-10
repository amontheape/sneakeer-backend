export const validationSchema = (schema) => {
	return async (req, res, next) => {
		try {
			const validation = schema.validate(req.body);

			if (validation.error) {
				return res.status(422).send({ message: 'Invalid informed fields' });
			}

			next()
		} catch {
			next()
		}
	}
}