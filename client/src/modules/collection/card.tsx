import { useState } from "react";

import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { Card, CardHeader, CardContent, Grid, IconButton } from "@material-ui/core";

import { GridItemInput } from "../common/input/grid-item-input";
import { Collection } from "../../api-types/collection";
import { UserCircleListDisplay } from "../user/user-circle-list-display";
import { EditGamesModal } from "../game/edit-games-modal";
import { GameCircleListDisplay } from "../game/game-circle-list-display";

export interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard(props: CollectionCardProps): React.ReactElement {
  const { collection } = props;

  const [collectionState, setCollectionState] = useState<Collection>(collection);
  const [editGamesModalOpen, setEditGamesModalOpen] = useState(false);
  const [editingCollectionName, setEditiingCollectionName] = useState(false);

  const [errors, setErrors] = useState({ name: "" });

  const clearErrorField = (e: React.ChangeEvent) => {
    setErrors({ ...errors, [e.currentTarget.id]: "" });
  };

  const openEditGamesModal = () => {
    setEditGamesModalOpen(true);
  };

  const closeEditGamesModal = () => {
    setEditGamesModalOpen(false);
  };

  // const onGetCollectionError = (error: ApolloError) => {
  //   // TODO: show errors in ui
  //   console.log("get collection error: ", error);
  // };

  // const [refreshCollection, refreshCollectionQuery] = useLazyQuery<{ collection: CollectionDetails }>(GET_COLLECTION, {
  //   variables: { collectionId: collectionState.id },
  //   onError: onGetCollectionError,
  //   onCompleted: (result) => {
  //     setCollectionState(collection);
  //   }
  // });

  // const onUpsertCollectionError = (error: ApolloError) => {
  //   // TODO: show errors in ui
  //   console.log("upsert collection error: ", error);
  // };

  const [isLoading, setIsLoading] = useState(false);

  // const [upsertCollection, upsertCollectionDetails] = useMutation<{ upsertCollection: CollectionDetails }>(UPSERT_COLLECTION, {
  //   onError: onUpsertCollectionError,
  //   onCompleted: (result) => {
  //     setErrors({ name: "" });
  //     setEditGamesModalOpen(false);
  //     setCollectionState(result.upsertCollection);
  //   }
  // });

  // const addGamesToCollection = (bggIds: number[]) => {
  //   upsertCollection({
  //     variables: {
  //       collectionId: collectionState.id,
  //       name: collectionState.name,
  //       bggIds
  //     }
  //   });
  // }

  // const editCollectionName = () => setEditiingCollectionName(true);

  const [nameState, setNameState] = useState(collection.name);
  // const saveCollectionName = (event: React.MouseEvent) => {
  //   if (!nameState) {
  //     setErrors({ name: "Name can't be empty" });
  //   } else {
  //     upsertCollection({
  //       variables: {
  //         collectionId: collectionState.id,
  //         name: nameState
  //       }
  //     });
  //     setEditiingCollectionName(false);
  //   }
  // }

  return (
    <Card>
      {!editingCollectionName &&
        <Grid container alignItems="center">
          <Grid item>
            <CardHeader title={collectionState.name} />
          </Grid>
          <Grid item>
            <IconButton onClick={() => console.log("editCollectionName")} color="primary" aria-label="edit owners" component="span">
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
      }
      {editingCollectionName &&
        <GridItemInput
          formControlProps={{ disabled: isLoading }}
          input={nameState}
          inputProps={{ id: "collection-name" }}
          inputLabel="Collection Name"
          setInputState={setNameState}
          error={errors.name}
          onInputChange={clearErrorField}
          rightActionIcon={SaveIcon}
          onRightAction={() => console.log("saveCollectionName")}
        />
      }
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <GameCircleListDisplay games={collectionState.games} onEditGames={openEditGamesModal} />
            <EditGamesModal
              title={`Editing Games in ${collectionState.name}`}
              games={collectionState.games}
              open={editGamesModalOpen}
              handleClose={closeEditGamesModal}
              onSave={() => console.log("addGamesToCollection")}
              loading={isLoading} />
          </Grid>
          <Grid item>
            <UserCircleListDisplay users={collectionState.owners} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
