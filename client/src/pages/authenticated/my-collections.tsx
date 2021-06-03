import React from "react";

import { Typography, Button } from "@material-ui/core";

export const MyCollections: React.FunctionComponent = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState<Collection[]>([]);

  // const onUpsertCollectionError = () => {
  //   // TODO: show errors in ui
  //   console.log("upsert collection error: ", error);
  // };
  // const [upsertCollection, upsertCollectionResults] = useMutation<{ upsertCollection: CollectionDetails }>(UPSERT_COLLECTION, {
  //   onError: onUpsertCollectionError,
  //   onCompleted: refetch
  // });

  const onAddCollection = () => {
    // upsertCollection({ variables: { name: `${activeUserContext.activeUser.username}"s Collection` } });
    console.log("onAddCollection");
  };

  return (
    <>
      {/* <Grid container direction="column">
       <Grid item xs={12}> */}
      <Typography>My Collections</Typography>
      {/* </Grid>
      <Grid item>
        {loading &&
          <Typography>Loading...</Typography>
        }
      </Grid>
  <Grid item>
        {error &&
          <Typography>Error: {error}</Typography>
        }
      </Grid>
   <Grid item xs={12}> */}
      {/* {!isLoading && */}
      {/* (data.length > 0
          ? (
            <CollectionCardList collections={data} />
          ) : ( */}
      <Typography>
        Looks like you need to add a collection to get started
        <Button onClick={onAddCollection}>+ Add Collection</Button>
      </Typography>
      {/* )
        ) */}
      {/* } */}
    </>
    //   </Grid>
    // </Grid>
  );
};
