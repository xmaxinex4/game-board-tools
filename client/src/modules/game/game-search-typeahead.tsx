import React from "react";
// import { useLazyQuery } from "react-apollo";

import { Autocomplete, AutocompleteInputChangeReason } from "@material-ui/lab";

import {
  CircularProgress,
  FormControlLabel,
  Grid,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Switch
} from "@material-ui/core";

import useDebounce from "../../hooks/useDebounce";

// import { GAME_SEARCH } from "../Queries";
// import { GameSearchQueryResult, GameSearchResult } from "../Types";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  exactMatchSwitchClass: {
    paddingRight: theme.spacing()
  },
  loadingIndicatorClass: {
    position: "absolute",
    marginLeft: "250px"
  },
}));

export interface GameSearchTypeaheadProps {
  onSelect?: (bggId: number) => void;
}

export const GameSearchTypeahead: React.FunctionComponent<GameSearchTypeaheadProps> = ({ onSelect }) => {
  const { exactMatchSwitchClass, loadingIndicatorClass } = useStyles({});
  const [options, setOptions] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [exactMatch, setExactMatch] = React.useState(false);

  const toggleExactMatch = () => setExactMatch(!exactMatch);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // const onSearchCompleted = (result: GameSearchQueryResult) => {
  //   setIsSearching(false);
  //   setOptions(result.gameSearch || []);
  // }

  // const [getGameSearchResults, { loading, data, error }] = useLazyQuery<GameSearchQueryResult>(GAME_SEARCH, {
  //   variables: { search: debouncedSearchTerm, limit: 5, exact: exactMatch },
  //   onCompleted: onSearchCompleted
  // });

  // React.useEffect(
  //   () => {
  //     if (debouncedSearchTerm) {
  //       setIsSearching(true);
  //       getGameSearchResults({ variables: { search: debouncedSearchTerm, limit: 5, exact: exactMatch } });
  //     } else {
  //       setOptions([]);
  //     }
  //   }, [debouncedSearchTerm, exactMatch]
  // );

  const handleChange = (event: React.ChangeEvent<{}>, value: string, reason: AutocompleteInputChangeReason) => {
    if (value) {
      setSearchTerm(value);
    }
  };

  const onGameSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, bggId: number) => {
    e.preventDefault();
    setSearchTerm("");
    if (onSelect) {
      onSelect(bggId);
    }
  }

  return (
    <Grid container alignItems="flex-end" direction="column">
      <Grid item>
        <FormControlLabel
          control={<Switch size="small" color="primary" checked={exactMatch} onChange={toggleExactMatch} />}
          label="Exact Match"
          labelPlacement="start"
          className={exactMatchSwitchClass}
        />
      </Grid>
      <Grid container alignItems="center" item>
        <Grid item>
          {isSearching && (
            <CircularProgress className={loadingIndicatorClass} size={20} />
          )}
        </Grid>
        <Grid item>
          <Autocomplete
            style={{ width: 300 }}
            getOptionLabel={option => option.name}
            filterOptions={x => x}
            options={options}
            autoComplete
            includeInputInList
            freeSolo
            onInputChange={handleChange}
            renderInput={params => (
              <TextField
                {...params}
                label="Search Games"
                variant="outlined"
                fullWidth
                value={searchTerm}
              />
            )}
            renderOption={(option: any) => {
              return (
                <div onClick={e => onGameSelect(e, option.bggId)}>
                  <ListItem>
                    <ListItemText primary={option.name} secondary={option.year ? `Year: ${option.year}` : ""} />
                  </ListItem>
                </div>
              );
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
