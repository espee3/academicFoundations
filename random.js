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
