import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { ActiveGroupContext } from "../../contexts/active-group-context";

export const Stats: React.FunctionComponent = () => {
  const activeGroupContext = React.useContext(ActiveGroupContext);

  return (
    <Grid container>
      <Typography>
        {activeGroupContext?.activeGroup?.name}
        Stats
      </Typography>
    </Grid>
  );
};
