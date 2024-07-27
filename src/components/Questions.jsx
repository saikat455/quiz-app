import Answers from "./Answers";
import classNames from "../styles/Question.module.css";

const Questions = ({answers = []}) => {
  return answers.map((answer, index) => (
        <div className={classNames.question} key={index}>
            <div className={classNames.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              {answer.title}
            </div>
            <Answers input={false} options={answer.options}></Answers>
        </div>
  ))
};

export default Questions;