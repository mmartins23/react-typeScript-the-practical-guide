# Being Specific With Literal Types

Certainly! In TypeScript, literal types allow you to specify exact values that a variable can hold. This adds specificity to your types, making your code more descriptive and easier to understand. Let's explore this concept with a commented code example:

### Being Specific with Literal Types

You can define literal types by specifying exact values as types using string literals, number literals, or boolean literals.

```typescript
// Literal type for string
let color: "red" | "green" | "blue";

// Assigning a specific string value
color = "red";   // Valid
// color = "yellow"; // Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'.
```

### Commented Explanation:

- We define a variable `color` with a literal type that can only hold the values `"red"`, `"green"`, or `"blue"`.
- We assign the value `"red"` to the `color` variable, which is valid.
- If we try to assign any other value, such as `"yellow"`, TypeScript will throw a type error because it does not match the specified literal type.

### Example Usage:

```typescript
// Literal type for string
let color: "red" | "green" | "blue";

// Assigning a specific string value
color = "red";   // Valid
// color = "yellow"; // Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'.
```

Using literal types in TypeScript allows you to be specific about the exact values that a variable can hold, reducing the chance of errors and making your code more self-documenting. It's particularly useful in scenarios where you have a predefined set of possible values for a variable.