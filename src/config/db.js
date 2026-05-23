import mysql from "mysql2/promise"
import dotenv from "dotenv";

dotenv.config()

//define connection string

const dbConfig = {
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "academic_foundations"
}

//added by codex
const serverConfig = {
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password
}

const pool = mysql.createPool(dbConfig)
const serverPool = mysql.createPool(serverConfig)


const connectDB = async () => {
    try {
        const connection = await pool.getConnection()
        connection.release()
        console.log("db connected successfully");
        
    } catch (error) {
        console.log("database failed to connect", error.message);   
        process.exit(1)             
    }    
}

const disconnectDB = async () => {
    await pool.end()
    await serverPool.end()    
}

export {pool, serverPool, dbConfig, connectDB, disconnectDB} 
