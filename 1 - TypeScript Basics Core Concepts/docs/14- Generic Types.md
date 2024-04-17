# Generic Types

Certainly! Generic types in TypeScript allow you to create reusable components that can work with a variety of data types while maintaining type safety. Let's explore this concept with a commented code example:

```typescript
// Define a generic type for a Box that can hold any type of value
class Box<T> {
    private value: T;

    // Constructor to initialize the box with a value
    constructor(value: T) {
        this.value = value;
    }

    // Method to get the value from the box
    getValue(): T {
        return this.value;
    }

    // Method to set a new value for the box
    setValue(newValue: T): void {
        this.value = newValue;
    }
}

// Create a box for holding numbers
let numberBox = new Box<number>(10); // Create a Box with number type
console.log(numberBox.getValue());   // Output: 10
numberBox.setValue(20);              // Set a new value
console.log(numberBox.getValue());   // Output: 20

// Create a box for holding strings
let stringBox = new Box<string>("Hello"); // Create a Box with string type
console.log(stringBox.getValue());        // Output: Hello
stringBox.setValue("World");               // Set a new value
console.log(stringBox.getValue());        // Output: World
```

### Commented Explanation:

- We define a generic class `Box<T>` that can hold values of any type `T`.
- The constructor of `Box` takes an initial value of type `T` and initializes the box.
- The `getValue` method returns the current value of the box.
- The `setValue` method allows updating the value of the box.
- We create instances of `Box` for both numbers and strings, specifying the type parameter explicitly (`<number>` and `<string>`).
- We demonstrate using the `getValue` and `setValue` methods with different types of values.

Generic types in TypeScript provide flexibility and type safety by allowing you to create reusable components that can work with various data types. They help you write more maintainable and efficient code by reducing redundancy and improving code reuse.