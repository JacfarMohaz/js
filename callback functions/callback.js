//callback - function ugu jiro si paramater ah HOF (Higher Order Function)

function calc(num1, num2, callback) {
    return callback(num1, num2); // Invoke callback function
}

// callback

const add = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2

// console.log(calc(4,4, add))
// console.log(calc(4,4, sub))
// console.log(calc(4,4, mult))

// kitchen and chef

// Kitche = HOF
// Chef = Callback

function kitchen(item1, item2, Chef) {
    return Chef(item1, item2)
}

// Make Bariis

const cookBariis = (bariis, suugo) => {
    return `waxaan idiin sameeye ${bariis} ${suugo} fiican leh`
}

console.log(kitchen("bariis", "suugo", cookBariis))