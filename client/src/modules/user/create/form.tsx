import React, { useState } from "react";

import {
  Button,
  Grid,
  InputLabel,
  Typography,
} from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";

import { MeeplePaletteColors } from "../../../theme/meeple-palettes";

import { FullWidthGridItemInput } from "../../common/input/full-width-grid-item-input";
import { FullWidthGridItemPasswordInput } from "../../common/input/full-width-grid-item-password-input";
import { MeepleColorPicker } from "../../common/meeple-color-picker";
import { SiteLink } from "../../common/navigation/site-link";
import { CreateUserFormModel } from "./model";
import { validateCreateUserForm } from "./validator";
import { useApi } from "../../../hooks/useApi";

export const CreateUserForm: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [color, setColor] = useState(MeeplePaletteColors.Red.main);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<CreateUserFormModel>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    color: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const showPasswordOverrideControl = {
    showPassword,
    setShowPassword,
  };

  const clearErrorField = (e: React.ChangeEvent) => {
    setErrors({ ...errors, [e.currentTarget.id]: "" });
  };

  const { apiPost } = useApi();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = validateCreateUserForm({
      username,
      email,
      password,
      confirmPassword,
      color,
    }, setErrors);

    if (isFormValid) {
      setIsLoading(true);
      // TODO: Create create response type or get from api (create api type project)
      apiPost<{ user: { create: { token: string; }; }; }>("/user/create", {
        color,
        email,
        password,
        username,
      })
        .then(({ data }) => {
          // TODO: Alert/Welcome user their account has been created
          localStorage.setItem("auth-token", data?.user?.create?.token);
          window.location.href = "/";
        })
        .catch((error) => {
          // TODO: Better error handling
          console.log("login error: ", error);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={8}>
        <Grid container item direction="column" spacing={4}>
          <FullWidthGridItemInput
            formControlProps={{ required: true, disabled: isLoading, fullWidth: true }}
            outerEndAdornmentIcon={PersonIcon}
            input={username}
            inputProps={{ id: "username" }}
            inputLabel="Username"
            setInputState={setUsername}
            error={errors.username}
            onInputChange={clearErrorField}
          />

          <FullWidthGridItemInput
            formControlProps={{ required: true, disabled: isLoading, fullWidth: true }}
            outerEndAdornmentIcon={EmailIcon}
            input={email}
            inputProps={{ id: "email" }}
            inputLabel="Email"
            setInputState={setEmail}
            error={errors.email}
            onInputChange={clearErrorField}
          />

          <FullWidthGridItemPasswordInput
            formControlProps={{ required: true, disabled: isLoading, fullWidth: true }}
            input={password}
            setInputState={setPassword}
            error={errors.password}
            onInputChange={clearErrorField}
            showPasswordOverrideControl={showPasswordOverrideControl}
          />

          <FullWidthGridItemPasswordInput
            formControlProps={{ required: true, disabled: isLoading, fullWidth: true }}
            input={confirmPassword}
            fullWidthGridItemInputId="confirmPassword"
            inputLabel="Confirm Password"
            setInputState={setConfirmPassword}
            error={errors.confirmPassword}
            onInputChange={clearErrorField}
            showPasswordOverrideControl={showPasswordOverrideControl}
          />

          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <InputLabel required>Pick Your Color</InputLabel>
            </Grid>
            <Grid item>
              <MeepleColorPicker color={color} setColor={setColor} />
            </Grid>
          </Grid>

          <Grid container item alignItems="stretch">
            <Button fullWidth variant="contained" color="primary" disabled={isLoading} type="submit">Create User</Button>
          </Grid>
        </Grid>

        <Grid container item justify="center" spacing={1}>
          <Grid item>
            <Typography>
              Already have an account?
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <SiteLink to="/login" text="Login" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
