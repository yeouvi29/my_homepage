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
  "v",
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
          <div className={classes["my-name"]}>
            <p>
              <span>Hi,</span> my name is
            </p>
            <i className="fas fa-chevron-right"></i>
          </div>
          <h1 className={classes.name}>Emily Kang,</h1>
          <h1>a web developer</h1>
          <h3>
            Front End <span>and a little bit of back end ;)</span>
          </h3>
        </div>
        <div className={`${classes["container--text"]} ${classes.back}`}>
          <p>{colorfulElements}</p>
          <p className={classes.build}>
            who loves <strong>building web</strong>
          </p>
          <p className={classes.together}>
            and cats!
            <span className={classes["container--image"]}>
              <img className={classes.image} src={paws} alt="cat-paws" />
            </span>
          </p>
        </div>
        <div className={`${classes["container--text"]} ${classes["skills"]}`}>
          <h3>Skills</h3>
          <h4>Programming Languages</h4>
          <p>JavaScript(ES6), HTML, CSS/Sass</p>
          <h4>Libraries & Frameworks</h4>
          <p>React, Redux, Node.js, Express</p>
          <h4>Tools & Platforms</h4>
          <p>
            Git, Webpack, Parcel, Netlify, Heroku, Firebase, MongoDB, Postman
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
