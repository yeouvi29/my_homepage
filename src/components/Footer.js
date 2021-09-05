import classes from "./Footer.module.css";

const Footer = (props) => {
  const handleClick = (e) => {
    console.log(e.target);
    if (e.target.closest(".list")) window.open("https://github.com/yeouvi29");
  };
  return (
    <footer className={classes.footer}>
      <ul onClick={handleClick}>
        <li className="list github">
          <i className="fab fa-github github"></i>
        </li>
        <li className="list github">
          <i className="fab fa-linkedin linkedin"></i>
        </li>
        <li className="list linkedin">
          <i className="fab fa-twitter twitter"></i>
        </li>
        <li className="list email">
          <i className="fas fa-envelope email"></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
