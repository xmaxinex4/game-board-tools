/* eslint-disable no-unused-vars */

import React, { useCallback } from "react";

import CloseIcon from "@material-ui/icons/Close";

import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  IconButton,
  ListSubheader,
  makeStyles,
  Switch,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import { ValeriaCardKingdomsSetFilters } from "../data";
import { BaseSetIndicator } from "../images/set-indicators/base";
import { CrimsonSeasSetIndicator } from "../images/set-indicators/crimson-seas";
import { GnollMonsterPackSetIndicator } from "../images/set-indicators/gnoll-monster-pack";
import { PeasantsAndKnightsSetIndicator } from "../images/set-indicators/peasants-and-knights";
import { UndeadSamuraiSetIndicator } from "../images/set-indicators/undead-samurai";
import { ShadowvaleSetIndicator } from "../images/set-indicators/shadowvale";
import { FlamesAndFrostSetIndicator } from "../images/set-indicators/flames-and-frost";

const useStyles = makeStyles<Theme>((theme) => ({
  modalCard: {
    overflowY: "auto",
  },
  modalActionButton: {
    paddingRight: `${theme.spacing(2)}px`,
    paddingTop: `${theme.spacing(3)}px`,
  },
  hiddenSwitch: {
    display: "none",
    margin: 0,
  },
  noMargin: {
    margin: 0,
  },
  noIconPadding: {
    paddingLeft: `${theme.spacing(1)}px`,
  },
}));

export interface ValeriaCardKingdomsFilterOptionsCardProps {
  cardSetFilters: ValeriaCardKingdomsSetFilters,
  setCardSetFilters: React.Dispatch<React.SetStateAction<ValeriaCardKingdomsSetFilters>>;
  cardSetFilterStorageKey: string;
  onClose: () => void;
  onRandomize: () => void;
}

export function ValeriaCardKingdomsFilterOptionsCard(props: ValeriaCardKingdomsFilterOptionsCardProps): React.ReactElement {
  const {
    cardSetFilters,
    setCardSetFilters,
    cardSetFilterStorageKey,
    onClose,
    onRandomize,
  } = props;

  const smUp = useMediaQuery("(min-width:600px)");

  const {
    modalCard,
    modalActionButton,
    hiddenSwitch,
    noMargin,
    noIconPadding,
  } = useStyles();

  const {
    base,
    crimsonSeas,
    flamesAndFrost,
    gnollMonsterPack,
    peasantsAndKnights,
    shadowvale,
    undeadSamurai,
  } = cardSetFilters;

  const onRandomizeActionButton = useCallback(() => {
    onRandomize();
    onClose();
  }, [onRandomize, onClose]);

  const handleCardSetFiltersChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newSetFilters = { ...cardSetFilters, [event.target.name]: checked };

    setCardSetFilters(newSetFilters);
    localStorage[cardSetFilterStorageKey] = JSON.stringify(newSetFilters);
  }, [cardSetFilters, setCardSetFilters, cardSetFilterStorageKey]);

  return (
    <Card className={modalCard}>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">

          <Grid container item alignItems="center" justify="space-between">
            <Grid item>
              <ListSubheader>Filter By Set</ListSubheader>
            </Grid>
            <Grid item>
              <IconButton onClick={onClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justify="space-between" className={smUp ? "" : noIconPadding}>
            <Grid xs={8} item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {smUp && (
                      <Grid item>
                        <BaseSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Base</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch className={hiddenSwitch} checked={base} onChange={handleCardSetFiltersChange} name="base" />
                )}
              />
            </Grid>
            <Grid item>
              <Switch checked={base} onChange={handleCardSetFiltersChange} name="base" />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justify="space-between" className={smUp ? "" : noIconPadding}>
            <Grid xs={8} item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {smUp && (
                      <Grid item>
                        <CrimsonSeasSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Crimson Seas</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch className={hiddenSwitch} checked={crimsonSeas} onChange={handleCardSetFiltersChange} name="crimsonSeas" />
                )}
              />
            </Grid>
            <Grid item>
              <Switch checked={crimsonSeas} onChange={handleCardSetFiltersChange} name="crimsonSeas" />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justify="space-between" className={smUp ? "" : noIconPadding}>
            <Grid xs={8} item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {smUp && (
                      <Grid item>
                        <FlamesAndFrostSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Flames And Frost</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch className={hiddenSwitch} checked={flamesAndFrost} onChange={handleCardSetFiltersChange} name="flamesAndFrost" />
                )}
              />
            </Grid>
            <Grid item>
              <Switch checked={flamesAndFrost} onChange={handleCardSetFiltersChange} name="flamesAndFrost" />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justify="space-between" className={smUp ? "" : noIconPadding}>
            <Grid xs={8} item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {smUp && (
                      <Grid item>
                        <GnollMonsterPackSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Gnoll Monster Pack</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch className={hiddenSwitch} checked={gnollMonsterPack} onChange={handleCardSetFiltersChange} name="gnollMonsterPack" />
                )}
              />
            </Grid>
            <Grid item>
              <Switch checked={gnollMonsterPack} onChange={handleCardSetFiltersChange} name="gnollMonsterPack" />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justify="space-between" className={smUp ? "" : noIconPadding}>
            <Grid xs={8} item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {smUp && (
                      <Grid item>
                        <PeasantsAndKnightsSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Peasants And Knights</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch className={hiddenSwitch} checked={peasantsAndKnights} onChange={handleCardSetFiltersChange} name="peasantsAndKnights" />
                )}
              />
            </Grid>
            <Grid item>
              <Switch checked={peasantsAndKnights} onChange={handleCardSetFiltersChange} name="peasantsAndKnights" />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justify="space-between" className={smUp ? "" : noIconPadding}>
            <Grid xs={8} item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {smUp && (
                      <Grid item>
                        <ShadowvaleSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Shadowvale</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch className={hiddenSwitch} checked={shadowvale} onChange={handleCardSetFiltersChange} name="shadowvale" />
                )}
              />
            </Grid>
            <Grid item>
              <Switch checked={shadowvale} onChange={handleCardSetFiltersChange} name="shadowvale" />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justify="space-between" className={smUp ? "" : noIconPadding}>
            <Grid xs={8} item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {smUp && (
                      <Grid item>
                        <UndeadSamuraiSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Undead Samurai</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch className={hiddenSwitch} checked={undeadSamurai} onChange={handleCardSetFiltersChange} name="undeadSamurai" />
                )}
              />
            </Grid>
            <Grid item>
              <Switch checked={undeadSamurai} onChange={handleCardSetFiltersChange} name="undeadSamurai" />
            </Grid>
          </Grid>

          <Grid container item justify="flex-end" className={modalActionButton}>
            <Button variant="contained" color="primary" onClick={onRandomizeActionButton}>Randomize</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
