import { Collection } from "../../../api-types/collection";

export type UpdateCollectionFormModel = Partial<Collection> & {
  gameIds: string[];
  ownerIds: string[];
};
