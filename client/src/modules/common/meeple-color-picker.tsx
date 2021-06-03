/* eslint-disable no-unused-vars */

import React, { useCallback } from "react";
import { CirclePicker, ColorResult } from "react-color";

import { Grid, makeStyles } from "@material-ui/core";

import { Meeple } from "../../images/components/meeple";
import { MeepleColorStringArray } from "../../theme/meeple-palettes";

interface MeepleColorPickerProps {
  color: string;
  setColor: (newColor: string) => void;
}

const useStyles = makeStyles({
  circlePicker: {
    maxWidth: "355px", // width of 8 color icon (42x42) row
    minWidth: "275px", // width of 5 color icon (42x42) row
  },
});

export function MeepleColorPicker(props: MeepleColorPickerProps): React.ReactElement {
  const { color, setColor } = props;
  const { circlePicker } = useStyles({});

  const onColorChange = useCallback((colorResult: ColorResult) => {
    setColor(colorResult.hex);
  }, [setColor]);

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item>
        <Meeple fill={color} />
      </Grid>
      <Grid item className={circlePicker}>
        <CirclePicker
          width="100%"
          className={circlePicker}
          color={color}
          colors={MeepleColorStringArray}
          onChangeComplete={onColorChange}
        />
      </Grid>
    </Grid>
  );
}
