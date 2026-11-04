# Polymorphism in OOP — Easy Hinglish

## Polymorphism kya hota hai?

**Polymorphism** ka matlab hai: “one interface, many forms.”

Simple words mein, different objects same method call ka response apne-apne tareeke se de sakte hain.

Yaad rakho:

- **Poly** = many
- **Morph** = forms

Matlab, same method ka behavior us object ke hisaab se alag ho sakta hai jo usse call karta hai.

## Real-life example: Animals

Socho `Dog`, `Cat`, aur `Cow` teeno ke paas `makeSound()` method hai:

| Animal | `makeSound()` ka result |
| --- | --- |
| Dog | Bark! |
| Cat | Meow! |
| Cow | Moo! |

Method ka naam same hai, lekin har animal alag sound karta hai. Yahi polymorphism hai.

## JavaScript example: Method overriding

```js
class Animal {
  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog says: Bark!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat says: Meow!");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Cow says: Moo!");
  }
}

const animals = [new Dog(), new Cat(), new Cow()];

for (const animal of animals) {
  animal.makeSound();
}
```

Output:

```text
Dog says: Bark!
Cat says: Meow!
Cow says: Moo!
```

### Code kaise kaam karta hai?

1. `Animal` common `makeSound()` method define karta hai.
2. `Dog`, `Cat`, aur `Cow`, `Animal` ko extend karte hain.
3. Har child class `makeSound()` ko **override** karke apna behavior deti hai.
4. `makeSound()` call karne par actual object ka implementation run hota hai.

Isse **method overriding ke through runtime polymorphism** kehte hain.

## Real-world example: Payment methods

UPI, card, aur net banking — teeno mein `pay()` operation hota hai, lekin har ek payment ko alag tareeke se process karta hai.

```js
class UpiPayment {
  pay(amount) {
    console.log(`₹${amount} paid using UPI`);
  }
}

class CardPayment {
  pay(amount) {
    console.log(`₹${amount} paid using Card`);
  }
}

class NetBankingPayment {
  pay(amount) {
    console.log(`₹${amount} paid using Net Banking`);
  }
}

function checkout(paymentMethod, amount) {
  paymentMethod.pay(amount);
}

checkout(new UpiPayment(), 1000);
checkout(new CardPayment(), 2000);
checkout(new NetBankingPayment(), 3000);
```

`checkout()` ko ye jaanne ki zaroorat nahi ki payment UPI hai, card hai, ya net banking. Bas object par `pay()` method hona chahiye.

Polymorphism ka practical fayda ye hai: code common interface use karta hai aur har implementation apne details khud handle karta hai.

## Polymorphism ke common types

| Type | Meaning | Example |
| --- | --- | --- |
| Runtime polymorphism | Runtime par object ke implementation ke hisaab se method run hota hai. | Method overriding |
| Compile-time polymorphism | Compile time par decide hota hai ki kaunsa method run hoga; commonly method overloading se. | Java jaise languages mein traditional method overloading |

JavaScript mein traditional compile-time method overloading built-in nahi hai. Same class mein same naam ka method dobara define karne par pehli definition replace ho jaati hai. Similar behavior optional parameters, rest parameters, ya conditions se manually implement kar sakte ho.

## OOP ke chaar pillars

| Pillar | Simple meaning |
| --- | --- |
| Encapsulation | Data protect karna aur uska access control karna |
| Abstraction | Implementation details hide karke zaroori behavior dikhana |
| Inheritance | Doosri class ka behavior reuse ya extend karna |
| Polymorphism | Same interface se different behavior paana |

## Interview-ready answer

> Polymorphism is an OOP principle that allows objects of different classes to respond to the same method call in different ways. For example, `Dog`, `Cat`, and `Cow` can all have a `makeSound()` method, but each provides its own implementation.

## Test yourself

Answer key dekhne se pehle khud jawab dene ki koshish karo.

1. Polymorphism ka kya matlab hai?
   - A. One class, one method
   - B. One interface, many forms
   - C. Data hide karna
2. `Dog` class `Animal` ke `makeSound()` ka apna version deti hai. Isse kya kehte hain?
   - A. Encapsulation
   - B. Abstraction
   - C. Runtime polymorphism
3. Payment example mein kya common rehta hai?
   - A. Method name `pay()`
   - B. Payment implementation
   - C. Payment provider

<details>
<summary>Answers dekho</summary>

1. B — One interface, many forms.
2. C — Method overriding ke through runtime polymorphism.
3. A — Har payment type same `pay()` method deta hai, lekin behavior alag hota hai.

</details>

## Quick revision

- Same method call, different object, different behavior.
- Child class parent class ke method ko **override** kar sakti hai.
- Runtime par object ka apna implementation select hota hai.
- Caller common method use kar sakta hai bina object ka exact type jaane.

**Memory trick:** Dog, Cat, aur Cow — teeno se `makeSound()` bolo. Sawal same hai, par har ek ka jawab alag. Yahi polymorphism hai.
