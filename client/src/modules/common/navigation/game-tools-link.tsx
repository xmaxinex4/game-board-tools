import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Grid,
  makeStyles,
  SvgIcon,
  Theme,
  Typography,
} from "@material-ui/core";

import Casino from "@material-ui/icons/Casino";

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
        <Grid direction="column" alignItems="center" justify="center" container>
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
