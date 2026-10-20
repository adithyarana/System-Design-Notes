

//Adapter converts one interface into another interface that the client expects.


// "Adapter is a structural design pattern that allows two incompatible interfaces to work together. It acts as a bridge between the client and an existing class whose interface doesn't match what the client expects.

class PaymentService {
    pay(amount) {
        console.log(`Payment of ₹${amount}`);
    }
}



class StripePayment {
    makePayment(amount) {
        console.log(`Paid ₹${amount} using Stripe`);
    }
}



class StripePaymentAdapter {

    constructor(stripePayment) {
        this.stripePayment = stripePayment;
    }

    pay(amount) {
        this.stripePayment.makePayment(amount);
    }
}


const stripe = new StripePayment();

const payment = new StripePaymentAdapter(stripe);

payment.pay(1000);



// My application expects a pay() method, but the third-party Stripe class provides makePayment(). Since I don't want to modify the existing Stripe class, I create an Adapter. The Adapter exposes the pay() method expected by my application and internally calls Stripe's makePayment() method."