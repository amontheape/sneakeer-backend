import initMongo from '../database/database.js'
import dotenv from 'dotenv'

dotenv.config()
let db = await initMongo()

export const create = (collection) => {
	return async (req, res) => {
		console.log(req.body)
		let body = req.body

		try {
			const { _id } = res.locals.user

			await db.collection(collection).insertOne({ ...body, user_id: _id })

			res.status(201).json({ message: `${collection} created.` })
		} catch (error) {
			res.status(500).json({ message: 'Internal server error.' })
		}
	}
}

export const getAll = (collection) => {
	return async (req, res) => {
		try {
			const { _id } = res.locals.user

			const result = await db.collection(collection).find({ user_id: _id }).toArray()

			res.status(200).json({ message: 'OK', result })
		} catch (error) {
			res.status(500).json({ message: 'Internal server error.' })
		}
	}
}

export const getOne = (collection) => {
	return async (req, res) => {
		try {
			const { _id } = res.locals.user
			const { id } = req.params

			const result = await db.collection(collection).findOne({ _id: id, user_id: _id }).toArray()

			res.status(200).json({ message: 'OK', result })
		} catch (error) {
			res.status(500).json({ message: 'Internal server error.' })
		}
	}
}