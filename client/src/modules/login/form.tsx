import React, { useState } from "react";

import { Grid, Button, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

import { validateLoginForm } from "./validator";

import { FullWidthGridItemPasswordInput } from "../common/input/full-width-grid-item-password-input";
import { SiteLink } from "../common/navigation/site-link";
import { FullWidthGridItemInput } from "../common/input/full-width-grid-item-input";
import { useApi } from "../../hooks/useApi";
import { LoginFormModel } from "./model";

export const LoginForm: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<LoginFormModel>({ email: "", password: "" });

  const clearErrorField = (e: React.ChangeEvent) => {
    setErrors({ ...errors, [e.currentTarget.id]: "" });
  };

  const { apiPost } = useApi();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = validateLoginForm({ email, password }, setErrors);

    if (isFormValid) {
      setIsLoading(true);
      // TODO: Create login response type or get from api (create api type project)
      apiPost<{ token: string; }>("/user/login", { email, password })
        .then(({ data }) => {
          localStorage.setItem("auth-token", data?.token);
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
            formControlProps={{ disabled: isLoading, fullWidth: true }}
            outerEndAdornmentIcon={EmailIcon}
            input={email}
            inputProps={{ id: "email" }}
            inputLabel="Email"
            setInputState={setEmail}
            error={errors.email}
            onInputChange={clearErrorField}
          />

          <Grid container item spacing={1}>
            <FullWidthGridItemPasswordInput
              formControlProps={{ disabled: isLoading, fullWidth: true }}
              input={password}
              setInputState={setPassword}
              error={errors.password}
              onInputChange={clearErrorField}
            />
            <Grid container item justify="flex-end">
              <Typography>
                <SiteLink text="Forgot Password?" to="/forgot-password" />
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Button fullWidth variant="contained" color="primary" disabled={isLoading} type="submit">
              Login
            </Button>
          </Grid>
        </Grid>

        <Grid container item justify="center" spacing={1}>
          <Grid item>
            <Typography>
              Don&apos;t have an account?
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <SiteLink text="Signup" to="/create-account" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
