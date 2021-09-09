// import countapi from "countapi-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountData } from "../../store/count-action";

import Card from "./../../UI/Card";
import classes from "./Trial.module.css";
const Trial = () => {
  const dispatch = useDispatch();
  const visitorNums = useSelector((state) => state.count.count);
  useEffect(() => {
    dispatch(fetchCountData());
  }, [dispatch]);

  return (
    <Card styles={classes["card-style"]}>
      <h1 className={classes.title}>This is an experimental page</h1>
      <p>
        visitors: <span>{visitorNums}</span>
      </p>
    </Card>
  );
};

export default Trial;
