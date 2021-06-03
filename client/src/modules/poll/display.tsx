import React from "react";

import { Button, Grid } from "@material-ui/core";

import { Poll } from "../../api-types/poll";

export interface PollDisplayProps {
  poll: Poll;
  onDelete: () => void;
}

export const PollDisplay: React.FunctionComponent<PollDisplayProps> = ({ onDelete, poll }) => (
  <Grid container>
    <div
      className="w-100"
      style={{
        // backgroundImage: `url(${this.props.poll.imageUrl})`,
        backgroundSize: 'cover',
        paddingBottom: '100%',
      }}
    />
    <div className="pt3">
      {poll}
      <Button onClick={onDelete}>
        Delete
      </Button>
    </div>
  </Grid>
)
