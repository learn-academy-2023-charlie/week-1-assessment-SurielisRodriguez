// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: It will add indigo to the end of the array. 
// b) Verify and explain: .push command adds a element to the end of an array, the output is the length of the new array.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: This will show you the length of the string starting from zero index.
// b) Verify and explain: .length shows length of element, output is total length.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This line of code should return the fourth letter in the index
// b) Verify and explain: This line of code will show you thhe fourth letter in the index, the square bracket holds the index

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: It should show "Ruby"
// b) Verify and explain: It shows ruby since that is the second item in the array and the index starts at 0

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This would not work
// b) Verify and explain: This would not work because .toUpperCase can only be applied to string. You would have to use .split to open it into an array and then apply the .toUpperCase and then rejoin the array using .join.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: This will log the lenght of the array labeled as datatypes
// b) Verify and explain: My answer would be wrong because dataTypes.lenght is going to return the value of 4 to return the amount of items in the array. Typeof is going to return the value of that datatype which would return number. 
