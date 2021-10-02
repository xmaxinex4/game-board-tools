import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Grid,
  SvgIcon,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import Casino from "@mui/icons-material/Casino";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  root: {
    textTransform: "none",
    lineHeight: 0,
  },
}));

export function GameToolsLink(): React.ReactElement {
  const { link, root: muiButtonRoot } = useStyles();

  return (
    <Button className={muiButtonRoot} variant="text" color="primary">
      <Link to="/game-tools" className={link}>
        <Grid direction="column" alignItems="center" justifyContent="center" container>
          <Grid item>
            <SvgIcon>
              <Casino />
            </SvgIcon>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="primary">
              Game Tools
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Button>
  );
}
