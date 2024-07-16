import Answers from "../Answers";
// import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import classNames from "../../styles/Quiz.module.css";

const Quiz = () => {
  return (
    <div className={classNames["quiz-container"]}>
      <h1>Pick three of your favorite Star Wars Films</h1>
      <h4>Questions can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      {/* <MiniPlayer /> */}
    </div>
  );
};

export default Quiz;
