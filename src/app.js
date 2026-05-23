import express from "express"
import {config} from "dotenv"
import { createSchema } from "./config/schema.js"

config()


const app = express()

const PORT = 3000

const startServer = async () => {
    try {
        await createSchema()

        app.listen(PORT, ()=> { console.log(`server listening on port ${ PORT}`)})
    } catch (error) {
        console.log("server failed to start", error.message)
        process.exit(1)
    }
}

startServer()
