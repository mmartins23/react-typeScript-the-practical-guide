# Building a Basic Wrapper Component


Here's the explanation of the code with comments:

```tsx
// Define the type for the props that the Input component will receive
type InputProps = {
    label: string;  // Label for the input field
    id: string;     // ID for the input field
}

// Input component
const Input = ({ label, id }: InputProps) => {
    return (
        <p>
            {/* Label for the input field */}
            <label htmlFor={id}>{label}</label>
            {/* Input field with the provided ID */}
            <input id={id} type="text" />
        </p>
    )
}

// Export the Input component
export default Input;
```

Explanation:

1. **Type Definition (`InputProps`):**
   - `InputProps` is a type that defines the structure of the props that the `Input` component expects.
   - It has two properties:
     - `label`: A string representing the label for the input field.
     - `id`: A string representing the ID for the input field.

2. **Input Component:**
   - `Input` is a functional component that takes `label` and `id` as props.
   - Inside the component, it returns a paragraph (`<p>`) containing:
     - A `<label>` element with the provided `id` and the `label` text.
     - An `<input>` element with the provided `id` and `type="text"`.

3. **Export:**
   - The `Input` component is exported as the default export of the module, making it available for use in other files.