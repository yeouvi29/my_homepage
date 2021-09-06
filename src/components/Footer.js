import classes from "./Footer.module.css";

const Footer = (props) => {
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
        default:
          console.log("");
      }
    }
  };
  return (
    <footer className={classes.footer}>
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
    </footer>
  );
};

export default Footer;
