import { ObjectId } from 'mongodb'
import initMongo from '../database/database.js'
import bcrypt from 'bcrypt'

let db = await initMongo()

export async function changeEmail(req, res) {
	let email = req.body

	try {
		const { _id } = res.locals.user

		const user = await db.collection('Users').findOne({ _id: new ObjectId(_id) })

		await db.collection('Users').updateOne(
			{ email: user.email },
			{ $set: email }
		)

		res.status(200).json({ message: 'Updated.' })
	} catch {
		res.status(500).json({ message: 'Internal server error.' })
	}
}

export async function changePassword(req, res) {
	let body = req.body

	try {
		const { _id } = res.locals.user

		const user = await db.collection('Users').findOne({ _id: new ObjectId(_id) })

		if (user && bcrypt.compareSync(body.password, user.password)) {
			delete body.new_password_confirmation

			let password = bcrypt.hashSync(body.new_password, 10)

			delete body.new_password

			await db.collection('Users').updateOne(
				{ email: user.email },
				{ $set: { password } }
			)

			res.status(200).json({ message: 'Updated.' })
		} else {
			res.status(409).json({ message: `Passwords don't match` })
		}
	} catch {
		res.status(500).json({ message: 'Internal server error.' })
	}
}

export async function changePersonalData(req, res) {
	let { first_name, last_name } = req.body

	try {
		const { _id } = res.locals.user

		const user = await db.collection('Users').findOne({ _id: new ObjectId(_id) })

		await db.collection('Users').updateOne(
			{ email: user.email },
			{ $set: {first_name, last_name }}
		)

		res.status(200).json({ message: 'Updated.' })
	} catch {
		res.status(500).json({ message: 'Internal server error.' })
	}
}