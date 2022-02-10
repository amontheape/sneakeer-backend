import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const config = process.env.NODE_ENV === 'production' ? { useNewUrlParser: true, useUnifiedTopology: true } : { }

export default async function initMongo() {
    const mongoClient = new MongoClient(process.env.URI_MONGO, config)
    await mongoClient.connect();
    const db = mongoClient.db(process.env.DB_MONGO)
    return db 
}
