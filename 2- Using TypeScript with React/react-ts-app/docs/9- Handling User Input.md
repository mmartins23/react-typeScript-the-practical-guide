# Handling User Input

Here's how user input handling is implemented in this component:

1. **Importing useRef and FormEvent**:
   - The `useRef` hook and the `FormEvent` type are imported from the `react` module.

   ```javascript
   import { useRef, FormEvent } from "react";
   ```

2. **Defining Props Interface**:
   - An interface named `INewGoal` is defined to specify the props expected by the `NewGoal` component.
   - It includes a function prop `onAddGoal` which takes two parameters: `goal` (string) and `summary` (string).

   ```javascript
   interface INewGoal {
       onAddGoal: (goal: string, summary: string) => void;
   }
   ```

3. **Creating Component**:
   - The `NewGoal` component is a functional component that takes an object of type `INewGoal` as its props.
   - Two refs (`goal` and `summary`) are created using the `useRef` hook, specifying that they will reference HTML input elements.
   - The `handleSubmit` function is defined to handle form submission events.
     - It takes an event parameter of type `FormEvent<HTMLFormElement>`.
     - Inside the function, `e.preventDefault()` is called to prevent the default form submission behavior.
     - The values entered in the goal and summary input fields are retrieved using the `current` property of the ref objects. Since `current` could be `null`, a non-null assertion (`!`) is used to access the value.
     - The `e.currentTarget.reset()` method resets the form fields after submission.
     - Finally, the `onAddGoal` function, passed as a prop, is called with the entered goal and summary values.

   ```javascript
   const NewGoal = ({ onAddGoal }: INewGoal) => {
       const goal = useRef<HTMLInputElement>(null);
       const summary = useRef<HTMLInputElement>(null);

       const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
           e.preventDefault();

           const enteredGoal = goal.current!.value;
           const enteredSummary = summary.current!.value;

           e.currentTarget.reset();
           onAddGoal(enteredGoal, enteredSummary);
       }

       // JSX structure for the form...
   }
   ```

4. **Rendering Form**:
   - Inside the `return` statement, a JSX structure representing a form is rendered.
   - Each input field is associated with a label for accessibility.
   - The `ref` attribute is used to attach the `goal` and `summary` refs to their respective input elements.
   - The form's `onSubmit` event is set to trigger the `handleSubmit` function when the form is submitted.

5. **Exporting Component**:
   - Finally, the `NewGoal` component is exported as the default export.

In summary, the `NewGoal` component handles user input by capturing form submission events, retrieving input values, and passing them to a parent component through a callback function provided via props.