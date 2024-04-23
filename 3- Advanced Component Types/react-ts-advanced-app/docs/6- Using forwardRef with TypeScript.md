# Using forwardRef with TypeScript


Sure, here's the code explained with comments:

```tsx
import { forwardRef, ComponentPropsWithoutRef } from "react";

// Define InputProps as a combination of label and id props with native input element props
type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;

// Define Input as a forwardRef component which accepts HTMLInputElement and InputProps
const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, ...props }, ref) => {
    return (
        <p>
            {/* Label associated with input id */}
            <label htmlFor={id}>{label}</label>
            {/* Input element with spread props and ref forwarded */}
            <input id={id} {...props} ref={ref} />
        </p>
    )
});

export default Input;
```

Here's how you can use this component:

```tsx
import { useRef } from "react";

// Usage of Input component
function App() {
    // Create a ref for the input element
    const input = useRef<HTMLInputElement>(null);

    return (
        <div>
            {/* Use Input component with label and id props, and ref */}
            <Input label="Test" id="test" ref={input} />
        </div>
    );
}

export default App;
```

In this example, `forwardRef` is used to forward the `ref` passed to `Input` component to the underlying `input` element.