
const create = document.getElementById("create");

let one = false;

create.addEventListener("click",()=>{
    if(one){
        return;
    }
    one = true;
    let newNote = document.createElement("button")
    let newhead = document.createElement("input");
    newhead.type = "text"

    newNote.innerText = "Create";

    let divnote = document.getElementById("divnote");

    let div = document.createElement("div");
    div.id = "div";


    divnote.append(newhead,newNote,div);

    let two = false;
     newNote.addEventListener("click",()=>{
        if(newhead.value === ""){
            return;
        }
        if(two){
            return;
        }else{
            two = true;
        }
        let content = document.createElement("textarea")
        let save = document.createElement("button")
        save.innerText = "save"
        
        let br = document.createElement("br")

        let div = document.getElementById("div");

        div.append(content,br,save)

        save.addEventListener("click",()=>{
            if(content.value == ""){
                return;
            }
            let ul = document.getElementById("notes");
            let li = document.createElement("li");

            li.style.textDecoration = "none";
            ul.style.listStyle = "none";
            const show = document.createElement("button");
                show.innerText = "Show"
            li.innerHTML= newhead.value;
            let disp = document.createElement("div")
            disp.innerText = content.value;            
            disp.style.display = "none";

            li.append(show,br,disp)
            ul.append(li)
            let three = false;
            divnote.innerHTML = ""
            show.addEventListener("click",()=>{
                if(!three){
                disp.style.display = "block";
                }else{
                    disp.style.display = "none";
                }
                three = !three
            }) 


            one =false;
            two = false;

        })
})

})


