import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Letters from "./Letters";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/letters">
          <Letters />
        </Route>
        <Route path="/">
          <div className="container">
            <h1>Apprenti Clavier</h1>
            <Link to="/letters" className="button">
              Démarrer
            </Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
