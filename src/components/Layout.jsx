import Nav from "./Nav";
import classNames from "../styles/Nav.module.css";

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <main className={classNames.main}>
                <div className={classNames.container}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
