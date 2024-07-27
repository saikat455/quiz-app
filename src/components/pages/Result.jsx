import { useParams, useLocation } from "react-router-dom";
import Summary from "../Summary";
import Analysis from "../Analysis";
import classNames from "../../styles/Result.module.css";
import useAnswers from "../../hooks/useAnswers";
import _ from "lodash";

const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state || {};

  const { loading, error, answers } = useAnswers(id);

  function calculate(){
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [];
      let checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if(option.correct) correctIndexes.push(index2);
        if(qna[index1].options[index2].checked){
          checkedIndexes.push(index2);
            option.checked = true;
        }
      });
      if(_.isEqual(correctIndexes, checkedIndexes)){
        score=score + 5;
      }
    });
    return score;
  }

  const userScore = calculate();

  return (
    <div className={classNames["result-container"]}>
      {loading && <span className="loading loading-dots loading-lg"></span>}
      {error && <div>There was an error</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary qna={qna} answers={answers} score={userScore} noq ={answers.length}/>
          <Analysis qna={qna} answers={answers} />
        </>
      )}
    </div>
  );
};

export default Result;
