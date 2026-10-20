// strategys

class Upipayments {
    pay(amount) {
        console.log(`Paying ${amount} using UPI`);
    }
}

class Cardpayments {
    pay(amount) {
        console.log(`Paying ${amount} using Card`);
    }
}

class cashpayments {
    pay(amount) {
        console.log(`Paying ${amount} using Cash`);
    }
}



// Step 2 — Context

class PaymentContext {

    constructor(strategy) {
        this.strategy = strategy;
    }

    pay(amount) {
        this.strategy.pay(amount);
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }
}



// main function
const payment = new PaymentContext(new Upipayments());

payment.pay(100);

// change the strategy
payment.setStrategy(new Cardpayments());
payment.pay(100);

// change the strategy
payment.setStrategy(new cashpayments());
payment.pay(100);