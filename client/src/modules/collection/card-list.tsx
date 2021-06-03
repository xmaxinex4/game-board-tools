import React from "react";

import { Grid } from "@material-ui/core";

import { Collection } from "../../api-types/collection";

import { CollectionCard } from "./card";

export interface CollectionCardListProps {
  collections: Collection[];
}

export function CollectionCardList(props: CollectionCardListProps): React.ReactElement {
  const { collections } = props;

  return (
    <Grid container direction="column">
      {collections.map((collection) => {
        return (
          <Grid item>
            <CollectionCard collection={collection} />
          </Grid>
        );
      })}
    </Grid>
  );
}
