import React from "react";

import { Grid, Avatar } from "@material-ui/core";

import { PollOption } from "../../api-types/poll-option";

export interface PollOptionDisplayProps {
  option: PollOption;
}

export const PollOptionDisplay: React.FunctionComponent<PollOptionDisplayProps> = ({ option }) => (
  <Grid container direction="column">
    {option.userVotes.map((vote) =>
      <Grid item>
        This vote is {vote.veto ? "" : "not"} a veto
      </Grid>
    )}
    <Grid item>
      <Avatar>{option.game.name.charAt(0)}</Avatar>
    </Grid>
  </Grid>
)
