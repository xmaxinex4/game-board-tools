/* eslint-disable no-unused-vars */

import { LoginFormModel } from "./model";

export function validateLoginForm(model: LoginFormModel, setErrors: (errorState: LoginFormModel) => void): boolean {
  let formIsValid = true;
  let errors = { email: "", password: "" };

  if (!model.email) {
    errors = { ...errors, email: "Email is required" };
    formIsValid = false;
  } else {
    setErrors({ ...errors, email: "" });
  }

  if (!model.password) {
    errors = { ...errors, password: "Password is required" };
    formIsValid = false;
  } else {
    setErrors({ ...errors, password: "" });
  }

  setErrors({ ...errors });
  return formIsValid;
}
