# Working with Type Predicates & Facing TypeScript Limitations


Here's the code with comments explaining each part:

```tsx
import { ComponentPropsWithoutRef } from "react";

// Define ButtonProps type for button element
type ButtonProps = {
    el: 'button';  // Specifies that the element type is button
} & ComponentPropsWithoutRef<'button'>;  // ComponentPropsWithoutRef<'button'> provides all button element props except ref

// Define AnchorProps type for anchor element
type AnchorProps = {
    el: 'anchor';  // Specifies that the element type is anchor
} & ComponentPropsWithoutRef<'a'>;  // ComponentPropsWithoutRef<'a'> provides all anchor element props except ref

// Button component that can render either a button or an anchor element
const Button = (props: ButtonProps | AnchorProps) => {
    // If the element type is anchor, render an anchor element
    if (props.el === 'anchor') {
        return <a className="button"{...props}></a>
    } 
    // If the element type is button, render a button element
    else {
        return <button className="button" {...props}></button>
    }
}

export default Button;
```

Explanation:

1. **ButtonProps Type Definition:**
   - `ButtonProps` is a type that specifies the element type as `button`.
   - It combines:
     - The element type (`el`) as `'button'`.
     - All other props that can be applied to a button element.
     - `ComponentPropsWithoutRef<'button'>` provides all button element props except `ref`.

2. **AnchorProps Type Definition:**
   - `AnchorProps` is a type that specifies the element type as `anchor`.
   - It combines:
     - The element type (`el`) as `'anchor'`.
     - All other props that can be applied to an anchor element.
     - `ComponentPropsWithoutRef<'a'>` provides all anchor element props except `ref`.

3. **Button Component:**
   - The `Button` component can render either a `button` or an `anchor` element based on the value of the `el` prop.
   - If the `el` prop is `'anchor'`, it renders an anchor element (`<a>`).
   - If the `el` prop is `'button'`, it renders a button element (`<button>`).
   - All other props are spread onto the rendered element.

4. **Usage in App Component:**
   - In the `App` component, two `Button` components are used, one for a button and one for an anchor.
   - The `el` prop specifies the type of element to render (`button` or `anchor`), and other props are passed accordingly.