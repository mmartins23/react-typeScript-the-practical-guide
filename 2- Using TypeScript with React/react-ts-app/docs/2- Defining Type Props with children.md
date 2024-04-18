# Defining Type Props with children

In this code, we're defining a component `CourseGoal` that accepts children as props in addition to the `title`. The `children` prop allows us to pass arbitrary JSX elements as children to the `CourseGoal` component.

Here's how the code works:

1. **Defining Props Type**: We define a type for props using an interface named `CourseGoalProps`. This interface includes `title` of type `string` and `children` of type `ReactNode`. `ReactNode` is a type provided by React that represents any valid JSX children, including elements, strings, or fragments.

   ```typescript
   import { ReactNode } from "react";

   interface CourseGoalProps {
     title: string;
     children: ReactNode;
   }
   ```

2. **Using Props in Component**: In the `CourseGoal` component definition, we destructure the props (`title` and `children`) from the `CourseGoalProps` interface.

   ```typescript
   const CourseGoal = ({ title, children }: CourseGoalProps) => {
     return (
       <article>
         <div>
           <h2>{title}</h2>
           {children}
         </div>
         <button>Delete</button>
       </article>
     );
   };
   ```

   Here, `{children}` represents the JSX elements passed as children to the `CourseGoal` component.

3. **Using the Component**: In the parent component `App`, we import and use the `CourseGoal` component. We provide a `title` prop as well as JSX elements (`<p>Learn it from the ground up</p>`) as children to the `CourseGoal` component.

   ```typescript
   import CourseGoal from './components/CourseGoal'

   function App() {
     return (
       <main className="App">
         <CourseGoal title="Learning React with TS">
           <p>Learn it from the ground up</p>
         </CourseGoal>
       </main>
     );
   }
   ```

By defining a type for props with children, we ensure type safety when using the `CourseGoal` component and provide flexibility to render dynamic content within the component.