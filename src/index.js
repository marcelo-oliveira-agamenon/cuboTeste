import React from "react";
import ReactDOM from "react-dom";
import MoviePage from "./container/moviePage/index";
import Dashboard from "./container/dashboard";
import Global from "./global/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/movie" render={(props) => <MoviePage {...props} />} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
