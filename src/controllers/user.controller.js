import initMongo from '../database/database.js'

let db = await initMongo()

export async function changeEmail(req, res) {
	let email = req.body

	try {
		const { _id } = res.locals.user

		const user = await db.collection('Users').findOne()

		await db.collection('Users').updateOne(
			{ email: user.email },
			{ $set: email }
		)

		res.status(200).json({ message: 'Updated.' })
	} catch {
		res.status(500).json({ message: 'Internal server error.' })
	}
}