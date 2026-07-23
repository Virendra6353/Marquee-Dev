const btn = document.getElementById("clk")
const task = document.getElementById("disp")
const str = document.getElementById("task")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(str.value.trim() === "")return;

    const l1 = document.createElement("li")
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"

    const text = document.createElement("span");
    text.innerText = str.value;

    const del = document.createElement("button");
    del.innerText = "Delete"
   
    checkbox.addEventListener("change",()=>{
        if(checkbox.checked){
            text.style.textDecoration= "line-through";
            text.style.opacity = "0.5";
        }else{
            text.style.textDecoration = "none";
            text.style.opacity = "1";
        }
    })

    del.addEventListener("click",()=>{
        l1.remove();
    })


            l1.append(checkbox)
             l1.append(text)
            l1.append(del)
    task.append(l1);
    str.value = "";
})

