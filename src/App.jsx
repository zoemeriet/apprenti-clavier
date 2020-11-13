import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./css/App.css";
import Letters from "./Letters";
import Phrases from "./Phrases";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/letters">
          <Letters />
        </Route>
        <Route path="/phrases">
          <Phrases />
        </Route>
        <Route path="/">
          <div className="homepage">
            <div className="container">
              <h1>Apprenti Clavier</h1>
              <div className="homepage_links">
                <Link to="/letters" className="button">
                  Caractères
                </Link>
                <Link to="/phrases" className="button">
                  Phrases
                </Link>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
