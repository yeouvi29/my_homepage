import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountData } from "../../store/count-action";
import classes from "./Footer.module.css";

const Footer = (props) => {
  const dispatch = useDispatch();
  const visitorNums = useSelector((state) => state.count.count);
  const handleClick = (e) => {
    const id = e.target.closest(".icon").id;
    if (id) {
      switch (id) {
        case "github":
          window.open("https://github.com/yeouvi29");
          break;
        case "linkedin":
          window.open("https://www.linkedin.com/in/emily-kang-324798110/");
          break;
        case "twitter":
          window.open("https://www.twitter.com/yeouvi29/");
          break;
        case "codewars":
          window.open("https://www.codewars.com/users/DLama");
          break;
        default:
          console.log("");
      }
    }
  };

  useEffect(() => {
    dispatch(fetchCountData());
  }, [dispatch]);
  return (
    <footer className={classes.footer}>
      <div className={classes["container--icon"]}>
        <div className={classes["line-long"]}></div>
        <ul classes={classes["contact-lists"]} onClick={handleClick}>
          <li className={classes.list}>
            <i className="icon fab fa-github" id="github"></i>
          </li>
          <li className={classes.list}>
            <i className="icon fab fa-linkedin" id="linkedin"></i>
          </li>
          <li className={classes.list}>
            <i className="icon fab fa-twitter" id="twitter"></i>
          </li>
          <li className="icon list" id="email">
            <a href="mailto: yeouvi29@gmail.com">
              <i className="fas fa-envelope email"></i>
            </a>
          </li>
        </ul>
        <div className={classes["line-long"]}></div>
      </div>
      <div onClick={handleClick} className={classes["container--badge"]}>
        <img
          className={`icon ${classes["codewars"]}`}
          id="codewars"
          src="https://www.codewars.com/users/DLama/badges/large"
          alt="codewars-badge"
        />
      </div>
      <p className={classes.copyright}>
        Copyright <span>&copy;</span> 2021 Emily Kang
      </p>
      <p className={classes.visitors}>
        visitors: <span>{visitorNums}</span>
      </p>
    </footer>
  );
};

export default Footer;
