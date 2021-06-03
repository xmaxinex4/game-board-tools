import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { Score } from "../../api-types/score";

export interface ScoreDisplayProps {
  score: Score;
}

export function ScoreDisplay(props: ScoreDisplayProps): React.ReactElement {
  const { score } = props;

  return (
    <Grid container>
      <Typography>
        {`${score} Score Display Placeholder`}
      </Typography>
    </Grid>
  );
}
