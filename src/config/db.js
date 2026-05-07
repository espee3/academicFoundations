import mysql from "mysql2/promise"
import { config } from "dotenv";
dotenv.config()

//define connection string

const dbConfig = {
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "academic_foundations"
}

const pool = mysql.createPool(dbConfig)

const connectDB = async () => {
    try {
        await pool.$connect()
        console.log("db connected successfully");
        
    } catch (error) {
        console.log("db failed to connect");   
        process.exit(1)             
    }    
}

const disconnectDB = async () => {
    await pool.$disconnect()    
}

export {pool} 