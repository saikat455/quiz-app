import signupImage from "../assets/signup.svg";
import classNames from "../styles/Illustration.module.css";

const Illustration = () => {
    return (
        <div className={classNames.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
    );
};

export default Illustration;