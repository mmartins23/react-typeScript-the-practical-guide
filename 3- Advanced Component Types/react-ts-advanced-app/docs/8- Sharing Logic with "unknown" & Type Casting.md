# Sharing Logic with "unknown" & Type Casting

Here's a step-by-step explanation of how the sharing logic with "unknown" and type casting was implemented in this component:

1. **Form Component Definition:**
    - Define a type `FormProps` that extends `ComponentPropsWithoutRef<'form'>`.
    - Include an `onSave` function prop that takes `unknown` as an argument and returns `void`.

```typescript
import { ComponentPropsWithoutRef, FormEvent } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
}
```

2. **Form Component Implementation:**
    - Define the `Form` component that receives props of type `FormProps`.
    - Inside the `handleSubmit` function, prevent the default form submission behavior.
    - Extract form data using `FormData` and convert it into a plain JavaScript object.
    - Call the `onSave` function with the extracted data.
    - Render a `<form>` element with the `onSubmit` handler and spread other props.

```typescript
const Form = ({ onSave, children, ...otherProps }: FormProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps}>
            {children}
        </form>
    );
}

export default Form;
```

3. **Usage in the App Component:**
    - In the `App` component, define a function `handleSave` that takes `data` of type `unknown` and casts it to the desired shape.
    - Use the `Form` component and pass the `handleSave` function as the `onSave` prop.
    - Inside the `Form`, use the `children` prop to render input fields and a save button.

```typescript
function App() {
    const handleSave = (data: unknown) => {
        const extractedData = data as { name: string; age: string; };
        console.log(extractedData);
    }

    return (
        <main>
            <Form onSave={handleSave}>
                <Input label="Name" id="name" type="text" />
                <Input label="Age" id="age" type="number" />
                <button>Save Data</button>
            </Form>
        </main>
    );
}

export default App;
```

This setup ensures that the `Form` component is flexible enough to handle various types of form data, while still allowing the parent component to define the data structure.