# Defining Function Types

In TypeScript, you can define function types to specify the structure of functions, including their parameter types and return type. Here's how you can do it with commented code examples:

### 1. Defining Function Types

You can define function types using the arrow function notation or the traditional function declaration syntax.

```typescript
// Function type declaration using arrow function notation
type AddFunction = (x: number, y: number) => number;

// Function type declaration using traditional function syntax
type GreetFunction = (name: string) => void;
```

### 2. Using Defined Function Types

Once defined, you can use these function types to declare variables or as types for function parameters or return values.

```typescript
// Variable declaration with function type
let add: AddFunction;

// Function assignment using the defined type
add = (x, y) => {
    return x + y;
};

// Variable declaration with function type
let greet: GreetFunction;

// Function assignment using the defined type
greet = (name) => {
    console.log(`Hello, ${name}!`);
};
```

### Example Usage:

```typescript
// Function type declaration using arrow function notation
type AddFunction = (x: number, y: number) => number;

// Variable declaration with function type
let add: AddFunction;

// Function assignment using the defined type
add = (x, y) => {
    return x + y;
};

// Using the function
let result: number = add(3, 5);
console.log(result);  // Output: 8

// Function type declaration using traditional function syntax
type GreetFunction = (name: string) => void;

// Variable declaration with function type
let greet: GreetFunction;

// Function assignment using the defined type
greet = (name) => {
    console.log(`Hello, ${name}!`);
};

// Using the function
greet("Alice");  // Output: Hello, Alice!
```

Defining function types in TypeScript allows you to specify the structure of functions, making your code more readable and maintainable. It also provides type safety and enables better tooling support in development environments.