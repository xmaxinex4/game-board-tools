import React from "react";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import { Poll } from "../../api-types/poll";
import { PollOptionDisplay } from "../poll-option/poll-option-display";

export interface PollDisplayProps {
  poll: Poll;
}

export const PollCard: React.FunctionComponent<PollDisplayProps> = ({ poll }) => (
  <Card>
    <CardContent>
      <Grid container>
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="h6">
              {poll.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Created By: {poll.author.username}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="space-between">
          {poll.pollOptions.map((option) =>
            <Grid item>
              <PollOptionDisplay option={option} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </CardContent >
  </Card >
)
