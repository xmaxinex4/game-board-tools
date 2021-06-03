import React, { useState } from "react";

import { Button, Grid, Typography } from "@material-ui/core"

import PersonIcon from "@material-ui/icons/Person";

import { FullWidthGridItemInput } from "../../common/input/full-width-grid-item-input";
import { CreateGroupFormModel } from "./model";
import { validateCreateGroupForm } from "./validator";

export const CreateGroupForm: React.FunctionComponent = () => {
  const [name, setName] = useState("");
  const [handlingSubmit, setHandlingSubmit] = React.useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<CreateGroupFormModel>({ name: "" });

  const clearErrorField = (e: React.ChangeEvent) => {
    setErrors({ ...errors, [e.currentTarget.id]: "" });
  };

  const onCreateGroupCompleted = (data: any) => {
    console.log("group created");
  };

  const createGroup = () => console.log("create group");

  const handleSubmit = (e: React.FormEvent) => {
    setHandlingSubmit(true);
    e.preventDefault();

    const formValid = validateCreateGroupForm({ name }, setErrors);

    if (formValid) {
      createGroup();
    }

    setHandlingSubmit(false);
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Typography variant="h5" component="h2">
            Create Group
          </Typography>
        </Grid>

        <FullWidthGridItemInput
          formControlProps={{ required: true, disabled: isLoading, fullWidth: true }}
          outerEndAdornmentIcon={PersonIcon}
          input={name}
          inputProps={{ id: "name" }}
          inputLabel="Name"
          setInputState={setName}
          error={errors.name}
          onInputChange={clearErrorField} />

        <Grid container item alignItems="stretch">
          <Button fullWidth variant="contained" color="primary" disabled={handlingSubmit} type="submit">Create Group</Button>
        </Grid>
      </Grid>
    </form >
  )
}