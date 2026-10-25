
class BankAccount {
    #balance;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Balance cannot be negative");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit must be positive");
        }

        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.#balance) {
            throw new Error("Invalid withdrawal");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

account.deposit(1000);
console.log(account.getBalance()); // 6000

account.withdraw(2000);
console.log(account.getBalance()); // 4000

account.withdraw(5000); // Throws Error: Invalid withdrawal
