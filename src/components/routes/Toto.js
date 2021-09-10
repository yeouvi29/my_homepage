import totoFront from "./../../images/toto/toto-front.gif";
import classes from "./Toto.module.css";

const Toto = (props) => {
  return (
    <img
      className={classes.toto}
      src={totoFront}
      style={{ top: `${props.top}px`, left: `${props.left}px` }}
      alt="character-walking-forward"
    />
  );
};

export default Toto;
