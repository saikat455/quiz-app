import Summary from "../Summary";
import Analysis from "../Analysis";
import classNames from "../../styles/Result.module.css";

const Result = () => {
  return (
    <div className={classNames["result-container"]}>
      <Summary />
      <Analysis />
    </div>
  );
};

export default Result;
