import classNames from "../styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
    return (
        <form className={`${className} ${classNames.form}`} action="#" {...rest}>
      {children}
    </form>
    );
};

export default Form;