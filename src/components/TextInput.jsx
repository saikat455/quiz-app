import classNames from "../styles/TextInput.module.css";

const TextInput = ({icon, ...rest}) => {
    return (
        <div className={classNames.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
    );
};

export default TextInput;