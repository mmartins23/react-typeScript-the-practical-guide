# Combining Types Union Types (Alternative Types)


Combining types or using union types, also known as alternative types, allows you to create a type that can hold values of multiple different types. This is particularly useful when you want a function or a variable to accept more than one type of input. Here's a code example in TypeScript, with comments explaining each part:

```typescript
// Define a type for an object that can be either a string or a number
type StringOrNumber = string | number;

// Function that takes a StringOrNumber as an argument and logs it
function logValue(value: StringOrNumber) {
    console.log(value);
}

// Usage examples
logValue("Hello"); // Logs: Hello
logValue(42); // Logs: 42

// Variable that can hold a StringOrNumber
let myValue: StringOrNumber;

// Assigning a string to myValue
myValue = "World";

// Assigning a number to myValue
myValue = 123;

// Error: This will throw a type error since a boolean is not allowed
// myValue = true;
```

In this example:

1. We define a new type `StringOrNumber` using the union operator `|`, which means it can hold values that are either strings or numbers.
2. We declare a function `logValue` that takes an argument of type `StringOrNumber` and simply logs it to the console.
3. We use the `logValue` function with both a string and a number, demonstrating that it accepts both types.
4. We declare a variable `myValue` of type `StringOrNumber`, which means it can hold either strings or numbers.
5. We assign a string and then a number to `myValue`, which works fine because it can hold either type.
6. If we try to assign a boolean value to `myValue`, it will throw a type error because it's not allowed based on the defined type.

This flexibility provided by union types allows for more versatile and expressive type definitions in TypeScript, enabling safer and more robust code.