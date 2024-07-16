// import { useAuth } from "../contexts/AuthContext";
// import {Route, Navigate} from "react-router-dom";

// const PrivateRoute = ({element: Element, ...rest}) => {
//     const {currentUser} = useAuth();
//     return currentUser ? (
//         <Route {...rest}>
//             {(props)=><Element {...props}/>}

//         </Route>
//     ) : (
//         <Navigate to="/login" />
//     );
// };

// export default PrivateRoute;

// PrivateRoute.jsx
// PrivateRoute.jsx
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

