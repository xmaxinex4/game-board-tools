import React, { useState, useCallback } from "react";

import { makeStyles } from "@material-ui/styles";
import { Skeleton } from "@material-ui/lab";
import { Theme } from "@material-ui/core";

export type ImageDimensions = { width: number; height: number; };

const useStyles = makeStyles<Theme, { imgIsLoading: boolean; imageDimensions?: ImageDimensions; }>((theme) => ({
  skeleton: ({ imageDimensions }) => ({
    width: imageDimensions?.width ?? 0,
    height: imageDimensions?.height ?? 0,
    borderRadius: `${theme.spacing(0.5)}px`,
    boxShadow: theme.shadows[1],
  }),
  image: ({ imgIsLoading, imageDimensions }) => ({
    width: imageDimensions?.width ?? 0,
    height: imageDimensions?.height ?? 0,
    borderRadius: `${theme.spacing(0.5)}px`,
    boxShadow: theme.shadows[1],
    display: imgIsLoading ? "none" : "block",
  }),
}));

export interface ImageLoaderProps {
  imageDimensions: ImageDimensions;
  imgSrc: string;
}

export function ImageLoader(props: ImageLoaderProps): React.ReactElement {
  const { imageDimensions, imgSrc } = props;

  const [imgIsLoading, setImgIsLoading] = useState(true);
  const onLoad = useCallback(() => setImgIsLoading(false), [setImgIsLoading]);

  const { image, skeleton } = useStyles({ imgIsLoading, imageDimensions });

  return (
    <>
      {imgIsLoading && (
        <Skeleton component="div" className={skeleton} variant="rect" />
      )}
      <img className={image} onLoad={onLoad} src={imgSrc} alt="" />
    </>
  );
}
