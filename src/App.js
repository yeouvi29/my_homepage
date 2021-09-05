import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Project from "./components/routes/Project";
import Contact from "./components/routes/Contact";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Footer />
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
}

export default App;
