import React from "react";

import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { Button } from "@material-ui/core";

// import { ActiveGroupContext } from "../../contexts/active-group-context";
// import { ActiveUserContext } from "../../contexts/active-user-context";
import { TextButton } from "../common/button/text-button";

export interface AddGroupButtonProps {
  variant?: "text" | null;
}

export function AddGroupButton(props: AddGroupButtonProps): React.ReactElement {
  const { variant } = props;
  // const { activeGroup, setActiveGroup } = React.useContext(ActiveGroupContext);
  // const { activeUser } = React.useContext(ActiveUserContext);

  // const onCreateGroupError = (error: ApolloError) => {
  //   // TODO: Handle error
  //   console.log("create group error: ", error);
  // }

  // const onCreateGroupCompleted = (data: any) => {
  //   // TODO: Show success snackbar
  //   window.location.href = "/manage-group";
  //   console.log("create group success", data)
  // }

  // const [createGroup, createGroupResults] = useMutation(CREATE_GROUP, { onError: onCreateGroupError, onCompleted: onCreateGroupCompleted });

  const onAddGroup = () => {
    console.log("onAddGroup");
    // createGroup({ variables: { name: `${activeUser.username}"s game group` } });
  };

  return (
    (variant === "text")
      ? <TextButton text="Add Group" icon={mdiPlus} onClick={onAddGroup} />
      : <Button startIcon={<Icon path={mdiPlus} />} onClick={onAddGroup}>Add Group</Button>
  );
}
