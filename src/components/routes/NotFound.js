import { useHistory } from "react-router-dom";

import Card from "./../../UI/Card";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <Card>
      <h1>Page Not Found.</h1>
      <button className={classes["btn--not-found"]} onClick={handleClick}>
        Go home
      </button>
    </Card>
  );
};

export default NotFound;
