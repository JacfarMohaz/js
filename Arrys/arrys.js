// let myFriends = ["Ali", 40, "Asad", 70, "Ahmed",80, "Abdi", 90, "Anas", 20];

// for (let num =0; num < myFriends.length; num ++){
//     console.log(myFriends[num])
// }

// myFriends.forEach(function (item) {
//     console.log(item)
// }) 

// Array Methods


// let myFriends = ["Asad", "Ahmed", "Hassan", "Geedi"];

// console.log(myFriends)

// // adding back
// myFriends.push("Jacfar")

// console.log(myFriends)

// // remove  back
// myFriends.pop();

// console.log(myFriends)

// // adding front
// myFriends.unshift("Farah")

// console.log(myFriends)

// // remove front
// myFriends.shift()

// console.log(myFriends)

// // remove 
// let pos = myFriends.indexOf("Hassan");

// let remove = myFriends.splice(pos, 1)

// console.log(myFriends)

// let fruites = ["Apple", "Mango", "Banana"]
// let iskudar = fruites.join(" ") // add arrays elements
// // console.log(iskudar)
// // fruites.sort()
// // console.log(fruites)
// // fruites.reverse()
// // console.log(fruites)

// // fruites.splice(0, 0, "H")
// // console.log(fruites)

// fruites.forEach((item) => {
//     console.log(item)
// })

// let age = [14,15,16,17,18,19,20]
// let name = ["Ali", "Jama", "Abdi"]
// let newName = name.filter((result) => {
//     return result == "Ali"
// })
// let newAge = age.filter((result) => {
//     return result > 15
// })

// console.log(newName)

// console.log(newAge)

let age = [14,15,16,17,18,19,20]
age.map( (age) => {
    console.log(age)
})