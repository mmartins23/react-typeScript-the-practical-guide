# Exposing Component APIs with useImperativeHandle


Here's the explanation of how the component achieves exposing component APIs with `useImperativeHandle` in steps, along with the commented code:

```typescript
import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

// Define the props for the Form component
type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
}

// Define the type for the Form component's handle
export type FormHandle = {
    clear: () => void;
};

// Define the Form component
const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...otherProps }, ref) => {
    // Create a ref to hold the form element
    const form = useRef<HTMLFormElement>(null);

    // Use useImperativeHandle to expose custom methods on the component's ref
    useImperativeHandle(ref, () => ({
        // Expose a clear method to reset the form
        clear() {
            form.current?.reset();
        }
    }));

    // Define the submit handler
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    )
});

export default Form;
```

Explanation:

1. **Form Component Definition:**
   - Define the `FormProps` type, extending `ComponentPropsWithoutRef<'form'>`, and include an `onSave` function prop.
   - Export the `FormHandle` type, representing the handle of the `Form` component.

2. **Form Component Implementation:**
   - Define the `Form` component using `forwardRef`.
   - Create a ref `form` to hold the form element.
   - Use `useImperativeHandle` to expose a custom method `clear` on the component's ref, which resets the form.
   - Define the `handleSubmit` function to handle form submission, extract form data, and call the `onSave` function.
   - Return a `<form>` element with the `onSubmit` handler, spread other props, and attach the `form` ref.

3. **Usage in the App Component:**
   - Import `Form` and `Input` components.
   - Define a ref `customForm` of type `FormHandle`.
   - Define a `handleSave` function to handle form submission.
   - Render the `Form` component, passing `handleSave` as the `onSave` prop and attaching the `customForm` ref.
   - Inside the `Form`, render `Input` components for name and age inputs, and a submit button.
   - When data is saved, call the `clear` method on the `customForm` ref to reset the form.