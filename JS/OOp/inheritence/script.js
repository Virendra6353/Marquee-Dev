class BankAccount {
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }



    withdraw(amount) {
        this.#balance -= amount;
    }

    showDetails() {
        console.log("Customer Name :", this.customerName);
        console.log("Account Number :", this.accountNumber);
        console.log("Balance :", this.balance);
    }
}

class SavingsAccount extends BankAccount {
    constructor(customerName, balance) {
        super(customerName, balance);
        this.transactionLimit = 10000;
    }

    takePersonalLoan(amount) {
        console.log("Debt of : " + amount);
    }
}

class CurrentAccount extends BankAccount {
    constructor(customerName, balance) {
        super(customerName, balance);
        this.transactionLimit = 50000;
    }

    takeBusinessLoan(amount) {
        console.log("Debt of : " + amount);
    }
}

// const raju = new SavingsAccount("Raju", 5000);
// const amit = new CurrentAccount("Amit", 10000);

// raju.deposit(1000);
// raju.withdraw(500);

// amit.deposit(3000);

const Raam = new SavingsAccount("Raam", 5000);

Raam.deposit(100);
Raam.takePersonalLoan(10000000);
// Raam.showDetails();
// console.log("----------------");
// Raam.showDetails();
Raam.balance = "Hola amigos"
console.log(Raam)
