# Defining Component Props Types

To define component props types and store them as a custom type or interface in TypeScript, you can follow these steps:

1. **Define Props Type Interface**: Create an interface or type alias that defines the structure of the props expected by the component. This interface will specify the types of props such as `title` and `description`.

   ```typescript
   interface CourseGoalProps {
     title: string;
     description: string;
   }
   ```

2. **Use Props Type in Component**: In the component definition, specify the props parameter with the defined interface or type alias. This ensures that the component receives props of the correct type.

   ```typescript
   import React from 'react';

   const CourseGoal = ({ title, description }: CourseGoalProps) => {
     return (
       <article>
         <div>
           <h2>{title}</h2>
           <p>{description}</p>
         </div>
         <button>Delete</button>
       </article>
     );
   };

   export default CourseGoal;
   ```

3. **Import and Use Component**: Import the component in the parent component and pass the props according to the defined interface.

   ```typescript
   import React from 'react';
   import CourseGoal from './components/CourseGoal';

   function App() {
     return (
       <main className="App">
         <CourseGoal title="Learning React with TS" description="Tutorial" />
       </main>
     );
   }

   export default App;
   ```

By following these steps, you ensure that the props passed to the `CourseGoal` component adhere to the defined interface or type alias, providing type safety and better code readability. Additionally, using interfaces or type aliases makes it easier to understand the expected structure of component props and facilitates code maintenance and collaboration.