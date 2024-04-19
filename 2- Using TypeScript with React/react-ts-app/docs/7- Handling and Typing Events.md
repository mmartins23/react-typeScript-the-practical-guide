# Handling and Typing Events

Here are the steps to understand the code:

1. **Importing FormEvent**:
   - The code begins by importing the `FormEvent` type from the `react` module.
   - This type is used to define the event object passed to form submit event handlers.

   ```javascript
   import { FormEvent } from "react";
   ```

2. **Defining NewGoal Component**:
   - The `NewGoal` component is a functional component that represents a form for adding new goals.
   - It does not receive any props.

   ```javascript
   const NewGoal = () => {
     // Functionality will be added here
   }
   ```

3. **Handling Form Submission**:
   - Inside the `NewGoal` component, there is a `handleSubmit` function defined.
   - This function takes a single parameter `e` of type `FormEvent`.
   - It prevents the default form submission behavior using `e.preventDefault()`.

   ```javascript
   const handleSubmit = (e: FormEvent) => {
     e.preventDefault();
   }
   ```

4. **Rendering Form**:
   - The `NewGoal` component returns a JSX structure representing a form.
   - Each input field is associated with a label for accessibility.
   - The form's `onSubmit` event is set to trigger the `handleSubmit` function when the form is submitted.

   ```javascript
   return (
       <form onSubmit={handleSubmit}>
           <p>
               <label htmlFor="goal">Your goal</label>
               <input id="goal" type="text" />
           </p>

           <p>
               <label htmlFor="summary">Short summary</label>
               <input id="summary" type="text" />
           </p>

           <p>
               <button>Add Goal</button>
           </p>
       </form>
   )
   ```

5. **Exporting Component**:
   - Finally, the `NewGoal` component is exported as the default export, making it available for use in other parts of the application.

   ```javascript
   export default NewGoal;
   ```

In summary, the code defines a `NewGoal` component that represents a form for adding new goals. It handles form submission by preventing the default behavior and provides inputs for users to enter their goal and a short summary.