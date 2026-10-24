class BankAccount {

    #balance=0;

    deposite(amount) {
        if(amount > 0){
            this.#balance += amount;
        } else {
            console.log("Invalid amount. Please enter a positive value.");
        }
    }


    withdraw(amount) {
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
        } else {
            console.log("Invalid amount. Please enter a positive value less than or equal to the balance.");
        }
    }

    getBalance() {
        return this.#balance;
    }

}


const account = new BankAccount();
account.deposite(5000);
console.log("Balance after deposit: " + account.getBalance()); // Output: Balance after deposit: 1000


// this will not work because #balance is a private field and cannot be accessed outside the class
//account.#balance = 500; // Attempt to directly modify the private field (will not work)
//console.log("Balance after direct modification attempt: " + account.getBalance()); // Output: Balance after direct modification attempt: 1000

account.withdraw(4500);

console.log("Balance after withdrawal: " + account.getBalance()); // Output: Balance after withdrawal: 500