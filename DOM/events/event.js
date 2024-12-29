const title = document.querySelector(".title")
const btn = document.querySelector(".btn")
const btn2 = document.querySelector(".btn2")
const element = document.querySelector("body")


btn.addEventListener("click", () => {
    title.style.color = "red"
})
btn2.addEventListener("click", () => {
    title.style.color = "black"
})


btn.addEventListener("click", () => {
    btn.style.backgroundColor = "red"
    btn.style.color = "white"
    element.style.backgroundColor = "blue"
})
btn2.addEventListener("click", () => {
    btn2.style.backgroundColor = "black"
    btn2.style.color = "white"
    element.style.backgroundColor = "green"
})



