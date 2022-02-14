import dotenv from 'dotenv'
import { transporter } from '../utils/nodemailer.js';

dotenv.config()

export async function sendEmail(req, res) {
	try {
		await transporter.sendMail({
			from: `Equipe Sneakeer <${process.env.EMAIL}>`,
			to: `${req.body.email}`,
			subject: "Seu pedido esta sendo encaminhado para os correios.",
			html: `<b>Parabéns!</b> sua compra foi concluída!`
		})

		res.status(200).json({ message: 'OK' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error with sendmail.' })
	}
}