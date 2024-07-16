
import Illustration from "../Illustration";
import classNames from "../../styles/Signup.module.css";

import SignUpForm from "../SignUpForm";

const Signup = () => {
  return (
    <div className={classNames["signup-container"]}>
      <div className={classNames.column}>
        <Illustration />
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
};

export default Signup;
