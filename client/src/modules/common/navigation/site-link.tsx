/* eslint-disable react/jsx-props-no-spreading, no-unused-vars */

import React from "react";
import { Link, LinkProps } from "react-router-dom";

import {
  Grid,
  makeStyles,
  SvgIcon,
  SvgIconProps,
  Theme,
  Typography,
} from "@material-ui/core";

export interface SiteLinkStyleProps {
  noUnderline?: boolean;
}

export interface SiteLinkProps extends LinkProps {
  text: string;
  icon?: (props: SvgIconProps) => React.ReactElement;
  styleProps?: SiteLinkStyleProps;
}

const useStyles = makeStyles<Theme, SiteLinkStyleProps>((theme: Theme) => ({
  link: ({ noUnderline }) => ({
    color: theme.palette.primary.main,
    textDecoration: "none",

    "&:hover": {
      textDecoration: noUnderline ? "" : "underline",
    },
  }),
}));

export function SiteLink(props: SiteLinkProps): React.ReactElement {
  const {
    icon: Icon,
    text,
    styleProps,
    ...linkProps
  } = props;
  const { link } = useStyles(styleProps || {});

  return (
    Icon ? (
      <Link className={link} {...linkProps}>
        <Grid container spacing={1}>
          <Grid item>
            <SvgIcon>
              <Icon />
            </SvgIcon>
          </Grid>
          <Grid item>
            <Typography color="primary">
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    ) : (
      <Link className={link} {...linkProps}>
        {text}
      </Link>
    )
  );
}
