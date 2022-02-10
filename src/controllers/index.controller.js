export async function index(req, res) {
	try {
		res.status(200).json({ message: 'Logged' })
	} catch (error) {
		res.status(500).json({ message: 'Internal server error.' })
	}
}