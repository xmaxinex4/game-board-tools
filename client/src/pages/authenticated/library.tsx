import React from "react";

import { mdiPlus, mdiFilterVariant, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";

import {
  Grid,
  Typography,
  IconButton,
  Switch,
} from "@material-ui/core";

import { ActiveGroupContext } from "../../contexts/active-group-context";
import { TextButton } from "../../modules/common/button/text-button";

export const Library: React.FunctionComponent = () => {
  const activeGroupContext = React.useContext(ActiveGroupContext);
  const [myGamesOnly, setMyGamesOnly] = React.useState(false);

  const toggleMyGamesOnly = () => setMyGamesOnly(!myGamesOnly);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h6">
          {`${activeGroupContext?.activeGroup?.name} Library`}
        </Typography>
      </Grid>
      <Grid container item justify="space-between" alignItems="center">
        <Grid item>
          <TextButton onClick={() => console.log("add new Game")} icon={mdiPlus} text="Add Game" />
        </Grid>
        <Grid item>
          <Switch
            checked={myGamesOnly}
            onChange={toggleMyGamesOnly}
          />
          <IconButton onClick={() => console.log("open filter")}>
            <Icon path={mdiFilterVariant} size={1} />
          </IconButton>
          <IconButton onClick={() => console.log("refresh")}>
            <Icon path={mdiRefresh} size={1} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
