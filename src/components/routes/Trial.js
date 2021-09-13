// import countapi from "countapi-js";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "./../../store/game-slice";
import house from "./../../images/toto/house.png";
import windmill from "./../../images/toto/windmill.png";
import mealBag from "./../../images/toto/meal-bag.png";
import treeOne from "./../../images/toto/tree_1.png";
import treeTwo from "./../../images/toto/tree_2.png";
import Toto from "./Toto";
import Card from "./../../UI/Card";

import classes from "./Trial.module.css";

const Trial = () => {
  const dispatch = useDispatch();
  const top = useSelector((state) => state.move.top);
  const left = useSelector((state) => state.move.left);
  const start = useSelector((state) => state.move.start);
  const direction = useSelector((state) => state.move.direction);

  const clickHandler = () => {
    dispatch(gameActions.start());
    if (!start) dispatch(gameActions.reset());
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

  return (
    <Card styles={classes["card-style"]}>
      {/* <h1 className={classes.title}>This is an experimental page</h1> */}
      <h3>Toto's walk</h3>
      <p>Press the start button and walk Toto by using arrow keys.😄</p>
      <button className={classes["btn--game-start"]} onClick={clickHandler}>
        {start ? "STOP" : "START"}
      </button>
      <div className={classes["container--game"]}>
        <div className={classes["game-sky"]}></div>
        <img className={classes.house} src={house} alt="house" />
        <img className={classes.windmill} src={windmill} alt="windmill" />
        <img className={classes["meal-bag-one"]} src={mealBag} alt="meal-bag" />
        <img className={classes["meal-bag-two"]} src={mealBag} alt="meal-bag" />
        <img
          className={classes["meal-bag-three"]}
          src={mealBag}
          alt="meal-bag"
        />
        <img className={classes["tree-one"]} src={treeOne} alt="orange tree" />
        <img className={classes["tree-two"]} src={treeTwo} alt="tree" />
        {start && <Toto top={top} left={left} direction={direction} />}
        <p className={classes.pixel}>Pixel art by Emily K.</p>
      </div>
    </Card>
  );
};

export default Trial;
