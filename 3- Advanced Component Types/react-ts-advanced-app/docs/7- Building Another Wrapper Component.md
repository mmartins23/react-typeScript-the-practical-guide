# Building Another Wrapper Component (Custom Form Component)

```typescript
import { ComponentPropsWithoutRef } from "react"

// Define the type for FormProps using ComponentPropsWithoutRef<'form'>
type FormProps = ComponentPropsWithoutRef<'form'>;

// Define a functional component named Form that accepts props of type FormProps
const Form = (props: FormProps) => {
    // Render a form element with props spread and children
    return <form {...props}>{props.children}</form>
}

export default Form;
```

This code creates a reusable `Form` component. It accepts all valid props for a `form` HTML element and any children elements.