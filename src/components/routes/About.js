import classes from "./About.module.css";

const About = () => {
  const mainClass = `${classes.home}  ${classes["container--main"]}`;
  return (
    <div className={mainClass}>
      {/* <div className={classes["container--img"]}>
        <img className={classes.image} src={myImg} alt="my-face" />
      </div> */}
      <div className={classes["container-wrapper"]}>
        <div className={`${classes["container--text"]} ${classes.front}`}>
          <p>Hi, my name is</p>
          <h1>Emily Kang,</h1>
          <h1>a web developer</h1>
          <h3>
            Front End <span>and a little bit of back end</span>
          </h3>
        </div>
        <div className={`${classes["container--text"]} ${classes.back}`}>
          <p>Creative web developer</p>
          <p>who loves building apps</p>
          <p>and cats!</p>
        </div>
      </div>
    </div>
  );
};
export default About;
