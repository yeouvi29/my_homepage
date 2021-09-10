// import countapi from "countapi-js";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountData } from "../../store/count-action";
import { gameActions } from "./../../store/game-slice";
import house from "./../../images/toto/house.png";
import Toto from "./Toto";
import Card from "./../../UI/Card";

import classes from "./Trial.module.css";

const Trial = () => {
  const dispatch = useDispatch();
  const visitorNums = useSelector((state) => state.count.count);
  const top = useSelector((state) => state.move.top);
  const left = useSelector((state) => state.move.left);
  const start = useSelector((state) => state.move.start);
  const direction = useSelector((state) => state.move.direction);

  const clickHandler = () => {
    dispatch(gameActions.start());
  };

  const keyDownHandler = useCallback(
    (e) => {
      if (start) {
        if (e.key === "ArrowDown") dispatch(gameActions.down());
        if (e.key === "ArrowUp") dispatch(gameActions.up());
        if (e.key === "ArrowLeft") dispatch(gameActions.left());
        if (e.key === "ArrowRight") dispatch(gameActions.right());
      }
    },
    [start, dispatch]
  );

  useEffect(() => {
    if (start) {
      window.addEventListener("keydown", keyDownHandler);
      return () => {
        window.removeEventListener("keydown", keyDownHandler);
      };
    }
  }, [start, keyDownHandler]);

  useEffect(() => {
    dispatch(fetchCountData());
  }, [dispatch]);

  return (
    <Card styles={classes["card-style"]}>
      <h1 className={classes.title}>This is an experimental page</h1>
      <p>
        visitors: <span>{visitorNums}</span>
      </p>
      <h3>Toto's walk</h3>
      <p>Press the start button and walk Toto by using arrow keys.😄</p>
      <button className={classes["btn--game-start"]} onClick={clickHandler}>
        {start ? "STOP" : "START"}
      </button>
      <div className={classes["container--game"]}>
        <img className={classes.house} src={house} alt="house" />
        {start && <Toto top={top} left={left} direction={direction} />}
      </div>
    </Card>
  );
};

export default Trial;
