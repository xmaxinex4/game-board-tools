import React from "react";

import PencilIcon from "@material-ui/icons/Edit";
import { Avatar, Grid, makeStyles, Tooltip, Typography, IconButton } from "@material-ui/core";
import { Game } from "../../api-types/game";

export interface GameCircleListDisplayProps {
  games: Game[];
  onEditGames?: () => void;
}

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export const GameCircleListDisplay: React.FunctionComponent<GameCircleListDisplayProps> = React.memo(
  ({ games, onEditGames }) => {
    const classes = useStyles({});

    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography>Games:</Typography>
        </Grid>
        {games && games.map((game) => {
          return (
            <Grid item>
              <Tooltip title={game.name} aria-label={game.name}>
                <Avatar alt={game.name} src={game.urlThumb || undefined} className={classes.large} />
              </Tooltip>
            </Grid>
          );
        })}
        {onEditGames &&
          <Grid item>
            <IconButton onClick={onEditGames} color="primary" aria-label="edit games" component="span">
              <PencilIcon />
            </IconButton>
          </Grid>
        }
      </Grid>
    );
  });
