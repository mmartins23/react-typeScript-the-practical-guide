# Generic Event Types and usingRef()

Here's how the code works, explaining the use of `useRef()` and generic event types:

1. **Importing useRef and FormEvent**:
   - The `useRef` hook and the `FormEvent` type are imported from the `react` module.

   ```javascript
   import { useRef, FormEvent } from "react";
   ```

2. **Defining Refs**:
   - Two `useRef` hooks are used to create ref objects for the goal and summary input elements.
   - The `useRef<HTMLInputElement>(null)` syntax initializes the ref object with a value of `null`, indicating that the DOM element is not yet available.
   - These refs are later attached to the corresponding input elements in the JSX.

   ```javascript
   const goal = useRef<HTMLInputElement>(null);
   const summary = useRef<HTMLInputElement>(null);
   ```

3. **Handling Form Submission**:
   - The `handleSubmit` function is defined to handle form submission events.
   - It takes an event parameter of type `FormEvent<HTMLFormElement>`.
   - Within the function, `e.preventDefault()` is called to prevent the default form submission behavior.
   - The values entered in the goal and summary input fields are retrieved using the `current` property of the ref objects. Since `current` could be `null`, a non-null assertion (`!`) is used to access the value.

   ```javascript
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();

       const enteredGoal = goal.current!.value;
       const enteredSummary = summary.current!.value;
   }
   ```

4. **Rendering Form**:
   - The `NewGoal` component returns a JSX structure representing a form.
   - Each input field is associated with a label for accessibility.
   - The `ref` attribute is used to attach the `goal` and `summary` refs to their respective input elements.
   - The form's `onSubmit` event is set to trigger the `handleSubmit` function when the form is submitted.

   ```javascript
   return (
       <form onSubmit={handleSubmit}>
           <p>
               <label htmlFor="goal">Your goal</label>
               <input
                   id="goal"
                   type="text"
                   ref={goal} />
           </p>

           <p>
               <label htmlFor="summary">Short summary</label>
               <input
                   id="summary"
                   type="text"
                   ref={summary} />
           </p>

           <p>
               <button>Add Goal</button>
           </p>
       </form>
   )
   ```

5. **Exporting Component**:
   - Finally, the `NewGoal` component is exported as the default export.

   ```javascript
   export default NewGoal;
   ```

In summary, this code defines a `NewGoal` component that represents a form for adding new goals. It uses `useRef()` to create refs for input elements and handles form submission events by retrieving the input values from the ref objects.