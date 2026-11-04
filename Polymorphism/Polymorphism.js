class Animal{
    makesound(){ 
        console.log("Animal makes sound");
    }
}

class Dog extends Animal{
    makesound(){
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    makesound(){
        console.log("Cat meows");
    }
}


const dog = new Dog();
const cat = new Cat();


dog.makesound(); // Output: Dog barks
cat.makesound(); // Output: Cat meows

// Method ka naam same hai, lekin har object apna behaviour execute karta hai.

// Isko Runtime Polymorphism (Method Overriding) kehte hain.



class Payment {
    pay(amount) {
        console.log("Processing payment...");
    }
}

class UpiPayment extends Payment {
    pay(amount) {
        console.log(`₹${amount} paid using UPI`);
    }
}

class CardPayment extends Payment {
    pay(amount) {
        console.log(`₹${amount} paid using Card`);
    }
}

class NetBankingPayment extends Payment {
    pay(amount) {
        console.log(`₹${amount} paid using Net Banking`);
    }
}

// Common function
function checkout(paymentMethod, amount) {
    paymentMethod.pay(amount);
}

checkout(new UpiPayment(), 1000);
checkout(new CardPayment(), 2000);
checkout(new NetBankingPayment(), 3000);
