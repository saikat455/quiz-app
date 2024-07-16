import Form from "../Form";
import Illustration from "../Illustration";
import classNames from "../../styles/Signup.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";

const Signup = () => {
  return (
    <div className={classNames["signup-container"]}>
      <div className={classNames.column}>
        <Illustration />
        <Form className={classNames.signup}>
          <h1>Create an account</h1>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
          <Checkbox text="I agree to the terms & Conditions" />
          <Button><span>SUBMIT NOW</span></Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
