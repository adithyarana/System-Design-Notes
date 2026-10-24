# Encapsulation in OOP

## What is Encapsulation?

Encapsulation is the Object-Oriented Programming principle of wrapping data and the methods that work on that data inside a class.

It helps us:
- protect the internal data from direct outside changes,
- keep related logic together,
- control how data is accessed and modified.

In simple words: data is hidden, and only a safe controlled interface is exposed.

## Real-life Example

Think of a bank account:

- It stores the current balance.
- You can deposit or withdraw money.
- You should not be able to directly set the balance to any random value.

So we create methods like:
- `deposit()`
- `withdraw()`
- `getBalance()`

These methods validate the input before changing the value.

## Why Encapsulation is Useful

Encapsulation helps in:
- data protection,
- valid state management,
- reduced accidental bugs,
- cleaner and safer code.

It keeps the object consistent by preventing invalid values from being assigned directly.

## JavaScript Example

```js
class BankAccount {
  #balance = 0;

  constructor(initialBalance = 0) {
    if (typeof initialBalance !== "number" || !Number.isFinite(initialBalance) || initialBalance < 0) {
      throw new Error("Initial balance must be a valid non-negative number");
    }

    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }

    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number");
    }

    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(5000);
console.log(account.getBalance()); // 5000

account.deposit(2000);
console.log(account.getBalance()); // 7000

account.withdraw(1500);
console.log(account.getBalance()); // 5500
```

### Important point

This will not work outside the class:

```js
console.log(account.#balance); // Error
account.#balance = -100000; // Error
```

Because `#balance` is a private field and cannot be accessed directly outside the class.

## Key Terms

### Private field
A field marked with `#` is private to the class.

### Public method
A method like `deposit()`, `withdraw()`, or `getBalance()` is accessible from outside and provides a safe way to interact with the object.

### `this`
`this` refers to the current object instance. In the example, `this.#balance` means the private balance of that specific object.

## Benefits of Encapsulation

- restricts direct modification of data,
- keeps data and behavior together,
- improves security and reliability,
- prevents invalid state,
- makes code easier to maintain.

## Encapsulation vs Abstraction

- Encapsulation: hiding and protecting internal data.
- Abstraction: showing only the necessary details and hiding implementation complexity.

Example:
- Encapsulation ensures you cannot directly change the balance.
- Abstraction lets you call `withdraw(500)` without knowing the internal logic.

## Interview Answer

> Encapsulation is an OOP concept where data and the methods operating on that data are bundled inside a class, and direct access to the data is restricted. This ensures controlled access, better data integrity, and safer code.

## Quick Revision Checklist

- [ ] I understand that encapsulation hides internal data.
- [ ] I know how private fields work in JavaScript.
- [ ] I can explain why `deposit()` and `withdraw()` are useful.
- [ ] I know that validation prevents invalid states.
- [ ] I can distinguish encapsulation from abstraction.

## Summary

Encapsulation means protecting data and exposing only safe, controlled ways to use it. It keeps objects consistent and helps build robust applications.
