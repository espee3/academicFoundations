//the route controller sorts the word and sends it to the database
// then another route to collect and display inn dbConfig, dont know iff it be in the same route


// let jsObject = {
//     andy : ["Atari", "Agazi", "Ayimo"]
// }

// // console.log(
// //     jsObject
   
// // );

// for (const key in jsObject) {
    
//    for (const key of jsObject.andy) {
//     console.log(key);   
//    }
    

    
// }

let dummyObject = {
    1 : ["a", "I", "O"],
    2 : ["of", "is", "up", "do"],
    3 : ["don", "bro", "sis", "lyk"]
}

console.log(dummyObject.keys);

let keys = Object.keys(dummyObject)

for (const element of keys) {
    console.log(element);
    
}

//SPAWN NEW DATABASE, DATABASE OPERATION, OBJECT MANIPULATIONS
{
    // function spawnNewTables (obj){
{    //function input/argument is the js object from sortController
    //use key to create name - ${key}LetterTable
    //use value for the other property: `CREATE TABLE IF NOT EXISTS ${key}LetterTable, (id INT AUTO_INCREMENT PRIMARY KEY,word CHAR(${key}) UNIQUE NOT NULL   )`,
    //to achieve this we'll need to iterate over the object, pick the keys to use to form the db, put the values of the key into the specific database. 
    //so I will be needing two function, one to spawn new table
    //this function will return the exact query that will be put into a function or codeblock for creating tables
    }

//     let keys = Object.keys(obj)
//     let newTableArr = []

//     for (let key of keys){
//         //i HOPE that giving of space here won't put me in trouble later
//         let newTable = `CREATE TABLE IF NOT EXISTS letterTable${key} (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         word CHAR(${key}) UNIQUE NOT NULL   
//         )`;         

//         newTableArr.push(newTable)

//     }
//     // console.log(newTableArr);

//     return newTableArr
// }
// spawnNewTables(dummyObject)
}
let array = ["hat", "car", "rain"]
`{ array.foreach }`