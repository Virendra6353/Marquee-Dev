let student1 = {
    name : "Satoru",
    age : 26, 
}

studnet2 = student1;

studnet2.name = "Itadori";
console.log(student1.name);
console.log(studnet2.name);

let emp1 = {
    name : "Nanami",
    deparment : "curse_extermination",
}

emp2 = {...emp1}
emp2.name = "Shoko"

emp2.deparment = "Healing";
console.log(emp1);
console.log(emp2);

let user1 = {
    name : "Ichigoat",
    address : {
        city : "Karakura Town",
        pincode : "247-5223"
    }
}

let user2 = {...user1}
user2.name = "Ryuken Ishida"
user2.address.city = "Tokyo";

console.log(user1);
console.log(user2)

let user3 = structuredClone(user1);
user3.name = "Aizen";
user3.address.city = "Soul socitey"

console.log(user3);


 let account ={
    accountHolder : "Satoru",
    balance : 100000000,
    deposit(rs){
        this.balance = this.balance + rs;
    },
    withdraw(rs){
        if(rs > this.balance){
            console.log("Oo Gareeb !!Apna bankBalance sudhar");
        }else{
            this.balance = this.balance - rs;
        }
    }
}

console.log(account);
account.deposit(1000);
account.withdraw(10000000000000);
account.withdraw(1);
console.log(account);
