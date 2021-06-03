import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Account } from "./account";
import { AuthenticatedHome } from "./home";

import { NotFound } from "../error/not-found";

export function AuthenticatedRoutes(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={AuthenticatedHome} />
      <Route exact path="/login" component={() => <Redirect to="/" />} />
      <Route path="/account" component={Account} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}
