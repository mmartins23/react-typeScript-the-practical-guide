# Basic Primitive Types

Here's a concise explanation of basic primitive types in TypeScript with a commented code example:

```typescript
// Basic Primitive Types in TypeScript

// number: represents both integers and floating-point numbers
let count: number = 5;

// string: represents textual data
let message: string = "Hello, TypeScript!";

// boolean: represents logical values (true or false)
let isActive: boolean = true;

// null and undefined: represent null and undefined values
let n: null = null;
let u: undefined = undefined;

// symbol: represents unique, immutable values, often used as object property keys
let sym: symbol = Symbol("key");

// bigint: represents integers of arbitrary precision
let big: bigint = 100n;

// Example usage
console.log(count);    // Output: 5
console.log(message);  // Output: Hello, TypeScript!
console.log(isActive); // Output: true
console.log(n);        // Output: null
console.log(u);        // Output: undefined
console.log(sym);      // Output: Symbol(key)
console.log(big);      // Output: 100n
```

These types cover the fundamental data types in TypeScript, providing developers with flexibility and clarity in their code.