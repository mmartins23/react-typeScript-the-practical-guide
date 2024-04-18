// Components
import Header from './components/Header';
import CourseGoal from './components/CourseGoal';
import goalsImg from './components/download.png';

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learning React with TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}

export default App;
