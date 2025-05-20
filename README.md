# fluent-methods

> Wrap any object so its methods become fluent and chainable — with full TypeScript support

**fluent-methods** lets you take any object and transform its methods so that each method returns the original object, enabling a fluent interface. Non-method properties are excluded from the returned wrapper.

---

## 📦 Installation

```bash
npm install fluent-methods
```

## 🚀 Comparison

### Without fluent-methods

```js
const today = new Date();

today.setHours(0, 0, 0, 0);
// returns the number of milliseconds since epoch (not the Date object)
```

### With fluent-methods

```js
import fluent from "fluent-methods";

const today = fluent(new Date()).setHours(0, 0, 0, 0);
// returns the original Date object, enabling method chaining
```

Normally, `Date.prototype.setHours` returns a timestamp number, which prevents chaining multiple calls directly. With fluent-methods, all methods return the original object, allowing you to chain multiple method calls cleanly and expressively.

## 🧠 Type Behavior

The wrapper preserves method signatures but overrides return types to always return the original object.

```ts
declare const person: {
  name: string;
  setName(name: string): void;
};

const wrapped = fluent(person);
// wrapped.name ❌ (not available)
// wrapped.setName('Alice') ✅ returns person
```
