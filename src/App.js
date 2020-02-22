import React from "react";
import Dashboard from "./container/dashboard";
import MoviePage from "./container/moviePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exaxt={true}>
          <Dashboard />
        </Route>
        <Route path="/moviePage">
          <MoviePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
