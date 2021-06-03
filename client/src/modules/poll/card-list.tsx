import React from "react";

import { Grid } from "@material-ui/core";

import { Poll } from "../../api-types/poll";

import { PollCard } from "./card";

export interface PollCardListProps {
  polls: Poll[];
}

export const PollCardList: React.FunctionComponent<PollCardListProps> = ({ polls }) => (
  <Grid spacing={4} direction="column" container>
    {polls.map((poll) =>
      <Grid item>
        <PollCard poll={poll} />
      </Grid>
    )}
  </Grid>
)
