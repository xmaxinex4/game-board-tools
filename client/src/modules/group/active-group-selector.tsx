import React, { useContext } from "react";
import { mdiPlus } from "@mdi/js";
import { FormControl, MenuItem, Select } from "@material-ui/core";

import { ActiveGroupContext } from "../../contexts/active-group-context";
import { ActiveUserContext } from "../../contexts/active-user-context";
import { TextButton } from "../common/button/text-button";

export function ActiveGroupSelector(): React.ReactElement {
  const { activeGroup } = useContext(ActiveGroupContext);
  const { activeUser } = useContext(ActiveUserContext);

  // const onCreateGroupError = (error: ApolloError) => {
  //   // TODO: Handle error
  //   console.log("create group error: ", error);
  // }

  // const onCreateGroupCompleted = (data: any) => {
  //   // TODO: Show success snackbar
  //   // window.location.href = "/manage-group";
  //   console.log("create account success", data)
  // }

  // const [createGroup, createGroupResults] = useMutation(CREATE_GROUP, { onError: onCreateGroupError, onCompleted: onCreateGroupCompleted });

  const onActiveGroupChanged = (event: React.ChangeEvent<{ name?: string; value: unknown; }>) => {
    console.log("event: ", event);
  };

  const onAddGroup = () => {
    console.log("onAddGroup");
    // createGroup({ variables: { name: `${activeUser.username}"s game group`, userId: activeUser.id } });
  };

  return (
    <>
      {
        activeUser?.groupMemberships
          ? (
            <FormControl variant="outlined">
              <Select
                onChange={onActiveGroupChanged}
                value={activeGroup ? activeGroup.id : null}
                inputProps={{
                  name: "active group",
                  id: "group-select",
                }}
              >
                {activeUser.groupMemberships.map((groupMembership) => (
                  <MenuItem value={groupMembership.group.id}>{groupMembership.group.name}</MenuItem>
                ))}
                <MenuItem value={20}>Twenty</MenuItem>
              </Select>
            </FormControl>
          ) : <TextButton text="Add Group" icon={mdiPlus} onClick={onAddGroup} />
      }
    </>
  );
}
