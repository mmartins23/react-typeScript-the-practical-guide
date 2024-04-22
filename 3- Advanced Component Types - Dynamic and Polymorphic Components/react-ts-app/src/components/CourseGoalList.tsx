// Components
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";


// interfaces
import { ICourseGoal } from '../App';


interface ICourseGoalListProps {
    goals: ICourseGoal[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: ICourseGoalListProps) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no course goals yet. Start adding some!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="high">
                You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        );
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
}


export default CourseGoalList;