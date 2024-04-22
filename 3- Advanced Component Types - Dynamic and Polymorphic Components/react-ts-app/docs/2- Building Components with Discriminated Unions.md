# Building Components with Discriminated Unions

Sure! Here's the explanation of the code with comments:

```tsx
import { ReactNode } from "react";

// Interface for the InfoHint component
interface IInfoHint {
    mode: 'hint';           // Mode is always 'hint'
    children: ReactNode;    // Children can be any ReactNode
}

// Interface for the InfoWarning component
interface IInfoWarning {
    mode: 'warning';                    // Mode is always 'warning'
    severity: 'low' | 'medium' | 'high'; // Severity can be 'low', 'medium', or 'high'
    children: ReactNode;                // Children can be any ReactNode
}

// Union type combining InfoHint and InfoWarning interfaces
type IInfoBoxProps = IInfoHint | IInfoWarning;

// InfoBox component
const InfoBox = (props: IInfoBoxProps) => {
    const { mode, children } = props;
    // Check if mode is 'hint'
    if (mode === 'hint') {
        // Render InfoHint component
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        );
    }
    // If mode is 'warning'
    const { severity } = props;
    // Render InfoWarning component
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside >
    );
}

export default InfoBox;
```

Explanation:

1. **Interfaces:**
   - `IInfoHint`: Represents the props for the `InfoHint` component. It has two properties:
     - `mode`: Always `'hint'`.
     - `children`: Any ReactNode.
   - `IInfoWarning`: Represents the props for the `InfoWarning` component. It has three properties:
     - `mode`: Always `'warning'`.
     - `severity`: Can be `'low'`, `'medium'`, or `'high'`.
     - `children`: Any ReactNode.

2. **Union Type:**
   - `IInfoBoxProps`: Union type that combines `IInfoHint` and `IInfoWarning`. It represents the props for the `InfoBox` component. It can have either `mode: 'hint'` or `mode: 'warning'`.

3. **Component Function:**
   - `InfoBox`: The main component function. It takes `props` of type `IInfoBoxProps`.
   - It checks the `mode` property to decide whether to render `InfoHint` or `InfoWarning`.
   - If `mode` is `'hint'`, it renders the `InfoHint` component.
   - If `mode` is `'warning'`, it renders the `InfoWarning` component.

4. **Rendering:**
   - For `'hint'` mode, it renders the `InfoHint` component with the appropriate class and children.
   - For `'warning'` mode, it renders the `InfoWarning` component with the appropriate class, severity, and children.

This approach allows you to create a flexible `InfoBox` component that can render either a hint or a warning message based on the provided props. The use of a discriminated union (`mode`) ensures type safety.