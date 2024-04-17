# Adding Types to Functions - Parameter & Return Value Types


In TypeScript, you can add types to function parameters and return values to enhance type safety and code clarity. Here's how you can do it with commented code examples:

### 1. Adding Types to Function Parameters

You can specify types for function parameters by following the parameter name with a colon and the desired type.

```typescript
// Function with parameter types
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

// Calling the function
greet("Alice");  // Output: Hello, Alice!
```

### 2. Adding a Return Value Type

You can specify the return type of a function by following the parameter list and a colon with the desired return type.

```typescript
// Function with parameter and return value types
function add(x: number, y: number): number {
    return x + y;
}

// Calling the function
let result: number = add(3, 5);
console.log(result);  // Output: 8
```

### Example Usage:

```typescript
// Function with parameter types
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

// Calling the function
greet("Alice");  // Output: Hello, Alice!

// Function with parameter and return value types
function add(x: number, y: number): number {
    return x + y;
}

// Calling the function
let result: number = add(3, 5);
console.log(result);  // Output: 8
```

Adding types to function parameters and return values in TypeScript helps catch errors during development and makes your code more self-documenting. It also improves code readability and enables better tooling support for development environments.