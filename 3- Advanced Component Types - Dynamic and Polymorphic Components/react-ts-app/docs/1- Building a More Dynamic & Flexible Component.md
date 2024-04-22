# Building a More Dynamic & Flexible Component

Sure! Here's how the code works step by step:

1. **`InfoBox` Component:**
    - `InfoBox` is a component that displays an info box based on the mode provided.
    - It receives two props: `mode` and `children`.
    - `mode` specifies whether the box is a hint or a warning.
    - `children` represent the content of the box.
    - If the `mode` is 'hint', it renders an `<aside>` element with the class `infobox infobox-hint`, and displays the content.
    - If the `mode` is 'warning', it renders an `<aside>` element with the class `infobox infobox-warning warning--medium`, displays a 'Warning' title, and the content.

    ```jsx
    import { ReactNode } from "react";

    interface IInfoBox {
        mode: 'hint' | 'warning';
        children: ReactNode;
    }

    const InfoBox = ({ mode, children }: IInfoBox) => {
        if (mode === 'hint') {
            return (
                <aside className="infobox infobox-hint">
                    <p>{children}</p>
                </aside>
            );
        }

        return (
            <aside className="infobox infobox-warning warning--medium">
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>
        );
    }

    export default InfoBox;
    ```

2. **`CourseGoalList` Component:**
    - `CourseGoalList` is a component that displays a list of course goals.
    - It receives two props: `goals` and `onDeleteGoal`.
    - If there are no goals, it renders an `InfoBox` with the mode set to 'hint', informing the user that they have no course goals yet.
    - If the number of goals is equal to or more than 4, it renders an `InfoBox` with the mode set to 'warning', informing the user not to put too many goals on their plate.
    - Then, it renders the list of goals using the `CourseGoal` component.

    ```jsx
    import CourseGoal from "./CourseGoal";
    import InfoBox from "./InfoBox";
    import { ICourseGoal } from '../App';
    import { ReactNode } from "react";

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
                <InfoBox mode="warning">
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
    ```

This implementation makes the `CourseGoalList` component more dynamic and flexible, allowing it to show hint or warning messages based on the number of goals.