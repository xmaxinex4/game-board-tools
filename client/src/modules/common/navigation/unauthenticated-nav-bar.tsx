import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { MeepleCircleSiteNameInline } from "../../../images/components/meeple-circle-site-name-inline";

import { GameToolsLink } from "./game-tools-link";

const useStyles = makeStyles(() => ({
  navBar: {
    background: "transparent",
    boxShadow: "none",
  },
  logo: {
    width: "100%",
    height: "100%",
    maxWidth: "150px",
    maxHeight: "75px",
  },
}));

export interface UnauthenticatedNavBarProps {
  homeLogo?: boolean;
}

export function UnauthenticatedNavBar(props: UnauthenticatedNavBarProps): React.ReactElement {
  const { homeLogo } = props;
  const { navBar, logo } = useStyles();

  return (
    <Grid container>
      <AppBar position="static" className={navBar}>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item className={logo}>
              {
                homeLogo && (
                  <Link to="/">
                    <MeepleCircleSiteNameInline />
                  </Link>
                )
              }
            </Grid>
            <Grid item>
              <GameToolsLink />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
