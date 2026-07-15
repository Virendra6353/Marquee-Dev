const inc = document.querySelector(".increment")
const drc = document.querySelector(".decrement")
const reset = document.querySelector(".reset")

let a = 0;
const para = document.getElementById("dis");
inc.onclick = function() {
    a++;
    para.textContent = a;
}

drc.onclick = function(){
    if(a == 0){
        a= 0;
    }else{
        a--;
    }
    para.textContent = a;
}

reset.onclick = function(){
    a = 0;
    para.textContent = a;
}