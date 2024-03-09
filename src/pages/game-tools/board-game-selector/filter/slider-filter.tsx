/* eslint-disable react/jsx-props-no-spreading, no-unused-vars */

import React, { useCallback } from "react";

import {
  Box,
  Grid,
  Mark,
  Slider,
  Typography,
} from "@mui/material";

export interface SliderFilterProps {
  filterValue?: number | number[];
  onSliderValueChange: (event: Event, value: number | number[]) => void;
  marks: boolean | Mark[] | undefined;
  min?: number;
  max?: number;
  label: string;
  step?: number;
}

export function SliderFilter(props: SliderFilterProps): React.ReactElement {
  const {
    onSliderValueChange,
    filterValue,
    marks,
    min,
    max,
    label,
    step,
  } = props;

  const onChange = useCallback((event: Event, value: number | number[]) => {
    onSliderValueChange(event, value);
  }, [onSliderValueChange]);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="subtitle2">{label}</Typography>
      </Grid>
      <Grid item>
        <Box
          sx={{
            paddingRight: "24px",
            paddingLeft: "24px",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <Slider
            value={filterValue}
            onChange={onChange}
            valueLabelDisplay="auto"
            min={min}
            max={max}
            marks={marks}
            step={step}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
