import Account from "./Account";
import classNames from "../styles/Nav.module.css";
import logo from "../assets/quiz app logo.jpg";
import {Link} from "react-router-dom";

 
const Nav = () => {
    return (
        <div>
            <nav className={classNames.nav}>
      <ul>
        <li>
          <Link to="/" className={classNames.brand}>
            <img src={logo} alt="Quiz App" />
            <h3>Quiz App</h3>
          </Link>
        </li>
      </ul>
      <Account></Account>
    </nav>
        </div>
    );
};

export default Nav;