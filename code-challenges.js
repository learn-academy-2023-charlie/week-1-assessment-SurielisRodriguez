// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
//input: two strings
//output: one string
//process: if else statement using .length to determine which string is longer
//output: longer string



// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"
if (fruit1.length > fruit2.length ){
    console.log (fruit1)
}else{
    console.log(fruit2)
}



// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//input: temperatures
//output: boiling point, at boiling point, above boiling
//process: Create a function using an if else statement so that the program can make a decision
//if: tells computer if temp > 212 to return "above boiling point"
//else if: using strictly equals, we tell program to return "at boiling point"
//else: catch all for rest of temps
//console: tells program to display message alongside temp from user input

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"


const waterTemp = (temp) => {
    if (temp > 212) {
        return `${temp} is above boiling point`

    }else if (temp === 212){
        return `${temp} is at boiling point`
    }
    else {
        return `${temp} is below boiling point`
    }
    }
console.log(waterTemp(temperature1))
    

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 
//input: two strings
//outputs: length of combined strings
//process: use accessor .concat to joing strings together, use the mutaror .unshift to receive length of new string

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).unshift())



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//input: const currentCohort
//output: const backwards
//process: using .split you can make an array out of the string so that the program can examine all of the individual letters, then use a .reverse to reverse them, and finally using .join you rejoin the array into a string message that the user can see

const currentCohort = "Charlie 2023"
// // Expected output: "3202 eilrahC"
console.log(currentCohort.split("").reverse().join(""))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//input: numberOfCOnnetions
//output: last index
//process: using the .lastIndexOf Accesor we can pull the last index of the given value

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(numberOfConnections.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

//input: temperature string
//output: numbers in arrays with be combined and appear largest to smallest
//process: create function using the array that will take the temperture inputs and return them to you from largest to smallest, using console log, dislay the message to user

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

//create function
function weather(array) {
    return array.sort((a,b) => b-a)
}
console.log(weather(sanDiegoWinterTemperatures))