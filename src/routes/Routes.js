import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("../component/home/Home"), {
  fallback: <div>loading</div>,
});
const TestRoutes = loadable(() => import("../component/TestRoutes"), {
  fallback: <div>loading</div>,
});
const Login = loadable(() => import("../component/auth/Login"), {
  fallback: <div>loading</div>,
});
const Register = loadable(() => import("../component/auth/Register"), {
  fallback: <div>loading</div>,
});
const NotMatch = loadable(() => import("../component/NotMatch/NotMatch"), {
  fallback: <div>loading</div>,
});

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={TestRoutes} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
