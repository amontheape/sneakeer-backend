import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './src/routes/auth.routes.js'
import indexRouter from './src/routes/index.routes.js'
import addressRouter from './src/routes/address.routes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use([authRouter, indexRouter, addressRouter])

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando: ${process.env.PORT} 🤖`)
})