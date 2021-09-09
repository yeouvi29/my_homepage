import { Switch, Route, Redirect } from "react-router-dom";

import About from "./routes/About";
import Project from "./routes/Project";

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
        {/* <Route exact path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </div>
  );
};

export default Main;
