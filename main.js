// let name = "Abdi"
// let age = 70
// console.log(`There was once a man called ${name} \n He was ${age} years old \n He liked his name Abdi but \n He didn't being ${age} years old`)
// document.write(`There was once a man called ${name} <br> He was ${age} years old <br> He liked his name Abdi but <br> He didn't being ${age} years old`)

// let num1 = 20 
// let num2 = 20

// console.log(`the addition of num1 ${num1} and num2 ${num2} is = ${num1 + num2}`)


let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let Addition = num1 + num2;
let Subtraction = num1 - num2;
let Multiplication = num1 * num2;
let Exponentiation = num1 ** num2;
let Division = num1 / num2;
let Modulus = num1 % num2;

console.log("Addition: " + Addition);
console.log("Subtraction: " + Subtraction);
console.log("Multiplication: " + Multiplication);
console.log("Exponentiation: " + Exponentiation);
console.log("Division: " + Division);
console.log("Modulus: " + Modulus);

document.write(`Addition: ${Addition} <br>`);
document.write(`Subtraction: ${Subtraction} <br>`);
document.write(`Multiplication: ${Multiplication} <br>`);
document.write(`Exponentiation: ${Exponentiation} <br>`);
document.write(`Division: ${Division} <br>`);
document.write(`Modulus: ${Modulus} <br>`);
