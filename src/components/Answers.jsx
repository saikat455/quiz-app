import {Fragment} from "react";
import classNames from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={classNames.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
            key={index}
            className={classNames.answer}
            text={option.title}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          ></Checkbox>
          ) : (
              <Checkbox
            key={index}
            className={`${classNames.answer} ${
              option.correct ? classNames.correct : option.checked ? classNames.wrong : null
            }`}
            text={option.title}
            defaultChecked={option.checked}
            disabled
          ></Checkbox>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
