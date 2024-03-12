import React from "react";

import SearchIcon from "@mui/icons-material/SearchTwoTone";

import { Grid, Typography } from "@mui/material";

export function NoFilteredGamesResultDisplay(): React.ReactElement {
  return (
    <Grid container sx={{ paddingTop: "16px" }} direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <SearchIcon color="primary" sx={{ fontSize: 80 }} />
      </Grid>
      <Grid>
        <Typography>
          No results found. Try expanding your search filters to see more games.
        </Typography>
      </Grid>
    </Grid>
  );
}
