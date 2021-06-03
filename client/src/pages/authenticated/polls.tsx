import React from "react";

import Icon from "@mdi/react";
import { mdiPlus, mdiFilterVariant, mdiRefresh } from "@mdi/js";
import { Grid, Typography, IconButton } from "@material-ui/core";

import { ActiveGroupContext } from "../../contexts/active-group-context";
import { TextButton } from "../../modules/common/button/text-button";

export function Polls(): React.ReactElement {
  const activeGroupContext = React.useContext(ActiveGroupContext);

  // const [isLoading, setIsLoading] = useState(false);
  // const [value, setValue] = useState(0);

  // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //   setValue(newValue);
  // };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h6">
          {activeGroupContext?.activeGroup?.name}
          Polls
        </Typography>
      </Grid>
      <Grid container item justify="space-between" alignItems="center">
        <Grid item>
          <TextButton onClick={() => console.log("create new poll")} icon={mdiPlus} text="Create Poll" />
        </Grid>
        <Grid item>
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
}
