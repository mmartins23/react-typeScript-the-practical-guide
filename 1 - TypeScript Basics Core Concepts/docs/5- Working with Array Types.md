# Working with Array Types

In TypeScript, object types represent the structure of objects, including their properties and methods. Let's explore working with object types with code examples:

Got it, let's focus solely on using `string[]` notation for array types in TypeScript:

### 1. Array Type Declaration

You can declare array types using the `type[]` notation, specifying the type of elements within square brackets.

```typescript
// Array type declaration
let names: string[] = ["Alice", "Bob", "Charlie"];
```

### 2. Accessing Array Elements

You can access elements of an array using index notation.

```typescript
// Accessing array elements
console.log(names[0]);  // Output: Alice
console.log(names[1]);  // Output: Bob
```

### 3. Modifying Array Elements

You can modify elements of an array using index notation or array methods.

```typescript
// Modifying array elements
names[0] = "Alex";        // Change the first element to "Alex"
names.push("David");      // Add a new element at the end
names.splice(1, 1, "Barbara");  // Replace the second element with "Barbara"
```

### 4. Readonly Arrays

You can mark arrays as readonly to prevent them from being modified after initialization.

```typescript
// Readonly array
let readonlyNames: ReadonlyArray<string> = ["Alice", "Bob", "Charlie"];
// readonlyNames.push("David"); // Error: Property 'push' does not exist on type 'readonly string[]'
```

### Example Usage:

```typescript
// Array type declaration
let names: string[] = ["Alice", "Bob", "Charlie"];

// Accessing array elements
console.log(names[0]);  // Output: Alice
console.log(names[1]);  // Output: Bob

// Modifying array elements
names[0] = "Alex";        // Change the first element to "Alex"
names.push("David");      // Add a new element at the end
names.splice(1, 1, "Barbara");  // Replace the second element with "Barbara"

// Readonly array
let readonlyNames: ReadonlyArray<string> = ["Alice", "Bob", "Charlie"];
// readonlyNames.push("David"); // Error: Property 'push' does not exist on type 'readonly string[]'
```

Using `string[]` notation for array types in TypeScript allows for clear declaration of arrays containing specific types of elements, ensuring type safety and enhancing code readability.