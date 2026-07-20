const form = document.getElementById("form");
const stat = document.getElementById("stat")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let user = {
        name : document.getElementById("name").value,
        age : document.getElementById("input").value,
        gender : document.getElementById("gender").value,
    }
    console.log(user) 
    stat.innerText = JSON.stringify(user)
})


