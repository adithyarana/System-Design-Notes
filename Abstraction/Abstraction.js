
class UpiPayment {
    pay(amount) {
        this.#validate(amount);
        this.#connectToBank(amount);

        console.log(`₹${amount} paid using UPI`);
    }

    #validate(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
    }

    #connectToBank(amount) {
        console.log("Connecting to bank...");
        // Real application mein bank API call hogi
    }
}

const payment = new UpiPayment();

// User ko bas ye use karna hai:
payment.pay(1000);
