# Building a Better Polymorphic Component with Generics

This code example demonstrates how to create a flexible polymorphic component using TypeScript generics. Let's break it down:

```tsx
import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

// Define the props for the Container component
type ContainerProps<T extends ElementType> = {
  as?: T; // The HTML element type or custom component
  children?: ReactNode; // Children of the Container component
} & ComponentPropsWithoutRef<T>; // Inherit all the props of the specified element

// Define the Container component as an arrow function with generics
const Container = <C extends ElementType>({
  as, // The specified HTML element or custom component
  children, // Children of the Container component
  ...props // Other props of the specified element
}: ContainerProps<C>) => {
  // Determine the component to render (default to div if no as prop is provided)
  const Component = as || 'div';

  // Render the component with its props and children
  return (
    <Component {...props}>
      {children}
    </Component>
  );
}

export default Container;
```

- `import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';`: This line imports necessary types from the React library.

- `type ContainerProps<T extends ElementType> = { ... }`: This defines the props for the `Container` component. The `as` prop can be any HTML element (`div`, `span`, `button`, etc.) or a custom component. `children` is a common prop used in React components, representing the child elements of the component. `ComponentPropsWithoutRef<T>` is a utility type provided by React that gets all the props for the specified HTML element or custom component.

- `const Container = <C extends ElementType>({ ... }: ContainerProps<C>) => { ... }`: This defines the `Container` component as an arrow function. It uses TypeScript generics to make the component polymorphic, allowing it to accept any HTML element (`div`, `span`, etc.) or custom component as the `as` prop. 

- `const Component = as || 'div';`: This line determines the component to render based on the `as` prop. If no `as` prop is provided, it defaults to a `div` element.

- `<Component {...props}>{children}</Component>`: This renders the determined component (`Component`) with its props (`props`) and children (`children`).

By using TypeScript generics, this `Container` component provides flexibility and type safety, allowing you to create wrapper components for various HTML elements or custom components in a concise and type-safe manner.

***

Here's how you can use the `Container` component with different HTML elements and custom components:

```tsx
import React from 'react';
import Container from './Container';
import Button from './Button'; // Assume Button is a custom component

function App() {
  return (
    <div className="App">
      {/* Using Container with different HTML elements */}
      <Container as="div" style={{ border: '1px solid black' }}>
        <p>This is a paragraph inside a div Container</p>
      </Container>

      <Container as="section" className="container">
        <h1>Hello, World!</h1>
      </Container>

      {/* Using Container with custom component */}
      <Container as={Button} onClick={() => console.log('Button clicked')}>
        Click me
      </Container>
    </div>
  );
}

export default App;
```

In this example:

- The first `Container` component wraps a paragraph inside a `div`.
- The second `Container` component wraps a heading inside a `section`.
- The third `Container` component wraps a `Button` component.