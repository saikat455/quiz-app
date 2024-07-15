import Account from "./Account";
import classNames from "../styles/Nav.module.css";
import logo from "../assets/quiz app logo.jpg";
 
const Nav = () => {
    return (
        <div>
            <nav className={classNames.nav}>
      <ul>
        <li>
          <a href="index.html" className={classNames.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Quiz App</h3>
          </a>
        </li>
      </ul>
      <Account></Account>
    </nav>
        </div>
    );
};

export default Nav;