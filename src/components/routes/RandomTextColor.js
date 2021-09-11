import classes from "./About.module.css";

const RandomTextColor = (props) => {
  return (
    <span className={classes["color-letter"]} style={{ color: props.color }}>
      {props.letter}
    </span>
  );
};

export default RandomTextColor;
