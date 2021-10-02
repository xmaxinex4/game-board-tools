import React from "react";

import useResizeObserver from "@react-hook/resize-observer";

import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

  const mdUp = useMediaQuery("(min-width:850px)");

  const gridContainerRef = React.useRef(null);
  const [imageDimensions, setImageDimensions] = React.useState<{ height: number, width: number; }>({ height: 0, width: 0 });
  useResizeObserver(gridContainerRef, (entry) => setImageDimensions({ height: (1.4) * entry.contentRect.width, width: entry.contentRect.width }));

  return (
    <Grid container direction="column" justifyContent="flex-end" alignItems="center" ref={gridContainerRef}>
      <Grid className={fullWidth} item>
        <Typography display="block" align="center" noWrap variant="caption">
          <Grid container spacing={1} justifyContent="center" alignItems="center">
            {mdUp && (
              <Grid item>
                <SetIndicator />
              </Grid>
            )}
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
