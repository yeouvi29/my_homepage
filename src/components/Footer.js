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
      <ul onClick={handleClick}>
        <li className="list">
          <i className="icon fab fa-github" id="github"></i>
        </li>
        <li className="list">
          <i className="icon fab fa-linkedin" id="linkedin"></i>
        </li>
        <li className="list linkedin">
          <i className="icon fab fa-twitter" id="twitter"></i>
        </li>
        <li className="icon list" id="email">
          <a href="mailto: yeouvi29@gmail.com">
            <i className="fas fa-envelope email"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
