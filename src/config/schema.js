import { dbConfig, pool, serverPool } from "./db.js"
//import object from sortCOntroller

//dummy object to try using
let dummyObject = {
    1 : ["a", "I", "O"],
    2 : ["of", "is", "up", "do"],
    3 : ["don", "bro", "sis", "lyk"]
}

let tableName = "words"

export const schemaSql = {
    createDatabase: `CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`,
    table1: `CREATE TABLE IF NOT EXISTS ${tableName}(
    word_id INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(100) UNIQUE NOT NULL,
    wordLength INT
    )`
}

//--- Generate Dynamic table insert query ---
function dynamicInsert (object, tableName){
    let dynamicInsertArr = []

    for (let key in object) {  
        let wordLength = key        
        let word = object[key]        
        
        word.forEach(element => {
            let query = `INSERT INTO ${tableName} (word, wordLength) VALUES (\'${element}\', ${wordLength}) `
            dynamicInsertArr.push(query)     
             console.log(`query ${wordLength}`, query);                   
        });
    }
    return dynamicInsertArr
}
let dynamicInsertArr = dynamicInsert(dummyObject,tableName)

//this code here changes is what runs the SQL query itself.
export const createSchema = async () => {
    await serverPool.query(schemaSql.createDatabase)    
}

export const insertData = async () => {
    for (let insertQuery of dynamicInsertArr){
        await pool.query(insertQuery)
    }    
}


{// export const schemaSql = {
//     createDatabase: `CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`,

    // twoLetterTable: `
    // CREATE TABLE IF NOT EXISTS two_letters (
    // id INT AUTO_INCREMENT PRIMARY KEY,
    // word CHAR(2) UNIQUE NOT NULL   
    // )`,

//     threeLetterTable: `
//     CREATE TABLE IF NOT EXISTS three_letters (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     word CHAR(3) UNIQUE NOT NULL
//     )`
// }
}