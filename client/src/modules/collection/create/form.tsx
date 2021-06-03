import React, { useState } from "react";

import { Button, Grid, Typography } from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";

import { FullWidthGridItemInput } from "../../common/input/full-width-grid-item-input";
import { CreateCollectionFormModel } from "./model";
import { validateCreateCollectionForm } from "./validator";

export function CreateCollectionForm(): React.ReactElement {
  const [name, setName] = useState("");
  const [ownerIds, setOwnerIds] = useState<string[]>([]);
  const [gameIds, setGameIds] = useState<string[]>([]);
  const [handlingSubmit, setHandlingSubmit] = React.useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<CreateCollectionFormModel>({ name: "", ownerIds: [], gameIds: [] });

  const clearErrorField = (e: React.ChangeEvent) => {
    setErrors({ ...errors, [e.currentTarget.id]: "" });
  };

  const onCreateCollectionCompleted = (data: any) => {
    console.log("collection created");
  };

  const createCollection = () => console.log("create collection");

  const handleSubmit = (e: React.FormEvent) => {
    setHandlingSubmit(true);
    e.preventDefault();

    const formValid = validateCreateCollectionForm({ name, gameIds, ownerIds }, setErrors);

    if (formValid) {
      createCollection();
    }

    setHandlingSubmit(false);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Typography variant="h5" component="h2">
            Create Collection
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
          <Button fullWidth variant="contained" color="primary" disabled={handlingSubmit} type="submit">Create Collection</Button>
        </Grid>
      </Grid>
    </form >
  );
}
