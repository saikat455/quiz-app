import Checkbox from "./Checkbox";
import classNames from "../styles/Answers.module.css";

const Answers = () => {
    return (
        <div className = {classNames.answers}>
            <Checkbox className={classNames.answer} text="Test answer"></Checkbox>
        </div>
    );
};

export default Answers;