const form = document.getElementById("form");
const stat = document.getElementById("stat");
let users = []

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let user = {
        name : document.getElementById("name").value,
        age : document.getElementById("input").value,
        gender : document.getElementById("gender").value,
    }
    console.log(user) 
    users.push(user)
stat.innerHTML = ""

users.forEach((student) => {
    stat.innerHTML += `
        <li>
            ${student.name} |
            ${student.age} |
            ${student.gender}
        </li>
    `;
});
})


