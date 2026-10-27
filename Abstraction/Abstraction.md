# Abstraction in OOP

## What is Abstraction?

Abstraction is the OOP principle of hiding unnecessary implementation details and exposing only the essential functionality.

In simple words: you should know how to use something without needing to know how it works internally.

## Real-life Example: ATM

When you withdraw money from an ATM:

1. Enter your PIN.
2. Select an amount.
3. Press the withdraw button.
4. Receive your cash.

You do not need to know how the ATM communicates with the bank server, checks your balance, or operates its cash dispenser. You only need the interface for withdrawing money. That is the idea of abstraction.

## JavaScript Example

```js
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
    // A real application would call the bank API here.
  }
}

const payment = new UpiPayment();

// The caller only needs to know about the public pay() method.
payment.pay(1000);
```

### Where is the abstraction?

- `pay(1000)` is the public interface that the caller uses.
- `#validate()` and `#connectToBank()` contain internal implementation details.
- The caller uses `pay()` without needing to know how the payment is validated or processed.

JavaScript abstraction is not limited to private methods. This example illustrates both abstraction and encapsulation: the public method provides a simple interface, while private methods hide implementation details.

## Abstraction Through a Common Interface

A function can work with any payment object that provides a `pay()` method:

```js
function checkout(payment, amount) {
  payment.pay(amount);
}

checkout(new UpiPayment(), 1000);
```

`checkout()` only needs to know that the payment object has a `pay()` method. It does not need to know whether the payment uses UPI, a card, or a wallet.

This makes the code easier to extend: you can add a `WalletPayment` class that provides the same `pay()` method without changing `checkout()`.

## Encapsulation vs Abstraction

| Encapsulation | Abstraction |
| --- | --- |
| Protects internal data and controls access to it | Hides implementation details and exposes an essential interface |
| Example: keeping `#balance` private | Example: calling `withdraw(500)` without knowing its internal logic |
| Focus: data protection and access control | Focus: simplicity and essential behavior |

## Interview Answer

> Abstraction is an OOP principle that hides implementation details and exposes only the essential functionality through a simple interface. For example, a user can call `pay()` without needing to know the internal payment-processing logic.

## Quick Revision

Think of an ATM: you know what to do—press withdraw—but you do not need to know how the ATM works internally. That is abstraction.
