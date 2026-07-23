const name = document.getElementById("name")
const age = document.getElementById("age")
const course = document.getElementById("course")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const submit = document.getElementById("submit")
const show = document.getElementById("show")


let nameBool = false;
let ageBool = false;
let courseBool = false;
let emailBool = false;
let passBool = false;

name.addEventListener("input",()=>{
    let reg = /[0-9]/;
    let str = name.value;

    if(reg.test(str) || str == ""){
        name.style.borderColor = "red";
        name.style.borderRadius = "5";
        nameBool = false;
    }else{
        name.style.borderColor= "";
        nameBool = true;
    }
})

age.addEventListener("input",()=>{
    let reg = /[0-9]/;
    let ag = age.value;
    if(ag < 18 || ag >= 40){
        age.style.borderColor = "red";
        ageBool = false;
    }else{
        age.style.borderColor = "";
        ageBool = true;
    }
})

course.addEventListener("change",()=>{
    let str = course.value;
    if(str == "select"){
        course.style.borderColor = "red";
        courseBool = false;
    }else{
        courseBool = true;
    }
})

email.addEventListener("input",()=>{
    let str = email.value;
    const reg= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(str == "" || !reg.test(str)){
        email.style.borderColor = "red";
        emailBool = false;
    }else{
        email.style.borderColor = "";
        emailBool = true;
    }
})

pass.addEventListener("input", () => {
    let str = pass.value;
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (str === "" || !reg.test(str)) {
        pass.style.borderColor = "red";
        passBool = false;
    } else {
        pass.style.borderColor = "";
        passBool = true;
    }
});

let students = [];
let list = document.getElementById("list");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(passBool && nameBool && emailBool && ageBool && courseBool){
        const student ={
            name : name.value,
            age : age.value,
            course : course.value,
            email : email.value,
            pass : pass.value
        }
        list.innerHTML = "";
        students.push(student);
        list.innerHTML += ""
        students.forEach((student)=>{
            list.innerHTML = `
            <li>${student.name} | ${student.age} |${student.course} |${student.email}</li>
            `
        })
    }else{
        alert("Some fields are missing or have invalid ")
    }
})