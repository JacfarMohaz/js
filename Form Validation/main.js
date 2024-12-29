const name = document.querySelector("#name")
const pssword = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")
const btnRegister = document.querySelector("#btnRegister")
const error = document.querySelector("#error")

btnRegister.addEventListener("click", (e) => {
    if(checkEmptyFeild(name) && checkEmptyFeild(pssword) && checkEmptyFeild(cpassword)){
        
    }
    e.preventDefault()
    checkEmptyFeild(name)
    checkEmptyFeild(pssword)
    checkEmptyFeild(cpassword)
    checkPasswordLength()
    checkPassMatch()
})


const checkEmptyFeild = (field) => {
    if(field.value == ""){
        error.style.display = "block"
        name.classList.add("border-2", "border-red-500")
        name.classList.add("outline")
        pssword.classList.add("border-2", "border-red-500")
        pssword.classList.add("outline")
        cpassword.classList.add("border-2", "border-red-500")
        cpassword.classList.add("outline")
    }else{
        error.style.display = "none"
        name.classList.remove("border-2", "border-red-500")
        name.classList.add("border-2", "border-green-300")
        name.classList.add("outline")
        pssword.classList.remove("border-2", "border-red-500")
        pssword.classList.add("border-2", "border-green-300")
        pssword.classList.add("outline")
        cpassword.classList.remove("border-2", "border-red-500")
        cpassword.classList.add("border-2", "border-green-300")
        cpassword.classList.add("outline")

    }
}


const passwordText = document.getElementById("passwordText")

const checkPasswordLength = () => {
    if(pssword.value.length <6){
        passwordText.innerHTML = "Weak password At lest 6 charecters"
        passwordText.style.color = "red"
    }else{
        passwordText.innerHTML = " "
        passwordText.style.color = ""
    }
}


const passwordError = document.getElementById("passwordError")

const checkPassMatch = () => {
    if(confirm.value != pssword.value){
        passwordError.innerHTML = "Password not matching"
        passwordError.style.color = "red"
    }else{
        passwordError.innerHTML = " "
        passwordError.style.color = ""
    }
}


