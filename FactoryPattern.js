//Factory Pattern ka kaam object create karna hota hai.
// 1. Simple Factory

// Ye Factory Pattern ka simplest form hai.

// Example: Payment

// Suppose 3 payment methods hain:


// "upi"
//   ↓
// PaymentFactory
//   ↓
// new UpiPayment()
//   ↓
// payment.pay()


//Object creation ka logic application ke multiple places mein spread ho sakta hai.

class upipayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI`);
    }
}

class CardPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Card`);
    }
}

class CashPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Cash`);
    }
}


// Payment Factory

class PaymentFactory {

    static createpayment(type) {

        if (type == "upi") {
            return new upipayment()
        }

        if (type == "card") {
            return new CardPayment()
        }

        if (type == "cash") {
            return new CashPayment()
        }

        throw new Error("invalid")
    }

}


const payment = PaymentFactory.createpayment("cash")
const payment1 = PaymentFactory.createpayment("upi")
payment.pay(1000)
payment1.pay(2000)