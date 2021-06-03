import React from "react";

import Icon from "@mdi/react";
import { mdiCancel, mdiContentSave } from "@mdi/js";

import { Button, Card, CardHeader, CardContent, Grid, Modal, Theme, CircularProgress } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

// import { GAME_DISPLAY_DETAILS } from "./Queries";

import { GameSearchTypeahead } from "./game-search-typeahead";
import { GameCircleListDisplay } from "./game-circle-list-display";
import { Game } from "../../api-types/game";

export interface EditGamesModalProps {
  games: Game[];
  handleClose: () => void;
  loading?: boolean;
  onSave: (bggIds: number[]) => void;
  open: boolean;
  title?: string;
}


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

  wrapper: {
    // margin: theme.spacing(1),
    position: 'relative',
  },

  buttonProgress: {
    // color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  }
});

export const EditGamesModal: React.FunctionComponent<EditGamesModalProps> = ({ games, handleClose, loading, onSave, open, title }) => {
  const classes = useStyles({});
  const [gamesState, setGamesState] = React.useState((games && games.length > 0) && games || []);

  const theme = useTheme<Theme>();

  // const onGameDisplayDetailsError = React.useCallback(
  //   (error: ApolloError) => {
  //     // TODO: show errors in ui
  //     console.log("get game display details error: ", error);
  //   },
  //   []
  // );

  // const setNewGamesState = (data: { gameDetails: GameDisplayDetails }) => {
  //   const { gameDetails } = data;
  //   const newGamesState = gamesState.concat(gameDetails);

  //   setGamesState(newGamesState);
  // };

  // const [getGameDisplayDetails] = useLazyQuery<{ gameDetails: GameDisplayDetails }>(GAME_DISPLAY_DETAILS, {
  //   onError: onGameDisplayDetailsError,
  //   onCompleted: setNewGamesState
  // });

  // const onSelect = React.useCallback(
  //   (bggId: number) => {
  //     if (!gamesState.find(g => g.bggId === bggId)) {
  //       getGameDisplayDetails({ variables: { bggId } });
  //     } else {
  //       // TODO: Highlight game thats already in the collection display
  //       console.log("Already have that game in list");
  //     }
  //   },
  //   [gamesState]
  // );

  const onModalSave = React.useCallback(
    () => {
      onSave(gamesState.map((game) => game.bggId));
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
      aria-labelledby="edit-games-modal"
      aria-describedby={title || "editing-games"}
      open={open}
      onClose={handleClose}
    >
      <Grid container justify="center">
        <Grid item>
          <div className={classes.div}>
            <Card className={classes.card}>
              {title &&
                <CardHeader title={title} />
              }
              <CardContent>
                <Grid container direction="column" alignItems="center" spacing={8}>
                  <Grid item>
                    {/* <GameSearchTypeahead onSelect={onSelect} /> */}
                  </Grid>
                  <Grid item>
                    <GameCircleListDisplay games={gamesState} />
                  </Grid>
                  <Grid container item justify="space-between">
                    <Grid item className={classes.wrapper}>
                      <Button
                        variant="outlined"
                        color="primary"
                        disabled={loading}
                        startIcon={<Icon path={mdiContentSave} color={theme.palette.primary.main} size={0.5} />}
                        onClick={onModalSave}>
                        Save
                      </Button>
                      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        disabled={loading}
                        startIcon={<Icon path={mdiCancel} color={theme.palette.primary.main} size={0.5} />}
                        onClick={onModalCancel}>
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </Modal>
  )
}