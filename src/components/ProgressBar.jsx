import {Link} from "react-router-dom"
import classNames from "../styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = () => {
    return (
        <div className={classNames.progressBar}>
          <div className={classNames.backButton}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={classNames.rangeArea}>
            <div className={classNames.tooltip}>24% Cimplete!</div>
            <div className={classNames.rangeBody}>
              <div className={classNames.progress} style={{width: "20%"}}></div>
            </div>
          </div>
          <Link to="/result">
            <Button className={classNames.next}>
            
              <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
              </Button>
              <div className="button next">
            </div>
          </Link>
        </div>
    );
};

export default ProgressBar;