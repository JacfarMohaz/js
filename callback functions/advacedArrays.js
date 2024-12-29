// Advanced Array Methods

// .map - for loop lakiin aan badaleynin wixii la siiyo

// waxay soo celisaa ARRAY cusub
// waxbo kama badaleeso array-gii la siiye
// .map() waa sida For Loop oo kale
// .map() waa HIGHER ORDER FUNCTION - micnaheeda callback function ayay leedahay
// .map() waxay qaadataa callback function aan magac laheyn


// Array of Objects
const data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];
 
// Dot Notation, Bracket Notation
// const cities = data.map((item) => {
//     // return item.city
//     if (item.city == "new york") {
//         console.log(item.population) 
//     }
// })

// console.log(cities)

// const cities = data.map((item, index) => {
//     console.log(index)
// })

// .filter

// const biggestCities = data.filter((item) => {
//     if (item.population > 800000) {
//         console.log(`${item.city} is the biggest city`)
//     }
// })

// console.log(biggestCities)

// .reduce

