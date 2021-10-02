import React, { ReactNode } from "react";

import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme, FloatingPageContentStyleProps>((theme) => ({
  floatingContent: ({ position }) => ({
    top: "auto",
    bottom: (position === "bottom-left" || position === "bottom-right") ? 0 : "",
    right: (position === "top-right" || position === "bottom-right") ? 0 : "",
    position: "fixed",
    padding: `${theme.spacing(2)}`,
  }),
}));

export interface FloatingPageContentStyleProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export interface FloatingPageContentProps {
  styleProps: FloatingPageContentStyleProps;
}

export function FloatingPageContent(props: FloatingPageContentProps & { children: ReactNode; }): React.ReactElement {
  const { styleProps, children } = props;
  const { floatingContent } = useStyles(styleProps);

  return (
    <div className={floatingContent}>
      {children}
    </div>
  );
}
