import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
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
