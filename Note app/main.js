const createBtn = document.querySelector("#createBtn")
const model = document.querySelector("#model")
const closeBtn = document.querySelector("#closeBtn")
const saveBtn = document.querySelector("#saveBtn")
const noteParent = document.querySelector("#noteParent")
const title = document.querySelector("#title")
const desc = document.querySelector("#descripction")

// show model
createBtn.addEventListener("click", (e) => {
    model.style.display = "block"
    e.preventDefault()
})

// close model
closeBtn.addEventListener("click", (e) => {
    model.style.display = "none"
    e.preventDefault()

})

saveBtn.addEventListener("click", (e) => {
    // model.style.display = "block"
    e.preventDefault();
    if (title.value != "" && desc.value != "") {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = title.value
        newDiv.innerHTML += `<br> ${desc.value}`
        noteParent.appendChild(newDiv)
        newDiv.style.backgroundColor = "blue"
        newDiv.style.padding = "15px"
        newDiv.style.color = "white"
        model.style.display = "none"
        title.value = ""
        desc.value = ""
    }


})


