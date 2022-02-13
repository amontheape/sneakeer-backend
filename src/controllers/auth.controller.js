import initMongo from '../database/database.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()
let db = await initMongo()

export async function singUp(req, res) {
	let body = req.body

	try {
		delete body["password_confirmation"]

		const passwordHash = bcrypt.hashSync(body.password, 10)

		await db.collection('Users').insertOne({ ...body, password: passwordHash })

		res.status(201).json({ message: 'User created.' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error.' })
	}
}

export async function singIn(req, res) {
	let { email, password } = req.body

	try {
		const user = await db.collection('Users').findOne({ email })

		if (user && bcrypt.compareSync(password, user.password)) {
			delete user.password_confirmation
			delete user.password

			const { _id, first_name } = user

			const token = jwt.sign({ _id, first_name }, process.env.JWT_SECRET_KEY, {
				expiresIn: process.env.JWT_EXPIRES_IN
			})

			res.status(200).json({ token })
		} else {
			res.status(404).json({ message: 'Not found' })
		}
	} catch (err) {
		res.status(500).json({ message: 'Internal server error.' })
	}
}