import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInterval } from "rooks";
import RandomTextColor from "./RandomTextColor";
import randomColor from "randomcolor";
import { colorAction } from "../../store/color-slice";
import paws from "./../../images/paws.jpg";
import classes from "./About.module.css";

const About = () => {
  const dispatch = useDispatch();
  const creative = useSelector((state) => state.color.creative);
  const color = useSelector((state) => state.color.color);

  const textLength = creative.length;
  const mainClass = `${classes.home}  ${classes["container--main"]}`;

  // const { start, stop } = useInterval(() => {
  //   const random = randomColor();
  //   dispatch(colorAction.changeColor(random));
  // }, 500);

  useEffect(() => {
    let count = 0;
    while (count < textLength - 1) {
      dispatch(colorAction.changeColor(randomColor()));
      count++;
    }
    const colorChange = setInterval(() => {
      const random = randomColor();
      dispatch(colorAction.changeColor(random));
    }, 500);
    return () => {
      clearInterval(colorChange);
    };
  }, [textLength, dispatch]);

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
          <p>
            {creative.map((letter, i) => (
              <RandomTextColor
                letter={letter}
                key={letter + i}
                color={color[color.length - 1 - i]}
              />
            ))}
          </p>
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
