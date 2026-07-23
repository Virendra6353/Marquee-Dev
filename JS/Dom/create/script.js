
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    const h1 = document.createElement("h1");
    console.log(h1);
    h1.id = "head"
    h1.style.color = "green"
    h1.innerText = "Hola amigos"
    document.body.append(h1);
})

const bn = document.getElementById("clk");

const list = document.getElementById("list")

bn.addEventListener("click",()=>{
    const l1 = document.createElement("li");
    l1.innerText = "Konichiwa Meena-san"
    list.append(l1);
})