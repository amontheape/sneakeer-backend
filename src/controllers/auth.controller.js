import initMongo from '../database/database.js'
import { stripHtml } from 'string-strip-html'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()
let db = await initMongo()

export async function singUp(req, res) {
	let { first_name, last_name, email, password, } = req.body

	first_name = stripHtml(first_name).result.trim()
	last_name = stripHtml(last_name).result.trim()
	email = stripHtml(email).result.trim()
	password = stripHtml(password).result

	try {
		const passwordHash = bcrypt.hashSync(password, 10)

		await db.collection('Users').insertOne({ first_name, last_name, email, password, password: passwordHash })

		res.status(201).json({ message: 'User created.' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error.' })
	}
}

export async function singIn(req, res) {
	let { email, password } = req.body

	email = stripHtml(email).result.trim()
	password = stripHtml(password).result

	try {
		const user = await db.collection('Users').findOne({ email })

		if (user && bcrypt.compareSync(password, user.password)) {
			delete user.password_confirm
			delete user.password

			const { id, first_name } = user

			const token = jwt.sign({ id, first_name }, process.env.JWT_SECRET_KEY, {
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