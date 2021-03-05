import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Top } from "./components/Top";
import { Practice } from "./components/Practice";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/Practice" component={Practice} />
        </Switch>
        <hr />
        <Link to="/">Back To Top</Link>
      </BrowserRouter>
    </>
  );
};
