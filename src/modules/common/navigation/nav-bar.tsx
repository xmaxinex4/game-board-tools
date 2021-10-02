import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { SiteLogoAndNameInline } from "../../../images/components/site-logo-and-name-inline";

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

export function NavBar(): React.ReactElement {
  const { navBar, logo } = useStyles();

  return (
    <AppBar position="static" className={navBar}>
      <Toolbar>
        <Link className={logo} to="/">
          <SiteLogoAndNameInline />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
