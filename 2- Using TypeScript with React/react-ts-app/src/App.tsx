// Components
import Header from './components/Header';
import goalsImg from '../src/assets/download.png';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

// Hooks
import { useState } from 'react';


export interface ICourseGoal {
  title: string;
  description: string;
  id: number;
}

function App() {

  const [goals, setGoals] = useState<ICourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: ICourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
