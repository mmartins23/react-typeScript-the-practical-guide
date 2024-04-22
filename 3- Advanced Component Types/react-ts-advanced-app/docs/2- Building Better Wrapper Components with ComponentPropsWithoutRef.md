# Building Better Wrapper Components with ComponentPropsWithoutRef

Sure, here's the code with comments explaining each part:

```tsx
import { ComponentPropsWithoutRef } from "react";

// Define the InputProps type by combining the provided props for the input element with label and id
type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;  // ComponentPropsWithoutRef<'input'> provides all input element props except ref

// Input component
const Input = ({ label, id, ...props }: InputProps) => {
    return (
        <p>
            {/* Label for the input field */}
            <label htmlFor={id}>{label}</label>
            {/* Input field with the provided id and all other input element props */}
            <input id={id} {...props} />
        </p>
    )
}

// Export the Input component
export default Input;
```

Explanation:

1. **InputProps Type Definition:**
   - `InputProps` is a type that combines:
     - The label and id props for the input field.
     - All other props that can be applied to an input element.
     - `ComponentPropsWithoutRef<'input'>` provides all input element props except `ref`.

2. **Input Component:**
   - `Input` is a functional component that takes `label` and `id` as props, along with all other input element props.
   - Inside the component, it returns a paragraph (`<p>`) containing:
     - A `<label>` element with the provided `id` and the `label` text.
     - An `<input>` element with the provided `id` and all other input element props spread using the spread operator `{...props}`.

3. **Usage in App Component:**
   - In the `App` component, two `Input` components are used, one for the name and one for the age.
   - Each `Input` component is provided with a `label`, `id`, and `type` prop. Other input props can also be provided.