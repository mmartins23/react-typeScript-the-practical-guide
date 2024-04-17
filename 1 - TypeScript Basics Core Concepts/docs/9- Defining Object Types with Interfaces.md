# Defining Object Types with Interfaces

In TypeScript, you can define object types using interfaces. Interfaces provide a way to describe the structure of objects, including their properties and methods. Here's how you can do it with commented code examples:

### 1. Defining Object Types with Interfaces

You can define an interface using the `interface` keyword followed by the interface name and the definition of its properties.

```typescript
// Interface for a person object
interface Person {
    name: string;
    age: number;
    email: string;
}
```

### 2. Using Interfaces

Once defined, you can use the interface `Person` to enforce the structure of objects.

```typescript
// Using the interface
let user: Person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
```

### Example Usage:

```typescript
// Interface for a person object
interface Person {
    name: string;
    age: number;
    email: string;
}

// Using the interface
let user: Person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Accessing properties
console.log(user.name);   // Output: John
console.log(user.age);    // Output: 30
console.log(user.email);  // Output: john@example.com
```

### Commented Explanation:

- We define an interface `Person` with properties `name`, `age`, and `email`.
- We create an object `user` that adheres to the structure defined by the `Person` interface.
- We access the properties of the `user` object using dot notation.

Defining object types with interfaces in TypeScript allows for clear specification of object structures, enhancing code readability and maintainability. Interfaces also provide type checking, enabling early error detection and better tooling support in development environments.