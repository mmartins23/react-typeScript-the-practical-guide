// Components
import CourseGoal from "./CourseGoal";

// interfaces
import { ICourseGoal } from '../App';

interface CourseGoalListProps {
    goals: ICourseGoal[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal
                        id={goal.id}
                        title={goal.title}
                        onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}

export default CourseGoalList;