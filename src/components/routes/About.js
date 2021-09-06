import { useState, useEffect } from "react";
import randomColor from "randomcolor";
// import { useInterval } from "rooks";
import paws from "./../../images/paws.jpg";
import classes from "./About.module.css";
const creative = [
  "c",
  "r",
  "e",
  "a",
  "t",
  "i",
  "v",
  "e",
  " ",
  "d",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
];
const About = () => {
  const [colorfulElements, setColorfulElements] = useState([]);
  const mainClass = `${classes.home}  ${classes["container--main"]}`;

  useEffect(() => {
    const colors = creative.map((letter, i) => (
      <span
        key={letter + i}
        className={classes["color-letter"]}
        style={{ color: randomColor() }}
      >
        {letter}
      </span>
    ));
    setColorfulElements(colors);
  }, []);
  return (
    <div className={mainClass}>
      <div className={classes["container--wrapper"]}>
        <div className={`${classes["container--text"]} ${classes.front}`}>
          <p className={classes["my-name"]}>
            Hi, my name is
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </p>
          <h1>Emily Kang,</h1>
          <h1>a web developer</h1>
          <h3>
            Front End <span>and a little bit of back end</span>
          </h3>
        </div>
        <div className={`${classes["container--text"]} ${classes.back}`}>
          <p>{colorfulElements}</p>
          <p className={classes.build}>
            who loves <strong>building web</strong>
          </p>
          <p className={classes.together}>
            and cats!
            <div className={classes["container--image"]}>
              <img className={classes.image} src={paws} alt="cat-paws" />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
