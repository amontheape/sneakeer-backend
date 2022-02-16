export async function adjustingUF(req, res, next) {
	try {
		req.body.uf !== undefined && (req.body.uf = req.body.uf.toUpperCase())

        next()
	} catch {
		res.status(500).json({ message: 'Error when registering UF' })
	}
}

