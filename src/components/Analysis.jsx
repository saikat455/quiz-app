import classNames from "../styles/Analysis.module.css";
import Questions from "./Questions";

const Analysis = ({answers}) => {
    return (
        <div className={classNames.analysis}>
          <h1>Question Analysis</h1>
          <Questions answers={answers}></Questions>
        </div>
    );
};

export default Analysis;