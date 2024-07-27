import classNames from "../styles/Summary.module.css"
const Summary = ({score, noq}) => {
    return (
        <div className={classNames.summary}>
          <div className={classNames.point}>
            <p className={classNames.score}>
              Your score is <br />
              {score} out of {noq * 5}
            </p>
          </div>
        </div>
    );
};

export default Summary;