const inc = document.querySelector(".increment")
const drc = document.querySelector(".decrement")
let a = 0;
const para = document.getElementById("dis");
inc.addEventListener("click", function() {
    a+=1;
    para.textContent = a;
});

drc.addEventListener("click",()=> {
    if(a == 0){
        a= 0;
    }else{
        a--;
    }
    para.textContent = a;
});

