import "./App.css";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Results from "./components/Results/Results";
import Error from "./components/Error/Error";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/results">
          <Header />
          <Results />
          <Footer />
        </Route>
        <Route path="/error">
          <Header />
          <Error />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Landing />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
