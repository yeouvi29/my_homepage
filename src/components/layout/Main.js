import { Switch, Route, Redirect } from "react-router-dom";

import About from "./../routes/About";
import Project from "./../routes/Project";
import NotFound from "./../routes/NotFound";
import Trial from "./../routes/Trial";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <Switch>
        <Route exact path="/">
          <Redirect to="about" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/trial">
          <Trial />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
