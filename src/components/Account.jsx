// import classNames from "../styles/Nav.module.css";
// import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const Account = () => {
//   const { currentUser, logout } = useAuth();

//   return (
//     <div className={classNames.account}>
//       {currentUser ? (
//         <div className={classNames.accountInfo}>
//           <span className="material-icons-outlined" title="Account">
//             account_circle
//           </span>
//           <span>{currentUser.displayName}</span>
//           <span
//             className="material-icons-outlined"
//             title="Logout"
//             onClick={logout}
//           >
//             logout
//           </span>
//         </div>
//       ) : (
//         <>
//           <Link to="/signup" style={{ fontWeight: 500 , fontSize: 'medium'}}>Signup</Link>
//           <Link to="/login" style={{ marginLeft: '10px', fontWeight: 500 , fontSize: 'medium' }}>Login</Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default Account;

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classNames from "../styles/Nav.module.css";

const Account = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classNames.account}>
      {currentUser ? (
        <div className={classNames.accountInfo}>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </div>
      ) : (
        <>
          <Link to="/signup" className={classNames.button}>
            Signup
          </Link>
          <Link to="/login" className={classNames.button}>
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Account;
