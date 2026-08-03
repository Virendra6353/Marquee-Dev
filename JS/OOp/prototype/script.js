const name = document.getElementById("name");
const bal = document.getElementById("bal");
const create = document.getElementById("create");

let Users = [];

class User{
    constructor(name,bal){
        this.name = name;
        this.bal = bal;
    }
    show(){
        console.log(this.name);
        console.log(this.bal);
    }
}

create.addEventListener("click",function(e){
    e.preventDefault()
    let u1 = new User(name.value,+bal.value)
    Users.push(u1);
    u1.show();
})


User.prototype.withdraw = function(amount){
    if(amount <= this.bal){
        this.bal-=amount;
    }
}

User.prototype.deposit = function(amount){
    if(amount > 0){
        this.bal += amount;
    }
}

winame = document.getElementById("winame")
wibal = document.getElementById("wibal")
wit = document.getElementById("withdraw")

wit.addEventListener("click",function(e){
    e.preventDefault();
    let u1 = Users.find(user => user.name === winame.value);
    u1.withdraw(+wibal.value)
    u1.show();
})
