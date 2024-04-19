# Reusing Types Across Files

In this code example, types are defined in one file and reused across multiple files, enabling consistency and reducing redundancy. Here's how it works:

1. **Defining Types in a Separate File**:
   - In the `App.tsx` file, the `ICourseGoal` interface is defined to describe the shape of a course goal.
   - This interface includes properties such as `title`, `description`, and `id`.

   ```typescript
   export interface ICourseGoal {
     title: string;
     description: string;
     id: number;
   }
   ```

2. **Using Types in Other Files**:
   - In the `CourseGoalList.tsx` file, the `CourseGoalListProps` interface is defined to describe the props expected by the `CourseGoalList` component.
   - This interface includes a property `goals`, which is an array of `ICourseGoal` objects.

   ```typescript
   import { ICourseGoal } from '../App';

   interface CourseGoalListProps  {
       goals: ICourseGoal[];
   }
   ```

3. **Reusing Types in Components**:
   - In the `App.tsx` file, the `ICourseGoal` interface is imported and used as the type for the `goals` state.
   - The `useState` hook initializes the `goals` state as an array of `ICourseGoal` objects.
   - The `handleAddGoal` function adds a new goal to the `goals` state, ensuring that the new goal conforms to the `ICourseGoal` interface.

   ```typescript
   import { useState } from 'react';
   import { ICourseGoal } from './App';

   const [goals, setGoals] = useState<ICourseGoal[]>([]);
   ```

4. **Passing Props with Typed Values**:
   - In the `App.tsx` file, the `goals` state is passed as props to the `CourseGoalList` component.
   - Since `goals` is of type `ICourseGoal[]`, it matches the expected type defined by the `CourseGoalListProps` interface.

   ```typescript
   <CourseGoalList goals={goals} />
   ```

By defining types in a separate file and importing them as needed, TypeScript ensures that the data structures remain consistent and provides type checking across different parts of the application, promoting better code quality and maintenance.