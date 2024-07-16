import Form from "../Form";
import Illustration from "../Illustration";
import classNames from "../../styles/Login.module.css";
import TextInput from "../TextInput";
import Button from "../Button";

const Login = () => {
  return (
    <div className={classNames["login-container"]}>
      <div className={classNames.column}>
        <Illustration />
        <Form className={classNames.login}>
          <h1>Login to your account</h1>
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button><span>SUBMIT NOW</span></Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
