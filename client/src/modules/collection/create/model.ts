import { Collection } from "../../../api-types/collection";

export type CreateCollectionFormModel = Partial<Collection> & {
  gameIds: string[];
  ownerIds: string[];
};
