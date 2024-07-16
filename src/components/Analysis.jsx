import Question from "./Question";
import classNames from "../styles/Analysis.module.css";

const Analysis = () => {
    return (
        <div className={classNames.analysis}>
          <h1>Question Analysis</h1>
          <h4>You answerd 5 out of 10 questions correctly</h4>
          <Question></Question>
        </div>
    );
};

export default Analysis;