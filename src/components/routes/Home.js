import classes from "./Home.module.css";
import myImg from "./../../images/my-image.jpg";

const Home = () => {
  const mainClass = `${classes.home}  ${classes["container--main"]}`;
  return (
    <div className={mainClass}>
      <div className={classes["container--img"]}>
        <img className={classes.image} src={myImg} alt="my-face" />
      </div>
      <div>This is home!</div>
    </div>
  );
};
export default Home;
