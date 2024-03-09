/* eslint-disable react/jsx-props-no-spreading,no-unused-vars */

import React, { useCallback, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { union } from "lodash";

import {
  Autocomplete,
  Button,
  Grid,
  TextField,
} from "@mui/material";

import { BggCategories, BggMechanics, LibraryGameFilters } from "./filter/model";
import { SliderFilter } from "./filter/slider-filter";
import { ComplexityFilter } from "./filter/complexity-filter";

export interface FilterFormProps {
  onSubmit: () => void;
}

export function BoardGameSelector(props: FilterFormProps): React.ReactElement {
  const { onSubmit } = props;
  const [filters, setFilters] = useState<LibraryGameFilters>({});

  const onPlayerCountChange = useCallback((event: Event, value: number | number[]) => {
    setFilters({
      ...filters,
      minPlayers: typeof value === "number" ? value : value[0],
      maxPlayers: typeof value === "number" ? value : value[1],
    });
  }, [filters]);

  const onComplexityChange = useCallback((value: number[]) => {
    setFilters({
      ...filters,
      complexityRange: value,
    });
  }, [filters]);

  const onMinAgeChange = useCallback((e, value: number | number[]) => {
    setFilters({
      ...filters,
      minAge: typeof value === "number" ? value : value[0],
      maxAge: typeof value === "number" ? value : value[1],
    });
  }, [filters]);

  const onTimeChange = useCallback((e: Event, value: number | number[]) => {
    setFilters({
      ...filters,
      minPlayTime: typeof value === "number" ? value : value[0],
      maxPlayTime: typeof value === "number" ? value : value[1],
    });
  }, [filters]);

  const onCategoryAndMechanicsChange = useCallback(
    (
      event: React.SyntheticEvent<Element, Event>,
      value: string[],
    ) => {
      setFilters({
        ...filters,
        categoriesOrMechanics: value,
      });
    },
    [filters],
  );

  const baseMarks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];

  const playerCountMarks = [
    ...baseMarks,
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7+",
    },
  ];

  const minAgeMarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 13,
      label: "13",
    },
    {
      value: 21,
      label: "21+",
    },
  ];

  const timeMarks = [
    {
      value: 0.5,
      label: "30min",
    },
    {
      value: 4,
      label: "4hr",
    },
    {
      value: 8,
      label: "8hr+",
    },
  ];

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container spacing={2}>
        <Grid item xs={12} sm={6}>
          <SliderFilter
            onSliderValueChange={onMinAgeChange}
            label="Age"
            min={0}
            max={21}
            marks={minAgeMarks}
            filterValue={[filters.minAge || 0, filters.maxAge || 21]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ComplexityFilter
            onComplexityChange={onComplexityChange}
            filterValues={[filters.complexityRange?.[0] || 0, filters.complexityRange?.[1] || 5]}
          />
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item xs={12} sm={6}>
          <SliderFilter
            onSliderValueChange={onPlayerCountChange}
            label="Player Count"
            min={1}
            max={7}
            marks={playerCountMarks}
            filterValue={[filters.minPlayers || 1, filters.maxPlayers || 7]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SliderFilter
            filterValue={[filters.minPlayTime || 0, filters.maxPlayTime || 8]}
            onSliderValueChange={onTimeChange}
            label="Time"
            min={0}
            max={8}
            step={0.5}
            marks={timeMarks}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Autocomplete
          sx={{ width: "100%" }}
          multiple
          id="category-filter"
          options={union(BggCategories, BggMechanics)}
          filterSelectedOptions
          onChange={onCategoryAndMechanicsChange}
          value={filters.categoriesOrMechanics}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categories & Mechanics"
              placeholder="Categories"
              size="small"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Button fullWidth variant="outlined" onClick={onSubmit}>
          Apply
        </Button>
      </Grid>
    </Grid>
  );
}
