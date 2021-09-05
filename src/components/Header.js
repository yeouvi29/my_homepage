import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Emily K.</h1>
      <nav className={classes.nav}>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        <Link to="/about" className={classes.link}>
          About
        </Link>
        <Link to="/project" className={classes.link}>
          Project
        </Link>
        <Link to="/contact" className={classes.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
