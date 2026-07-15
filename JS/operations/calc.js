x=10
y=5



function calc(a,b,op){
    op(a,b)
}

function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b);
}

function mult(a,b){
    console.log(a*b);
}

function divi(a,b){
    console.log(a/b);
}

calc(x,y,mult)

