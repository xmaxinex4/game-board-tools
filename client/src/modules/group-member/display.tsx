import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { GroupMember } from "../../api-types/group-member";

export interface GroupMemberDisplayProps {
  groupMember: GroupMember;
}

export function GroupMemberDisplay(props: GroupMemberDisplayProps): React.ReactElement {
  const { groupMember } = props;

  return (
    <Grid container>
      <Typography>
        {`${groupMember} GroupMember Display Placeholder`}
      </Typography>
    </Grid>
  );
}
