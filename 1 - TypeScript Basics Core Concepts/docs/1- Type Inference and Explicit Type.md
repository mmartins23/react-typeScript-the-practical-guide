# Working with Types: Type Inference & Explicit Type Annotations


TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. Let's explore how TypeScript handles type inference and explicit type annotations with code examples.

### Type Inference

TypeScript's type inference infers types when values are assigned to variables or when functions are called without explicit type annotations.

```typescript
// Type inference example
let x = 5;  // TypeScript infers that x is of type number
let y = 3.14;  // TypeScript infers that y is of type number
let z = "hello";  // TypeScript infers that z is of type string

// Inferred types can be checked using typeof
console.log(typeof x);  // Output: number
console.log(typeof y);  // Output: number
console.log(typeof z);  // Output: string
```

In this example, TypeScript infers the types of `x`, `y`, and `z` based on the values assigned to them.

### Explicit Type Annotations

Explicit type annotations in TypeScript allow developers to specify types explicitly for variables, function parameters, and return values.

```typescript
// Explicit type annotation example
let a: number = 5;
let b: number = 3.14;
let c: string = "hello";

// Type annotations for function parameters and return value
function add(x: number, y: number): number {
    return x + y;
}

// Checking annotated types
console.log(typeof a);  // Output: number
console.log(typeof b);  // Output: number
console.log(typeof c);  // Output: string

// Function annotation
console.log(add(2, 3));  // Output: 5
```

In this example, we explicitly annotate the types of variables `a`, `b`, and `c` as `number` and `string`, respectively. Also, the `add` function is annotated to take two `number` parameters and return a `number`.

### Benefits and Use Cases

- **Type Inference**: It allows developers to write TypeScript code with less explicit type annotations, improving code readability and reducing verbosity.

- **Explicit Type Annotations**: They provide clarity and documentation, especially in larger codebases, by explicitly stating the intended types of variables, function parameters, and return values. They also enable TypeScript's static type checking to catch errors during development.

By leveraging both type inference and explicit type annotations, developers can enjoy the benefits of TypeScript's static typing while maintaining code conciseness and clarity.