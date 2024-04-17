# Merging Types

In TypeScript, you can merge types using the `&` operator and merge interfaces using the `extends` keyword. Let's illustrate both concepts with commented code examples:

### Merging Types with `&`

You can merge types using the `&` operator to create a new type that includes all properties from both types.

```typescript
// First type declaration
type Person = {
    name: string;
};

// Second type declaration
type Age = {
    age: number;
};

// Merging types using &
type PersonWithAge = Person & Age;

// Using the merged type
let user: PersonWithAge = {
    name: "Alice",
    age: 30
};

console.log(user); // Output: { name: "Alice", age: 30 }
```

### Commented Explanation (Merging Types with `&`):

- We define a type `Person` with a `name` property.
- We define another type `Age` with an `age` property.
- We merge both types using the `&` operator to create a new type `PersonWithAge`.
- We create an object `user` that conforms to the merged `PersonWithAge` type, including all properties from both types.
- We log the `user` object to the console, showing that it contains all properties merged from both types.

### Merging Interfaces with `extends`

You can merge interfaces using the `extends` keyword to create a new interface that inherits properties from both interfaces.

```typescript
// First interface declaration
interface Car {
    brand: string;
}

// Second interface declaration
interface Car {
    model: string;
}

// Merging interfaces using extends
interface MergedCar extends Car {}

// Using the merged interface
let myCar: MergedCar = {
    brand: "Toyota",
    model: "Corolla"
};

console.log(myCar); // Output: { brand: "Toyota", model: "Corolla" }
```

### Commented Explanation (Merging Interfaces with `extends`):

- We define an interface `Car` with a `brand` property.
- We define another interface `Car` with a `model` property.
- We merge both interfaces using the `extends` keyword to create a new interface `MergedCar` that inherits properties from both interfaces.
- We create an object `myCar` that conforms to the merged `MergedCar` interface, including all properties from both interfaces.
- We log the `myCar` object to the console, showing that it contains all properties merged from both interfaces.

Merging types with `&` and interfaces with `extends` in TypeScript allows you to create new types or interfaces that combine properties from multiple sources, providing flexibility and modularity in your code.