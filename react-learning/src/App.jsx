import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Top } from "./components/Top";
import { Practice } from "./components/Practice";
import { Calculator } from "./components/Calculator";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/react-learning" component={Top} />
          <Route exact path="/react-learning/Practice" component={Practice} />
          <Route
            exact
            path="/react-learning/Calculator"
            component={Calculator}
          />
        </Switch>
        <hr />
        <Link to="/react-learning">Back To Top</Link>
      </BrowserRouter>
    </>
  );
};
