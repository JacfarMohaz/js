// 

// async function sayHi() {
//   return 1
// }
// sayHi().then(alert)



// async function sayHi() {
//   let promise = new Promise((res, rej) => {
//     setTimeout(() => res("HI"), 4000)
//   })

//   let result  = await promise;
//   alert(result)
// }

// sayHi()


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncExample() {
  alert("Start");

  // Pause here until the Promise is resolved
  await delay(4000);

  alert("After 4 seconds");
}

asyncExample();