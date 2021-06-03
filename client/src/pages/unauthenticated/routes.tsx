import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { MeepleCircleSiteNameInline } from "../../images/components/meeple-circle-site-name-inline";

import { Login } from "./login";
import { CreateAccount } from "./create-account";
import { ForgotPassword } from "./forgot-password";
import { UnauthenticatedNavBar } from "../../modules/common/navigation/unauthenticated-nav-bar";

const useStyles = makeStyles(() => ({
  gridContainer: {
    maxWidth: "500px",
  },
  logo: {
    maxWidth: "400px",
  },
}));

export function UnAuthenticatedRoutes(): React.ReactElement {
  const { gridContainer, logo } = useStyles();

  return (
    <Grid container justify="center">
      <Grid xs={12} item>
        <UnauthenticatedNavBar />
      </Grid>
      <Grid xs={12} item container className={gridContainer} alignItems="center" justify="center" spacing={2}>
        <Grid xs={12} className={logo} item>
          <MeepleCircleSiteNameInline />
        </Grid>
        <Grid xs={12} item>
          <Switch>
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/login" component={Login} />
            <Route exact path="*" component={() => <Redirect to="/login" />} />
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  );
}
