// Components
import Header from './components/Header';
import goalsImg from '../src/assets/download.png';

// Hooks
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

export interface ICourseGoal {
  title: string;
  description: string;
  id: number;
}

function App() {

  const [goals, setGoals] = useState<ICourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: ICourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}

export default App;
