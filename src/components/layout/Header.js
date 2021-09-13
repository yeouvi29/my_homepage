import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    const { checked } = e.target;
    setIsChecked(checked);
  };

  const handleClick = () => {
    setIsChecked(false);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/about" className={classes["link-logo"]}>
          Emily K.
        </Link>
      </h1>
      <nav className={classes.nav}>
        <input
          type="checkbox"
          id="nav-toggle"
          checked={isChecked}
          onChange={handleChange}
          className={classes["nav--toggle"]}
        />
        <label htmlFor="nav-toggle" className={classes["container--menu"]}>
          <span
            className={`${classes["menu-bar"]} ${classes["menu-bar-top"]} ${
              isChecked && classes["action-top"]
            }`}
          ></span>
          <span
            className={`${classes["menu-bar"]} ${classes["menu-bar-middle"]} ${
              isChecked && classes["action-middle"]
            }`}
          ></span>
          <span
            className={`${classes["menu-bar"]} ${classes["menu-bar-bottom"]} ${
              isChecked && classes["action-bottom"]
            }`}
          ></span>
        </label>

        <div
          className={`${classes["menu-lists"]} ${
            isChecked && classes["action--toggle"]
          }`}
        >
          <Link to="/" className={classes.link} onClick={handleClick}>
            About
          </Link>
          <Link to="/project" className={classes.link} onClick={handleClick}>
            Project
          </Link>
          <Link to="/toto" className={classes.link} onClick={handleClick}>
            Toto
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
