import React, { useCallback, useState } from "react";
import { union } from "lodash";

import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import jsonQuery from "json-query";
import { BggCategories, BggMechanics, GameFilters } from "./filter/model";
import { SliderFilter } from "./filter/slider-filter";
import { ComplexityFilter } from "./filter/complexity-filter";
import { gameData } from "../data/boardgames";
import { NumberSelectFilter } from "./filter/number-select-filter";
import { GameDetails } from "./types";
import { GameDetailDialog } from "./display/game-detail-dialog";

export function BoardGameSelector(): React.ReactElement {
  const [gameDetailDialogOpen, setGameDetailDialogOpen] = useState(false);
  const [filters, setFilters] = useState<GameFilters>({
    name: "",
    minYearPublished: "",
    complexityRange: [0, 5],
    minPlayers: 1,
    maxPlayers: 7,
    minPlayTime: 0,
    maxPlayTime: 8,
    minAge: 0,
    maxAge: 21,
    categoriesAndMechanics: [],
  });

  const [gameResult, setGameResult] = useState<GameDetails>({} as GameDetails);

  // TODO: Build minimum year filter
  // TODO: Fix range filters with board game group logic
  const onSubmit = useCallback(() => {
    const filteredResults = jsonQuery(`
      games[
        minAge>=${filters.minAge}
        &minPlayers>=${filters.minPlayers}
        &maxPlayers<=${filters.maxPlayers === 7 ? 200 : filters.maxPlayers}
        &complexity>=${filters.complexityRange?.[0]}
        &complexity<=${filters.complexityRange?.[1]}
        &minPlayTime>=${filters.minPlayTime}
        &maxPlayTime<=${filters.maxPlayTime === 8 ? 1000000 : filters.maxPlayTime} 
        &categoriesAndMechanics:containsCategoriesAndMechanicsFilter()   
      ]`, {
      data: gameData,
      locals: {
        containsCategoriesAndMechanicsFilter(input) {
          // make sure result filters out games that don't include categories and mechanics specified in the filter
          return Array.isArray(input) && filters?.categoriesAndMechanics?.every((el) => input.includes(el));
        },
      },
    });

    setGameResult(filteredResults.value);
    setGameDetailDialogOpen(true);
  }, [filters]);

  const onGameDetailDialogClose = () => {
    setGameDetailDialogOpen(false);
  };

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

  const onMinAgeChange = useCallback((value: number) => {
    setFilters({
      ...filters,
      minAge: value,
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
        categoriesAndMechanics: value,
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
    <Container maxWidth="sm">
      <Grid container direction="column" spacing={3}>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <NumberSelectFilter
              onValueChange={onMinAgeChange}
              formTitle="Min Age"
              options={minAgeMarks}
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
            value={filters.categoriesAndMechanics}
            renderInput={(params) => (
              <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
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
        <Grid item sx={{ marginLeft: "auto" }}>
          <Typography variant="caption" color="primary.main">Powered by BoardGameGeek</Typography>
        </Grid>

        <GameDetailDialog open={gameDetailDialogOpen} onClose={onGameDetailDialogClose} game={gameResult} />
      </Grid>
    </Container>
  );
}
