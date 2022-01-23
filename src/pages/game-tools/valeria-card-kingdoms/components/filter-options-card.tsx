/* eslint-disable no-unused-vars */

import React, { useCallback } from "react";

import CloseIcon from "@mui/icons-material/Close";

import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  IconButton,
  ListSubheader,
  Switch,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ValeriaCardKingdomsSetFilters } from "../data";
import { BaseSetIndicator } from "../images/set-indicators/base";
import { CrimsonSeasSetIndicator } from "../images/set-indicators/crimson-seas";
import { GnollMonsterPackSetIndicator } from "../images/set-indicators/gnoll-monster-pack";
import { KaharianMonsterPackSetIndicator } from "../images/set-indicators/kaharian-monster-pack";
import { PeasantsAndKnightsSetIndicator } from "../images/set-indicators/peasants-and-knights";
import { UndeadSamuraiSetIndicator } from "../images/set-indicators/undead-samurai";
import { ShadowvaleSetIndicator } from "../images/set-indicators/shadowvale";
import { FlamesAndFrostSetIndicator } from "../images/set-indicators/flames-and-frost";
import { FireTempleMonsterPackSetIndicator } from "../images/set-indicators/fire-temple-monster-pack";

const useStyles = makeStyles<Theme>((theme) => ({
  modalCard: {
    overflowY: "auto",
  },
  modalActionButton: {
    paddingRight: `${theme.spacing(2)}`,
    paddingTop: `${theme.spacing(3)}`,
    paddingLeft: `${theme.spacing(1)}`,
  },
  hiddenSwitch: {
    display: "none",
    margin: 0,
  },
  noMargin: {
    margin: 0,
  },
  noIconPadding: {
    paddingLeft: `${theme.spacing(1)}`,
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

  const mdUp = useMediaQuery("(min-width:850px)");

  const {
    modalCard,
    modalActionButton,
    noMargin,
    noIconPadding,
  } = useStyles();

  const {
    base,
    crimsonSeas,
    fireTempleMonsterPack,
    flamesAndFrost,
    gnollMonsterPack,
    kaharianMonsterPack,
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
        <Grid container direction="column" justifyContent="center" alignItems="center">

          <Grid container item alignItems="center" justifyContent="space-between">
            <Grid item>
              <ListSubheader>Filter By Set</ListSubheader>
            </Grid>
            <Grid item>
              <IconButton onClick={onClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
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
                  <Switch checked={base} onChange={handleCardSetFiltersChange} name="base" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
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
                  <Switch checked={crimsonSeas} onChange={handleCardSetFiltersChange} name="crimsonSeas" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
                      <Grid item>
                        <FireTempleMonsterPackSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Fire Temple Monster Pack</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch checked={fireTempleMonsterPack} onChange={handleCardSetFiltersChange} name="fireTempleMonsterPack" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
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
                  <Switch checked={flamesAndFrost} onChange={handleCardSetFiltersChange} name="flamesAndFrost" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
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
                  <Switch checked={gnollMonsterPack} onChange={handleCardSetFiltersChange} name="gnollMonsterPack" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
                      <Grid item>
                        <KaharianMonsterPackSetIndicator />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography>Kaharian Monster Pack</Typography>
                    </Grid>
                  </Grid>
                )}
                control={(
                  <Switch checked={kaharianMonsterPack} onChange={handleCardSetFiltersChange} name="kaharianMonsterPack" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
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
                  <Switch checked={peasantsAndKnights} onChange={handleCardSetFiltersChange} name="peasantsAndKnights" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
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
                  <Switch checked={shadowvale} onChange={handleCardSetFiltersChange} name="shadowvale" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={11} alignItems="center" justifyContent="space-between" className={mdUp ? "" : noIconPadding}>
            <Grid item>
              <FormControlLabel
                className={noMargin}
                label={(
                  <Grid container alignItems="center" spacing={1}>
                    {mdUp && (
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
                  <Switch checked={undeadSamurai} onChange={handleCardSetFiltersChange} name="undeadSamurai" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item container justifyContent="flex-end" className={modalActionButton} spacing={2}>
            <Grid item xs={12} md={3}>
              <Button fullWidth variant="contained" color="primary" onClick={onRandomizeActionButton}>Randomize</Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
