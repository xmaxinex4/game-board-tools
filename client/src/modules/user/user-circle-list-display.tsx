import React from "react";

import PencilIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Tooltip,
  Typography,
  Avatar,
  Theme,
  IconButton,
} from "@material-ui/core";

import { Meeple } from "../../images/components/meeple";
import { User } from "../../api-types/user";

export interface UserCircleListDisplayProps {
  users: User[];
  onEditUsers?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  meeple: {
    backgroundColor: "inherit"
  },
}));

export const UserCircleListDisplay: React.FunctionComponent<UserCircleListDisplayProps> = ({ users, onEditUsers }) => {
  const { meeple } = useStyles({});

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography>Owners:</Typography>
      </Grid>
      {(users && users.length > 0) && users.map((user) => {
        return (
          <Grid item>
            <Tooltip title={user.username} aria-label={user.username}>
              <Avatar className={meeple}>
                <Meeple size="icon" fill={user.color} />
              </Avatar>
            </Tooltip>
          </Grid>
        );
      })}
      {onEditUsers &&
        <Grid item>
          <IconButton onClick={onEditUsers} color="primary" aria-label="edit owners" component="span">
            <PencilIcon />
          </IconButton>
        </Grid>
      }
    </Grid>
  );
};
