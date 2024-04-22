# Building a Basic Polymorphic Component

Building a basic polymorphic component involves creating a component that can render different underlying HTML elements based on the `as` prop. Here's the code with comments explaining each part:

```tsx
import { ElementType } from 'react';

// Define props for the Container component
type ContainerProps = {
  as: ElementType; // Specifies the type of element to render
};

// Container component
const Container = ({ as }: ContainerProps) => {
  const Component = as; // Store the element type specified by the 'as' prop
  return <Component />; // Render the specified element
};

export default Container;
```

Explanation:

1. **ContainerProps Type Definition:**
   - `ContainerProps` is a type that specifies the `as` prop.
   - The `as` prop specifies the type of HTML element to render.

2. **Container Component:**
   - The `Container` component accepts the `as` prop.
   - Inside the component, the `as` prop determines which HTML element to render.
   - The `Component` variable stores the element type specified by the `as` prop.
   - Finally, the component returns the specified HTML element.

Usage:

```tsx
<Container as="hr" /> {/* Renders an <hr> element */}
<Container as={Button} /> {/* Renders a <Button> element */}
```

Usage Explanation:

- `<Container as="hr" />`: This renders an `<hr>` element.
- `<Container as={Button} />`: This renders a `<Button>` element. Here, `Button` must be a valid React component or a valid HTML tag.