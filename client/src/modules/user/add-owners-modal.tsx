import React from "react";

import Icon from "@mdi/react";
import { mdiCancel, mdiContentSave } from "@mdi/js";
import { Button, Card, CardHeader, CardContent, Grid, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { User } from "../../api-types/user";
import { Game } from "../../api-types/game";
import { GameCircleListDisplay } from "../game/game-circle-list-display";
import { GameSearchTypeahead } from "../game/game-search-typeahead";

const useStyles = makeStyles({
  card: {
    padding: "24px",
    maxWidth: "500px",
    width: "500px"
  },

  div: {
    paddingTop: "50px",
    paddingBottom: "50px"
  },
});

export interface AddGamesModalProps {
  games: Game[];
  owners: User[];
  handleClose: () => void;
  onSave: (bggIds: number[]) => void;
  open: boolean;
  title?: string;
}

export function AddGamesModal(props: AddGamesModalProps): React.ReactElement {
  const { games, handleClose, onSave, open, title } = props;

  const classes = useStyles({});
  const [gamesState, setGamesState] = React.useState((games && games.length > 0) && games || []);

  const onGameDisplayDetailsError = React.useCallback(
    () => {
      // TODO: show errors in ui
      console.log("get game display details error: ");
    },
    []
  );

  // const setNewGamesState = (data: { gameDetails: GameDisplayDetails }) => {
  //   const { gameDetails } = data;
  //   const newGamesState = gamesState.concat(gameDetails);

  //   setGamesState(newGamesState);
  // };

  // const [getGameDisplayDetails] = useLazyQuery<{ gameDetails: GameDisplayDetails }>(GAME_DISPLAY_DETAILS, {
  //   onError: onGameDisplayDetailsError,
  //   onCompleted: setNewGamesState
  // });

  const onSelect = React.useCallback(
    (bggId: number) => {
      // if (!gamesState.find(g => g.bggId === bggId)) {
      //   getGameDisplayDetails({ variables: { bggId } });
      // } else {
      // TODO: Highlight game thats already in the collection display
      console.log("Already have that game in list");
      // }
    },
    []
  );

  const onModalSave = React.useCallback(
    () => {
      console.log("Save modal");
      // onSave(gamesState.map((game) => game.bggId));
    },
    [onSave, gamesState]
  );

  const savedGames = React.useMemo(() => games, [games]);
  const onModalCancel = React.useCallback(
    () => {
      setGamesState(savedGames);
      handleClose();
    },
    []
  );

  return (
    <Modal
      aria-labelledby="add-games-modal"
      aria-describedby={title || "adding-games"}
      open={open}
      onClose={handleClose}
    >
      <Grid container justify="center">
        <Grid item>
          <div className={classes.div}>
            <Card className={classes.card}>
              {title && <CardHeader title={title} />}
              <CardContent>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <GameSearchTypeahead onSelect={onSelect} />
                  </Grid>
                  <Grid item>
                    <GameCircleListDisplay games={gamesState} />
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" startIcon={<Icon path={mdiContentSave} size={0.5} />} onClick={onModalSave}>Save</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" startIcon={<Icon path={mdiCancel} size={0.5} />} onClick={onModalCancel}>Cancel</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </Modal>
  );
}
