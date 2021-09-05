import classes from "./Home.module.css";
import myImg from "./../../images/my-image.jpg";

const Home = () => {
  const mainClass = `${classes.home}  ${classes["container--main"]}`;
  return (
    <div className={mainClass}>
      {/* <div className={classes["container--img"]}>
        <img className={classes.image} src={myImg} alt="my-face" />
      </div> */}
      <div className={classes["container--text"]}>
        <p>Hi, my name is</p>
        <h1>Emily Kang,</h1>
        <h1>a web developer</h1>
        <h3>
          Front End <span>and a little bit of back end</span>
        </h3>
      </div>
    </div>
  );
};
export default Home;
