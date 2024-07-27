
import Illustration from "../Illustration";
import classNames from "../../styles/Login.module.css";

import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <div className={classNames["login-container"]}>
      <div className={classNames.column}>
        <Illustration />
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
