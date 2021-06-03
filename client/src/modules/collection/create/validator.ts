import { CreateCollectionFormModel } from "./model";

export const validateCreateCollectionForm = (model: CreateCollectionFormModel, setErrors: (errorState: CreateCollectionFormModel) => void): boolean => {
  let formIsValid = true;
  let errors: CreateCollectionFormModel = { name: "", ownerIds: [], gameIds: [] };

  if (!model.name) {
    errors = { ...errors, name: "Name is required" };
    formIsValid = false;
  }

  // TODO: Probably need more validation?
  // TODO: Update validation to check bggIds and ownerIds (no duplicates and current user should be an owner)

  setErrors({ ...errors });
  return formIsValid;
}