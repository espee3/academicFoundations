//--- a code to write a function to break words into array then sort words to save into the database ---
let setOfStrings = "dsfkjadf sdfsf 999 ddds saa rewr a asd44 as adfoahjdf ,,, , () adfljladkjf  asd fojadlfkj,"
// --- turn into words ---
function breakWords (strings){    
    let string = toString(strings)    
    let returnString = strings.split(" ")
    return returnString
}
let splittedArray = breakWords(setOfStrings)

//sanitize words
function sanitizeArray (spltdArr){    
    let regex = /^[a-zA-Z]+$/
    let  preSanitized = spltdArr.filter(word => regex.test(word))
    return preSanitized
}

let sanitized = sanitizeArray(splittedArray)
// console.log(sanitized);

//cateogorize words // TOMMOROW RUN OVER THIS CODE AGAIN TO UNDERSTAND WHY IT WORKS
function categorizeWords (sanitizedWords){
    let wordMap = {}

    sanitizedWords.forEach(element => {
        // console.log(element, element.length);        
        let length = element.length
        if (!wordMap[length]){
            //create object for that length in an array
            wordMap[length] = []
        }
        //then add that word to that length    
        wordMap[length].push(element)   
    });
    return wordMap
}

console.log(categorizeWords(sanitized))

//send the words to the database
//ensure the database compares the word to ensure they are unique





