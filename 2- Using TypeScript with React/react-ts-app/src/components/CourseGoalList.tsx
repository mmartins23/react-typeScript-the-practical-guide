// Components
import CourseGoal from "./CourseGoal";

// interfaces
import {ICourseGoal} from '../App';

interface CourseGoalListProps  {
    goals: ICourseGoal[];
}

const CourseGoalList = ({goals}: CourseGoalListProps) => {
  return (
    <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
  )
}

export default CourseGoalList;