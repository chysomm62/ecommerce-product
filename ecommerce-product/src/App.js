import "./App.css";
import Nav from "./components/nav/nav";
import Body from "./components/Body";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
