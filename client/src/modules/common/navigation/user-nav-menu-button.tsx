import React from "react";

import { mdiAccount, mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";

import {
  makeStyles,
  Fab,
  Popover,
  List,
  ListItem,
  ListItemText,
  Link,
  Grid,
  Avatar,
  ListItemIcon,
} from "@material-ui/core";

import { User } from "../../../api-types/user";
import { Meeple } from "../../../images/components/meeple";

const useStyles = makeStyles(() => ({
  meepleButton: {
    backgroundColor: "none",
  },
  meepleAvatar: {
    backgroundColor: "#fff",
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export interface UserNavMenuProps {
  user: User;
}

export function UserNavMenuButton(props: UserNavMenuProps): React.ReactElement {
  const { user } = props;
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    window.location.href = "/";
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Fab color="inherit" size="medium" onClick={handleClick}>
        <Meeple size="icon" fill={user.color} />
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List component="nav">
          <ListItem>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <Avatar className={classes.meepleAvatar}>
                  <Meeple fill={user.color} />
                </Avatar>
              </Grid>
              <Grid item>
                <ListItemText primary={user.username} secondary={user.email} />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem button component={Link} href="/account">
            <ListItemIcon>
              <Icon path={mdiAccount} size={1} />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button component={Link} href="/account/collections">
            <ListItemIcon>
              <Meeple size="icon" fill={user.color} />
            </ListItemIcon>
            <ListItemText primary="My Collections" />
          </ListItem>
          <ListItem button component={Link} href="/account/groups">
            <ListItemIcon>
              <Meeple size="icon" fill={user.color} />
            </ListItemIcon>
            <ListItemText primary="My Groups" />
          </ListItem>
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <Icon path={mdiLogout} size={1} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
