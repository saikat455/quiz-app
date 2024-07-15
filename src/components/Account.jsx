import classNames from "../styles/Nav.module.css";

const Account = () => {
    return (
        
            <div className={classNames.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
        
    );
};

export default Account;