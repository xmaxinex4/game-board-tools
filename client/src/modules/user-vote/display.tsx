import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { UserVote } from "../../api-types/user-vote";

export interface UserVoteDisplayProps {
  userVote: UserVote;
}

export function UserVoteDisplay(props: UserVoteDisplayProps): React.ReactElement {
  const { userVote } = props;

  return (
    <Grid container>
      <Typography>
        {`${userVote} User Vote Display Placeholder`}
      </Typography>
    </Grid>
  );
}
