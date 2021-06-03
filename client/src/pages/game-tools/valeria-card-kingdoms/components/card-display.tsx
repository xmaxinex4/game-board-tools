import React from "react";

import useResizeObserver from "@react-hook/resize-observer";

import {
  Box,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { ImageLoader } from "../../../../modules/common/image/image-loader";
import { ValeriaCardKingdomsCard } from "../data";

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: "100%",
  },
}));

export interface ValeriaCardKingdomsCardProps {
  card: ValeriaCardKingdomsCard;
}

export function ValeriaCardKingdomsCardDisplay(props: ValeriaCardKingdomsCardProps): React.ReactElement {
  const { card } = props;
  const { name, imgSrc, setIndicator: SetIndicator } = card;
  const { fullWidth } = useStyles({});

  const gridContainerRef = React.useRef(null);
  const [imageDimensions, setImageDimensions] = React.useState<{ height: number, width: number; }>({ height: 0, width: 0 });
  useResizeObserver(gridContainerRef, (entry) => setImageDimensions({ height: (1.4) * entry.contentRect.width, width: entry.contentRect.width }));

  return (
    <Grid container direction="column" justify="flex-end" alignItems="center" ref={gridContainerRef}>
      <Grid className={fullWidth} item>
        <Typography display="block" align="center" noWrap variant="caption">
          <Grid container spacing={1} justify="center" alignItems="center">
            <Hidden xsDown>
              <Grid item>
                <SetIndicator />
              </Grid>
            </Hidden>
            <Grid item>
              <Box fontWeight="fontWeightBold">{name}</Box>
            </Grid>
          </Grid>
        </Typography>
      </Grid>
      <Grid className={fullWidth} item>
        <ImageLoader imgSrc={imgSrc} imageDimensions={imageDimensions} />
      </Grid>
    </Grid>
  );
}
