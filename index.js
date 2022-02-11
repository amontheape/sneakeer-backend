import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './src/routes/auth.routes.js'
import indexRouter from './src/routes/index.routes.js'
import addressRouter from './src/routes/address.routes.js'
import creditCardsRouter from './src/routes/credit_cards.routes.js'
import productRouter from './src/routes/product.routes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use([authRouter, indexRouter, addressRouter, creditCardsRouter, productRouter])

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando: ${process.env.PORT} 🤖`)
})