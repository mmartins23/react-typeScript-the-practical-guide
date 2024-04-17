# Interfaces vs Custom Types

Certainly! Let's compare interfaces and custom types (type aliases) in TypeScript with commented code examples:

### Interfaces

Interfaces allow you to define the structure of objects, including their properties and methods. They are often used to enforce a contract on object shapes.

```typescript
// Interface for a person object
interface Person {
    name: string;
    age: number;
}

// Using the interface
let user: Person = {
    name: "John",
    age: 30
};
```

### Custom Types (Type Aliases)

Type aliases, created with the `type` keyword, allow you to create custom names for types. They are more flexible than interfaces and can represent any type, not just objects.

```typescript
// Type alias for a person object
type PersonType = {
    name: string;
    age: number;
};

// Using the type alias
let user: PersonType = {
    name: "John",
    age: 30
};
```

### Differences and Use Cases

1. **Extensibility**:
   - Interfaces can be extended to create new interfaces that inherit properties and methods.
   - Type aliases cannot be extended; they represent a specific type, and new types cannot be derived from them.

2. **Compatibility**:
   - Interfaces can be implemented by classes to enforce a specific structure.
   - Type aliases cannot be implemented directly; they are used primarily for convenience and readability.

3. **Readability**:
   - Interfaces often provide clearer intent, especially when defining object shapes and contracts.
   - Type aliases can be more succinct and may be preferred in certain scenarios where brevity is important.

### Example Usage:

```typescript
// Interface for a person object
interface Person {
    name: string;
    age: number;
}

// Using the interface
let user: Person = {
    name: "John",
    age: 30
};

// Type alias for a person object
type PersonType = {
    name: string;
    age: number;
};

// Using the type alias
let anotherUser: PersonType = {
    name: "Alice",
    age: 25
};
```

In summary, both interfaces and custom types have their strengths and use cases. Interfaces are ideal for defining object shapes and enforcing contracts, while custom types offer flexibility and readability for various scenarios. Choose the one that best fits your specific needs and coding style.