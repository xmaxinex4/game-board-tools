import { UpdateCollectionFormModel } from "./model";

export const validateUpdateCollectionForm = (model: UpdateCollectionFormModel, setErrors: (errorState: UpdateCollectionFormModel) => void): boolean => {
  let formIsValid = true;
  let errors: UpdateCollectionFormModel = { name: "", ownerIds: [], gameIds: [] };

  if (!model.name) {
    errors = { ...errors, name: "Name is required" };
    formIsValid = false;
  }

  // TODO: Probably need more validation?
  // TODO: Update validation to check bggIds and ownerIds (no duplicates and current user should be an owner)

  setErrors({ ...errors });
  return formIsValid;
}