const form = document.getElementById("form")
const name = document.getElementById("name")
const course = document.getElementById("course")
const sub = document.getElementById("submit")
const res = document.getElementById("reset")

const stat = document.getElementById("status")

name.addEventListener("focus",()=>{
    stat.innerText = "Focus on Name"
})

name.addEventListener("blur",()=>{
    stat.innerText = "blur event"
})

name.addEventListener('input',()=>{
    stat.innerText = "typing : "+name.value
})

name.addEventListener("change",()=>{
    stat.innerText = "Final :"+name.value
})  