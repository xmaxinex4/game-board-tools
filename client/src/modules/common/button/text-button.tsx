import React from "react";

import Icon from "@mdi/react";
import { Button } from "@material-ui/core";

export interface TextButtonProps {
  icon?: string;
  onClick: () => void;
  text: string;
}

export function TextButton(props: TextButtonProps): React.ReactElement {
  const { icon, onClick, text } = props;

  return (
    <Button
      onClick={onClick}
      startIcon={icon ? <Icon path={icon} size={0.5} /> : null}
    >
      {text}
    </Button>
  );
}
