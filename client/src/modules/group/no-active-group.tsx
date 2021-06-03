import React from "react";

import { Typography, Grid } from "@material-ui/core";

import { AddGroupButton } from "./add-group-button";

export function NoActiveGroup(): React.ReactElement {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>It looks like you do not have any groups. Add a new group to get started.</Typography>
      </Grid>
      <Grid item>
        <AddGroupButton variant="text" />
      </Grid>
    </Grid>
  );
}
