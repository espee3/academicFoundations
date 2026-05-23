import { dbConfig, pool, serverPool } from "./db.js"
//import object from sortCOntroller

//after accesssing the object
//use the keys as the table name and values as the thing to be [put into the database table - this may be a different code]

//dummy object to try using
let dummyObject = {
    1 : ["a", "I", "O"],
    2 : ["of", "is", "up", "do"],
    3 : ["don", "bro", "sis", "lyk"]
}

//--- Generate Dynamic table query ---
function spawnNewTables (obj){
{    //function input/argument is the js object from sortController
    //use key to create name - ${key}LetterTable
    //use value for the other property: `CREATE TABLE IF NOT EXISTS ${key}LetterTable, (id INT AUTO_INCREMENT PRIMARY KEY,word CHAR(${key}) UNIQUE NOT NULL   )`,
    //to achieve this we'll need to iterate over the object, pick the keys to use to form the db, put the values of the key into the specific database. 
    //so I will be needing two function, one to spawn new table
    //this function will return the exact query that will be put into a function or codeblock for creating tables
    }

    let keys = Object.keys(obj)
    let newTableArr = []

    for (let key of keys){
        //i HOPE that giving of space here won't put me in trouble later
        let newTable = `CREATE TABLE IF NOT EXISTS letterTable${key} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        word CHAR(${key}) UNIQUE NOT NULL   
        )`;         

        newTableArr.push(newTable)

    }
    console.log(newTableArr);

    return newTableArr
}
spawnNewTables(dummyObject)

//create database
    //function to create dynamic tabl
export const schemaSql = {
    createDatabase: `CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`,
    tables: spawnNewTables(dummyObject)
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
 

//this code here changes is what runs the SQL query itself.
export const createSchema = async () => {
    await serverPool.query(schemaSql.createDatabase)
    for (let tableSql of schemaSql.tables) {
        await pool.query(tableSql)
    }
    
}

export const insertWord = async (object) => {
        
    //the object carries the the words already sorted
    //use the object 
    //at key 2, run query to insert value 2 into the database

    for (const key in object) {
       console.log("my code is working fine for now");
       
        
        
    }


    // const query = "INSERT IGNORE INTO letterTable_2 (word) VALUES ?";
    
}

{
//     export const insertWord = async (word) => {

//     const wordLength = cleanWord.length
//     const tableName = `letterTable${wordLength}`

//     await createWordTable(wordLength)

//     await pool.query(
//         `INSERT IGNORE INTO ${tableName} (word) VALUES (?)`,
//         [cleanWord]
//     )
// }
}

//READ THROUGH YOUR LAST AI RESPONSE BEFORE CONTINUING