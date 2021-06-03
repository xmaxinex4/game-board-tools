import React from "react";

import { mdiPlus } from "@mdi/js";
import { Modal, Card, CardContent, makeStyles, Grid } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";

import { TextButton } from "../common/button/text-button";
import { CreateGroupForm } from "./create/form";

export interface CreateGroupModalButtonProps extends ButtonProps {

}

const useStyles = makeStyles({
  card: {
    padding: "24px",
    maxWidth: "500px",
    width: "500px"
  },

  div: {
    paddingTop: "100px",
    paddingBottom: "50px",
    outline: "none"
  }
});

export const CreateGroupModalButton: React.FunctionComponent<CreateGroupModalButtonProps> =
  (props) => {
    const classes = useStyles({});
    const [open, setOpen] = React.useState(false);

    const onAddGroup = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <TextButton text="Add Group" icon={mdiPlus} onClick={onAddGroup} />
        <Modal open={open} onClose={handleClose}>
          <div className={classes.div}>
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <Card className={classes.card}>
                  <CardContent>
                    <CreateGroupForm />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </>
    )
  }