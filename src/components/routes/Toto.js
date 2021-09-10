import totoFront from "./../../images/toto/toto-front.gif";
import totoBack from "./../../images/toto/toto-back.gif";
import totoLeft from "./../../images/toto/toto-left.gif";
import totoRight from "./../../images/toto/toto-right.gif";
import classes from "./Toto.module.css";

const Toto = (props) => {
  console.log(props.top, props.left);
  return (
    <img
      className={classes.toto}
      src={
        props.direction === "f"
          ? totoFront
          : props.direction === "b"
          ? totoBack
          : props.direction === "l"
          ? totoLeft
          : totoRight
      }
      style={{ top: `${props.top}px`, left: `${props.left}px` }}
      alt="character-walking-forward"
    />
  );
};

export default Toto;
