import classNames from "../styles/Summary.module.css"
const Summary = () => {
    return (
        <div className={classNames.summary}>
          <div className={classNames.point}>
            <p className={classNames.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>
        </div>
    );
};

export default Summary;