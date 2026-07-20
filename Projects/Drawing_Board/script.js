const board = document.querySelector(".board");
const ctx = board.getContext('2d');
const clear = document.querySelector("#clear")

let brushColor ="#000000";
let brushwidth = 5;
let isDraw = false;
let bgcolor = board.getAttribute("background-color");
let eraserWidth = 20;


board.addEventListener("mousedown",(e)=>{
    isDraw = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX,e.offsetY);
})

board.addEventListener("mouseup",()=>{
    isDraw= false;
    ctx.closePath();
})

board.addEventListener("mousemove",(e)=>{
    if(!isDraw)return;
    ctx.lineWidth = brushwidth;
    ctx.strokeStyle = brushColor;
    ctx.lineCap = "smooth";
    ctx.lineTo(e.offsetX,e.offsetY);

    ctx.stroke();
})


board.addEventListener("mouseleave",()=>{
    isDraw = false;
})

clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, board.width, board.height);
});

board.addEventListener("wheel",(e) =>{
    if(e.deltaY > 0){
        if(brushwidth > 5){
            brushwidth--;
        }
    }else{
        if(brushwidth < 100){
            brushwidth++;
        }
    }
})

board.addEventListener("dblclick",(e)=>{
    const randomebg = `hsl(${Math.random()*360},80%,90%)`;
    board.style.backgroundColor = randomebg;
})

board.addEventListener("contextmenu", ()=>{
    brushColor = `hsl(${Math.random()*360},100%,50%)`;
})