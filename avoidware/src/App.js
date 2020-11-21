import "./App.css";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
