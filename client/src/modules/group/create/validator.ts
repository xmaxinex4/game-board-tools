import { CreateGroupFormModel } from "./model";

export const validateCreateGroupForm = (model: CreateGroupFormModel, setErrors: (errorState: CreateGroupFormModel) => void): boolean => {
  let formIsValid = true;
  let errors: CreateGroupFormModel = { name: "" };

  if (!model.name) {
    errors = { ...errors, name: "Name is required" };
    formIsValid = false;
  }

  // TODO: Probably need more validation?

  setErrors({ ...errors });
  return formIsValid;
}