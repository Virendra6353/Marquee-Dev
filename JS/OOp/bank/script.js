class User{
    User(name,balance){
        this.name = name;
        this.balance = balance;
    }

    show(){
        console.log(this.name);
        console.log(this.balance);
    }
}

const users[];
const inName = document.getElementById("name")
const inBal = document.getElementById("balance")
const submit = document.getElementById("submit")

submit.addEventListener("click",function(e){
    e.preventDefault();
    const u1 = new User(inName.value,+inBal.value);
    users.push(u1);
    console.log(users);
    
})

const dp = document.getElementById("deposit")
const dpbal = document.getElementById("depbal")

dp.addEventListener("submit",function(e){
    e.preventDefault();
    const acc = users.find(user => user.name === dp.value);
    acc.balance += balance;
    acc.show();
})






