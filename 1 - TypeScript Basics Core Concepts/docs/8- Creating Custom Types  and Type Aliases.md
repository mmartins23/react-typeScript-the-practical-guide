# Creating Custom Types / Type Aliases

In TypeScript, you can create custom types or type aliases using the `type` keyword. This allows you to give a name to a particular type, making your code more readable and maintainable. Here's how you can do it with commented code examples:

### 1. Creating Type Aliases

You can create a type alias using the `type` keyword followed by the alias name and the type definition.

```typescript
// Type alias for a person object
type Person = {
    name: string;
    age: number;
    email: string;
};
```

### 2. Using Type Aliases

Once defined, you can use the type alias `Person` just like any other type in TypeScript.

```typescript
// Using the type alias
let user: Person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
```

### Example Usage:

```typescript
// Type alias for a person object
type Person = {
    name: string;
    age: number;
    email: string;
};

// Using the type alias
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

Creating custom types or type aliases in TypeScript helps you define clear and reusable data structures, improving code readability and maintainability. It also enables you to enforce type constraints and catch errors early in the development process.