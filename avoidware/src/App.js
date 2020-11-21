import "./App.css";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
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
