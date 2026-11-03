class Employee {

    constructor(name , salery){
        this.name = name;
        this.salery = salery;
    }


    work(){
        console.log(`${this.name} is working`);
    }

    getSalery(){
        return this.salery;
    }

}


class Developer extends Employee {
    constructor(name , salery  , programingLanguage){
        super(name , salery);  // super is helper function to call the parent class constructor
        this.programingLanguage = programingLanguage;
    }


    writecode(){
        console.log(`${this.name} is writing code in ${this.programingLanguage}`);
    }

}


const developer = new Developer('John' , 50000 , 'JavaScript');


developer.work(); // John is working
console.log(developer.getSalery()); // 50000
developer.writecode(); // John is writing code in JavaScript