# Passing Functions as Values

Here are the steps to understand how functions are passed as values in React components:

1. **Defining Function in Parent Component**:
   - In the `App` component, the `handleDeleteGoal` function is defined.
   - This function takes an `id` parameter and updates the `goals` state by filtering out the goal with the matching `id`.

   ```javascript
   const handleDeleteGoal = (id: number) => {
     setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
   }
   ```

2. **Passing Function as Prop**:
   - In the `App` component, the `handleDeleteGoal` function is passed as a prop named `onDeleteGoal` to the `CourseGoalList` component.
   - This allows the child component to call the function defined in the parent component.

   ```javascript
   <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
   ```

3. **Receiving Function as Prop in Child Component**:
   - In the `CourseGoalList` component, the `onDeleteGoal` prop is declared as a function that takes an `id` parameter and returns `void`.

   ```javascript
   interface CourseGoalListProps {
       goals: ICourseGoal[];
       onDeleteGoal: (id: number) => void;
   }
   ```

4. **Calling Function from Child Component**:
   - In the `CourseGoal` component, the `onDelete` prop (which is the same as `onDeleteGoal` in the parent) is called when the delete button is clicked.
   - This calls the function passed from the parent component with the `id` of the goal as an argument.

   ```javascript
   <button onClick={() => onDelete(id)}>Delete</button>
   ```

5. **Deleting Goal from Parent Component**:
   - When the delete button is clicked in the `CourseGoal` component, it triggers the `onDelete` function passed from the parent.
   - This function is the `handleDeleteGoal` function defined in the `App` component.
   - It removes the goal with the corresponding `id` from the `goals` state array.

By passing functions as props from parent to child components, React allows for communication between components and enables actions in child components to affect the state managed by their parent components. This pattern helps create reusable and maintainable code in React applications.