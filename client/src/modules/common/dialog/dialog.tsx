import React, { ReactNode } from "react";

import { Dialog as MuiDialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  viewPortWidth: { width: "75vw" },
}));

export interface DialogProps {
  isDialogOpen: boolean,
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Dialog(props: DialogProps & { children: ReactNode; }): React.ReactElement {
  const { isDialogOpen, setIsDialogOpen, children } = props;

  const { viewPortWidth } = useStyles();

  const closeOptionsDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <MuiDialog
      classes={{ paper: viewPortWidth }}
      onClose={closeOptionsDialog}
      open={isDialogOpen}
    >
      {children}
    </MuiDialog>
  );
}
