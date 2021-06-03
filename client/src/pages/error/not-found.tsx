import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  span: {
    paddingTop: "200px",
    paddingBottom: "50px",
  },
});

export const NotFound: React.FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <div className={classes.span}>
      <Typography>Not Found</Typography>
    </div>
  );
};
