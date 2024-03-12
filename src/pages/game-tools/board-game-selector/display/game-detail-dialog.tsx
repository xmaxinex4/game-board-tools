import React, { useCallback } from "react";

import CloseIcon from "@mui/icons-material/Close";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { BggGameDetailDisplay } from "./bgg-game-detail-display";
import { GameDetails } from "../types";
import { NoFilteredGamesResultDisplay } from "./no-filtered-games-result-display";

export interface GameDetailDialogProps {
  open: boolean;
  game: GameDetails;
  onClose: () => void;
}

export function GameDetailDialog(props: GameDetailDialogProps): React.ReactElement {
  const { open, game, onClose } = props;
  const theme = useTheme<Theme>();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const onCloseGameDialog = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog
      scroll="paper"
      onClose={onCloseGameDialog}
      open={open}
    >
      <DialogTitle>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={11}>
            <Typography noWrap variant={isSmDown ? "body1" : "h6"}>
              {game?.name}
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ marginLeft: { xs: "auto" } }}>
            <IconButton size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        {game ? <BggGameDetailDisplay game={game} /> : <NoFilteredGamesResultDisplay />}
      </DialogContent>
    </Dialog>
  );
}
