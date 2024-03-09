/* eslint-disable react/jsx-props-no-spreading, no-unused-vars */

import React, { useCallback, useEffect, useState } from "react";

import {
  Grid,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
  FormLabel,
  Typography,
} from "@mui/material";

export interface ComplexityFilterProps {
  filterValues?: number[];
  onComplexityChange: (values: number[]) => void;
}

export function ComplexityFilter(props: ComplexityFilterProps): React.ReactElement {
  const {
    onComplexityChange,
    filterValues,
  } = props;

  const [minValue, setMinValue] = useState((filterValues?.[0])?.toString() || undefined);
  const [maxValue, setMaxValue] = useState((filterValues?.[1])?.toString() || undefined);

  const onMinChange = useCallback((event: SelectChangeEvent) => {
    const newMin = parseInt(event.target.value, 10);
    setMinValue(event.target.value);
    onComplexityChange([newMin, maxValue ? parseInt(maxValue, 10) : 5]);
  }, [onComplexityChange]);

  const onMaxChange = useCallback((event: SelectChangeEvent) => {
    const newMax = parseInt(event.target.value, 10);
    setMaxValue(event.target.value);
    onComplexityChange([minValue ? parseInt(minValue, 10) : 0, newMax]);
  }, [onComplexityChange]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <FormLabel>
          <Typography color="black" variant="subtitle2">Complexity</Typography>
        </FormLabel>
      </Grid>
      <Grid item>
        <FormControl
          variant="outlined"
        >
          <InputLabel id="complexity-min-range-filter">Min</InputLabel>
          <Select
            labelId="min-range"
            onChange={onMinChange}
            value={minValue}
            label="Min"
            size="small"
          >
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl
          variant="outlined"
        >
          <InputLabel id="complexity-max-range-filter">Max</InputLabel>
          <Select
            labelId="max-range"
            onChange={onMaxChange}
            value={maxValue}
            label="Max"
            size="small"
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
