# Consistency in OOP and LLD

## What is Consistency?

OOP/LLD mein consistency ka simple meaning hai: system ya object har situation mein defined rules follow kare aur data valid, predictable state mein rahe.

Consistency ko encapsulation ke saath confuse mat karna. Encapsulation data ko protect karne mein help karti hai; consistency ka goal data aur behavior ko correct rules ke according maintain karna hai.

## Real-life Example: Bank Account

Maan lo tumhare account mein ₹5,000 hain:

- Deposit ₹1,000 → balance ₹6,000.
- Withdraw ₹2,000 → balance ₹4,000.
- Withdraw ₹10,000 → transaction reject honi chahiye, kyunki balance insufficient hai.

Har operation ke baad bank ke rules follow hone chahiye. Account ka balance randomly negative nahi ho jaana chahiye.

## JavaScript Example

```js
class BankAccount {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Balance cannot be negative");
    }

    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit must be positive");
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.#balance) {
      throw new Error("Invalid withdrawal");
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(5000);

account.deposit(1000);
console.log(account.getBalance()); // 6000

account.withdraw(2000);
console.log(account.getBalance()); // 4000
```

Is example mein class rules enforce karti hai, isliye valid operations ke baad balance correct rehta hai. Real production code mein `NaN`, `Infinity`, aur non-numeric inputs bhi validate karne chahiye.

## Where is Consistency Important in LLD?

### Data consistency

Database mein related records aur values correct rules follow karein.

Example: order cancel hone par stock aur payment status bhi correctly update hone chahiye.

### Object consistency

Class ka object invalid state mein na ja sake.

Example: bank account ka balance negative na ho.

### Business-rule consistency

Application ke business rules har relevant operation mein follow hon.

Example: cancelled order ko dobara ship na kiya ja sake.

## Encapsulation vs Consistency

| Encapsulation | Consistency |
| --- | --- |
| Data aur methods ko class mein organize karna aur access control karna | Data aur object ko valid rules ke according maintain karna |
| `#balance` ko private rakhna | Balance ko invalid value se bachana |
| Consistency achieve karne ka ek tool ho sakta hai | Desired correctness property hai |

Ek important distinction: distributed systems mein consistency ka ek specific meaning bhi hota hai—different replicas ya clients ko data kis tarah visible hota hai. Woh topic OOP object consistency se related hai, lekin exactly same concept nahi hai.

## Interview Answer

> Consistency means maintaining valid, predictable system state by enforcing business rules and invariants across operations. Encapsulation helps protect an object's state, while validation and transactions help preserve correctness.
