// Basic Coffeee


class Coffeee {

    getDescription() {
        return "coffee";
    }

    getcost() {
        return 100;
    }
}


// now Milk Decorator


class MilkDecorator {

    constructor(coffee) {
        this.coffee = coffee
    }

    getDescription() {
        return this.coffee.getDescription() + " + MIlk"
    }

    getcost() {
        return this.coffee.getcost() + 20;
    }
}


class SugarDecorator {

    constructor(coffee) {
        this.coffee = coffee
    }

    getDescription() {
        return this.coffee.getDescription() + "+ suger"
    }

    getcost() {
        return this.coffee.getcost() + 5
    }
}


const coffee = new Coffeee()

// console.log(coffee.getDescription());
// console.log(coffee.getcost());


const Milkcoffee = new MilkDecorator(coffee)
const sugercoffee = new SugarDecorator(Milkcoffee)


// console.log(Milkcoffee.getDescription())
// console.log(Milkcoffee.getcost())


console.log(sugercoffee.getDescription())
console.log(sugercoffee.getcost())



// Decorator Pattern is a structural design pattern used to dynamically add new responsibilities or 
// functionality to an existing object without modifying its original class. 
// For example, in a coffee shop, we can start with a basic coffee and wrap it with MilkDecorator, 
// SugarDecorator and WhippedCreamDecorator.
// each decorator adds its own cost and description while keeping the original Coffeee class unchanged