import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { Top } from "./components/Top";
import { Practice } from "./components/Practice";
import { Calculator } from "./components/Calculator";

export const App = () => {
  return (
    <>
      <HashRouter>
        {/* <BrowserRouter> */}
        {/* <Switch>
          <Route exact path="/react-learning" component={Top} />
          <Route exact path="/react-learning/Practice" component={Practice} />
          <Route
            exact
            path="/react-learning/Calculator"
            component={Calculator}
          />
        </Switch> */}
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/Practice" component={Practice} />
          <Route exact path="/Calculator" component={Calculator} />
        </Switch>
        <hr />
        <Link to="/">Back To Top</Link>
        {/* </BrowserRouter> */}
      </HashRouter>
    </>
  );
};
