import classNames from "../styles/Button.module.css";

const Button = ({ className, children, ...rest }) => {
    return (
        <button className={`${classNames.button} ${className}`} {...rest}>
      {children}
    </button>
    );
};

export default Button;