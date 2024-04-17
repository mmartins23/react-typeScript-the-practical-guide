# Working with Object Types


In TypeScript, object types represent the structure of objects, including their properties and methods. Let's explore working with object types with code examples:

### 1. Object Type Declarations

You can declare an object type by specifying the names and types of its properties.

```typescript
// Object type declaration
type Person = {
    name: string;
    age: number;
};
```

### 2. Object Instantiation

You can create objects of a specific type and initialize their properties.

```typescript
// Object instantiation
let person: Person = {
    name: "John",
    age: 30
};
```

### 3. Accessing Object Properties

You can access properties of an object using dot notation or square brackets.

```typescript
// Accessing object properties
console.log(person.name);  // Output: John
console.log(person["age"]);  // Output: 30
```

### 4. Optional Properties

You can make object properties optional by adding a question mark after their names.

```typescript
// Optional properties
type Book = {
    title: string;
    author?: string; // Optional property
};
```

### 5. Readonly Properties

You can mark object properties as readonly to prevent them from being modified after initialization.

```typescript
// Readonly properties
type Point = {
    readonly x: number;
    readonly y: number;
};

let point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property
```

### Example Usage:

```typescript
// Object type declaration
type Person = {
    name: string;
    age: number;
};

// Object instantiation
let person: Person = {
    name: "John",
    age: 30
};

// Accessing object properties
console.log(person.name);   // Output: John
console.log(person.age);    // Output: 30

// Optional properties
type Book = {
    title: string;
    author?: string; // Optional property
};

let book: Book = { title: "TS Handbook" };
console.log(book);  // Output: { title: "TS Handbook" }

// Readonly properties
type Point = {
    readonly x: number;
    readonly y: number;
};

let point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property
```

Working with object types in TypeScript allows you to define clear and structured data shapes, making your code more understandable and maintainable.