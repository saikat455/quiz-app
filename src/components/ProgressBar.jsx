import classNames from "../styles/ProgressBar.module.css";
import Button from "./Button";
import {useRef, useState} from "react";

const ProgressBar = ({ next, prev, submit, progress }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip(){
    if(tooltip){
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    }
    else{
      setTooltip(true);
      tooltipRef.current.style.left= `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }


  return (
    <div className={classNames.progressBar}>
      <div className={classNames.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classNames.rangeArea}>
        <div className={classNames.tooltip} ref={tooltipRef}> {progress}% Complete!</div>
        <div className={classNames.rangeBody}>
          <div
            className={classNames.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>

      <Button className={classNames.next} onClick={progress === 100? submit : next}>
        <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
      <div className="button next"></div>
    </div>
  );
};

export default ProgressBar;
