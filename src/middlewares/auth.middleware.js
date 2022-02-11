import initMongo from "../database/database.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export async function validationEmailExists(req, res, next) {
	let db = await initMongo()
	const emailExists = await db.collection('Users').findOne({ email: req.body.email })

	if (emailExists) {
		return res.status(409).json({ message: 'Email does not exist' })
	}

	next()
}

export async function validationToken(req, res, next) {
	try {
		const token = req.headers["authorization"].split(' ')[1]
		jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, data) => {
			if (err) {
				return res.status(403).json({ message: 'You need a valid token to access this route' })
			} else {
				res.locals.user = data
				next()
			}
		})
	} catch(err) {
		res.status(500).json({ message: 'Error verifying token' })
	}
}