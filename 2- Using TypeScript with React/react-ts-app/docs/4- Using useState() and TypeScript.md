# Using useState() and TypeScript

This code demonstrates how to use `useState()` and TypeScript in a React component to manage state and output state-based values.

1. **Importing Dependencies**:
   - Import the `useState` hook from React.
   - Import any necessary components and assets (`Header`, `CourseGoal`, and `goalsImg`).

2. **Defining Type for CourseGoal**:
   - Define a type or interface for the `CourseGoal` object. This type includes properties like `title`, `description`, and `id`.

   ```typescript
   type CourseGoal = {
     title: string;
     description: string;
     id: number;
   }
   ```

3. **Initializing State with `useState()`**:
   - Initialize state for the list of goals using the `useState` hook. The initial state is an empty array of `CourseGoal` objects.
   - Use array destructuring to create state variables `goals` and `setGoals`, where `goals` holds the current state value and `setGoals` is a function to update the state.

   ```typescript
   const [goals, setGoals] = useState<CourseGoal[]>([]);
   ```

4. **Handling Goal Addition**:
   - Define a function `handleAddGoal` to add a new goal to the list when the "Add Goal" button is clicked.
   - Inside `handleAddGoal`, update the state using the setter function `setGoals`. Use the callback form of `setGoals` to access the previous state (`prevGoals`) and append a new goal to it.
   - The new goal is an object with a randomly generated `id`, a predefined `title`, and `description`.

   ```typescript
   const handleAddGoal = () => {
     setGoals((prevGoals) => {
       const newGoal: CourseGoal = {
         id: Math.random(),
         title: 'Learn React + TS',
         description: 'Learn it in depth!',
       };
       return [...prevGoals, newGoal];
     });
   }
   ```

5. **Rendering State-based Values**:
   - Render the list of goals inside an unordered list (`<ul>`).
   - Use the `map` function to iterate over the `goals` array and output each goal as a list item (`<li>`).
   - Pass each goal's `title` and `description` as props to the `CourseGoal` component.

   ```typescript
   <ul>
     {goals.map((goal) => (
       <li key={goal.id}>
         <CourseGoal title={goal.title}>
           <p>{goal.description}</p>
         </CourseGoal>
       </li>
     ))}
   </ul>
   ```

6. **Using Components**:
   - Use the `Header` component to display a header with an image.
   - Use the `CourseGoal` component to display individual course goals.

7. **Adding Event Handling**:
   - Add an "Add Goal" button with an `onClick` event handler that calls the `handleAddGoal` function.

By following these steps, the component manages state using `useState()`, updates state when the "Add Goal" button is clicked, and outputs state-based values in the UI.