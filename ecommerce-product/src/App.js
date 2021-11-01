import "./App.css";
import Nav from "./components/nav/nav";
import Body from "./components/Body";
import Men from "./components/Men";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/Men">
            <Men />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
