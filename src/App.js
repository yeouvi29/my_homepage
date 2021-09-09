import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
