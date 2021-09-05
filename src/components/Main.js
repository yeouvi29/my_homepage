import { Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
