import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { ActiveGroupContext } from "../../contexts/active-group-context";

export const ManageGroup: React.FunctionComponent = () => {
  const activeGroupContext = React.useContext(ActiveGroupContext);

  return (
    <Grid container>
      <Typography>
        {`Managing ${activeGroupContext?.activeGroup?.name}`}
      </Typography>
    </Grid>
  );
};
