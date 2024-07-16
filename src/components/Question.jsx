import Answers from "./Answers";
import classNames from "../styles/Question.module.css";

const Question = () => {
    return (
        <div className={classNames.question}>
            <div className={classNames.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <Answers></Answers>
        </div>
    );
};

export default Question;