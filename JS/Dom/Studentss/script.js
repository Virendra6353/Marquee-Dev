const container = document.getElementById("container")
const result = document.getElementById("result")

function updateCount(){
    result.innerText = "Total Students :"+ container.children.length
}

updateCount()

const delButton = document.querySelectorAll(".del")

for(let button of delButton){
    button.addEventListener("click",function(){
        this.closest(".card").remove();
        updateCount()
    })
}


const favCard = document.querySelectorAll(".fav")

for (let button of favCard){
    button.addEventListener("click",function(){
    this.closest(".card").classList.add("favi");
    });
}


const next = document.querySelectorAll(".next")

for(let button of next){
    button.addEventListener("click",function(){
        let current = this.closest(".card")
        let nextCard = current.nextElementSibling

        if(nextCard){
            // let name = nextCard.querySelector("h2").value;
            alert("Next Student :"+ nextCard.children[0].innerText)
        }
    })
}

const prev = document.querySelectorAll(".prev")

for(let button of prev){
    button.addEventListener("click",function(){
        let current = this.closest(".card")
        let nextCard = current.previousElementSibling

        if(nextCard){
            // let name = nextCard.querySelector("h2").value;
            alert("Next Student :"+ nextCard.children[0].innerText)
        }
    })
}

const first = document.getElementById("first");

first.addEventListener("click",function(){
    let curr = container.children[0];
    if(curr){
        alert("Fist child : "+curr.children[0].innerText)
    }
})

const last = document.getElementById("last");
last.addEventListener("click",function(){
    let curr = container.children[container.children.length-1];
    if(curr){
        alert("Last child: "+ curr.children[0].innerHTML);
    }
})

