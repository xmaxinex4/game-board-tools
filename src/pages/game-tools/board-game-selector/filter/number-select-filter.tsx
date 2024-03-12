/* eslint-disable react/jsx-props-no-spreading, no-unused-vars */

import React, { useCallback, useState } from "react";

import {
  Grid,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormLabel,
  Typography,
} from "@mui/material";

export interface NumberSelectFilterProps {
  formTitle: string;
  onValueChange: (value: number) => void;
  options: {value: number, label: string}[];
}

export function NumberSelectFilter(props: NumberSelectFilterProps): React.ReactElement {
  const {
    formTitle,
    onValueChange,
    options,
  } = props;

  const [value, setValue] = useState(0);

  const onChange = useCallback((event: SelectChangeEvent) => {
    const selectedValue = parseInt(event?.target?.value, 10);
    onValueChange(selectedValue || 0);
    setValue(selectedValue);
  }, [onValueChange]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <FormLabel>
          <Typography color="black" variant="subtitle2">{formTitle}</Typography>
        </FormLabel>
      </Grid>
      <Grid item>
        <FormControl
          variant="outlined"
        >
          <Select
            onChange={onChange}
            value={`${value}`}
            size="small"
          >
            {options.map((option) => <MenuItem value={option.value}>{option.label}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
