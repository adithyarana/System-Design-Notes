# Inheritance in OOP

## What is Inheritance?

Inheritance ka matlab hai ki ek class doosri class ke existing properties aur methods ko inherit (reuse) kar sakti hai.

Simple words mein: parent class ka code child class reuse kar sakti hai, aur apni additional functionality bhi add kar sakti hai.

> **Yaad rakho:** Child class = Parent class ki existing functionality + apni new functionality.

## Real-life Example: Family

Maan lo ek family mein parent aur child hain. Parent ke paas kuch common characteristics hain:

- Name
- Age
- Walking
- Eating

Child ko bhi ye common characteristics mil sakti hain, lekin child ki apni additional abilities bhi ho sakti hain. Programming mein inheritance ka idea bhi similar hai.

## JavaScript Example: Employee and Developer

Maan lo tum ek company ka employee management system bana rahe ho. Har employee ke paas name, salary aur `work()` method hai. Developer ke paas additional `writeCode()` method hai.

```js
// Parent class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }

  getSalary() {
    return this.salary;
  }
}

// Child class
class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    // Parent constructor call
    super(name, salary);

    this.programmingLanguage = programmingLanguage;
  }

  writeCode() {
    console.log(
      `${this.name} is writing ${this.programmingLanguage} code`
    );
  }
}

// Creating a child object
const developer = new Developer("Adithya", 30000, "JavaScript");

// Parent methods
developer.work();
console.log(developer.getSalary());

// Child method
developer.writeCode();
```

### Output

```text
Adithya is working
30000
Adithya is writing JavaScript code
```

## How the Example Works

### 1. Parent class

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log("Employee is working");
  }
}
```

`Employee` ek parent class hai. Ismein common properties aur methods rakhe hain jo multiple employee types use kar sakte hain.

### 2. `extends` keyword

```js
class Developer extends Employee
```

`extends` ka matlab hai ki `Developer` class, `Employee` class se inherit kar rahi hai. `Developer` ko `Employee` ke methods aur properties use karne ka access milta hai.

### 3. `super()` keyword

```js
constructor(name, salary, programmingLanguage) {
  super(name, salary);
  this.programmingLanguage = programmingLanguage;
}
```

`super()` parent class ke constructor ko call karta hai. JavaScript mein derived class ke constructor mein `this` use karne se pehle `super()` call karna zaroori hai.

### 4. Child class ki apni functionality

```js
writeCode() {
  console.log("Writing code");
}
```

`Developer` ko `Employee` ke methods milte hain, aur woh apne methods bhi define kar sakta hai.

## Method Overriding

Parent ka generic method child class apne implementation se replace kar sakti hai. Isse **method overriding** kehte hain.

```js
class Employee {
  work() {
    console.log("Employee is doing general work");
  }
}

class Developer extends Employee {
  work() {
    console.log("Developer is writing code");
  }
}

const employee = new Employee();
const developer = new Developer();

employee.work();
developer.work();
```

### Output

```text
Employee is doing general work
Developer is writing code
```

Yahan `Developer` ne parent ka `work()` method override kar diya.

## Inheritance Structure

```text
              Employee
          (name, salary, work())
             /           \
      Developer          Manager
      (writeCode())     (manageTeam())
```

Dono child classes `Employee` ke common methods reuse kar sakti hain aur apne specific methods add kar sakti hain.

## Types of Inheritance

| Type | Meaning |
| --- | --- |
| Single | One parent → one child |
| Multilevel | Grandparent → parent → child |
| Hierarchical | One parent → multiple children |
| Multiple | One child → multiple parents |

JavaScript classes directly multiple class inheritance support nahi karti. Iske liye composition ya mixins jaise approaches use kiye jaate hain.

## When Should You Use Inheritance?

Jab genuine **IS-A** relationship ho:

- Developer **IS-A** Employee.
- Manager **IS-A** Employee.
- Car **IS-A** Vehicle.

Lekin Car aur Engine ke liye inheritance use mat karo. Car **HAS-A** Engine hai; yahan composition better hai.

> **Important:** Sirf code reuse ke liye har jagah inheritance use mat karo. Deep inheritance hierarchies code ko difficult bana sakti hain.

## Encapsulation vs Abstraction vs Inheritance

| Concept | Shortcut |
| --- | --- |
| Encapsulation | Data protect karo |
| Abstraction | Internal details hide karo |
| Inheritance | Parent ka code reuse karo |
| Polymorphism | Same interface, different behavior |

## Test Yourself

### 1. Which keyword is used for inheritance in JavaScript?

- `implements`
- `extends`
- `inherits`

### 2. What does `super()` do?

- Creates a new object
- Calls the parent constructor
- Makes a method private

### 3. Developer IS-A Employee. Which concept does this describe?

- Inheritance
- Encapsulation
- Abstraction

### 4. A child class changes the parent's `work()` method. What is this called?

- Overloading
- Method overriding
- Encapsulation

## Quick Revision

Imagine `Employee` ek parent hai. `Developer` aur `Manager` uske children hain. Dono ko common employee features milte hain, lekin dono apna specialized kaam karte hain. Yahi inheritance hai.
