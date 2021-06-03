import React, { useCallback, useMemo, useState } from "react";

import { Button, Grid, Typography } from "@material-ui/core";

import { Dialog } from "../../../modules/common/dialog/dialog";

import { ValeriaCardKingdomsCard, ValeriaCardKingdomsSetFilters } from "./data";
import { getRandomizedCards } from "./helpers/get-randomized-cards";
import { ValeriaCardKingdomsFilterOptionsCard } from "./components/filter-options-card";
import { ValeriaCardKingdomsCardDisplay } from "./components/card-display";

export function ValeriaCardKingdomsRandomizer(): React.ReactElement {
  const cardSetFilterStorageKey = "valeria-card-kingdon-tool:sets";
  const [isOptionsDialogOpen, setIsOptionsDialogOpen] = React.useState(false);

  const openOptionsDialog = () => {
    setIsOptionsDialogOpen(true);
  };

  const closeOptionsDialog = () => {
    setIsOptionsDialogOpen(false);
  };

  const [cards, setCards] = useState<ValeriaCardKingdomsCard[]>([]);

  const emptyCardSetFilters: ValeriaCardKingdomsSetFilters = {
    base: true,
    crimsonSeas: false,
    flamesAndFrost: false,
    gnollMonsterPack: false,
    peasantsAndKnights: false,
    shadowvale: false,
    undeadSamurai: false,
  };

  const [cardSetFilters, setCardSetFilters] = useState<ValeriaCardKingdomsSetFilters>(
    localStorage[cardSetFilterStorageKey]
      ? JSON.parse(localStorage[cardSetFilterStorageKey])
      : emptyCardSetFilters,
  );

  const onRandomize = useCallback(
    () => setCards(getRandomizedCards(cardSetFilters)),
    [cardSetFilters, setCards],
  );

  const { firstRowCards, secondRowCards, thirdRowCards } = useMemo(() => ({
    firstRowCards: cards.slice(0, 5),
    secondRowCards: cards.slice(5, 10),
    thirdRowCards: cards.slice(10, 15),
  }), [cards]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid container justify="center" alignItems="center" item spacing={1}>
          <Grid container item direction="column" alignItems="center" spacing={2} xs={12}>
            <Grid item>
              <Typography align="center" variant="h6">Valeria Card Kingdoms Randomizer</Typography>
            </Grid>
            <Grid container justify="center" spacing={2} item>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={openOptionsDialog}
                >
                  Filters
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={onRandomize}
                >
                  Randomize
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid container justify="center" alignItems="flex-end" item spacing={1}>
            {firstRowCards.map((card) => (
              <Grid key={card.name} item xs={2}>
                <ValeriaCardKingdomsCardDisplay card={card} />
              </Grid>
            ))}
          </Grid>
          <Grid container justify="center" alignItems="flex-end" item spacing={1}>
            {secondRowCards.map((card) => (
              <Grid key={card.name} item xs={2}>
                <ValeriaCardKingdomsCardDisplay card={card} />
              </Grid>
            ))}
          </Grid>
          <Grid container justify="center" alignItems="flex-end" item spacing={1}>
            {thirdRowCards.map((card) => (
              <Grid key={card.name} item xs={2}>
                <ValeriaCardKingdomsCardDisplay card={card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Dialog isDialogOpen={isOptionsDialogOpen} setIsDialogOpen={setIsOptionsDialogOpen}>
        <ValeriaCardKingdomsFilterOptionsCard
          cardSetFilters={cardSetFilters}
          setCardSetFilters={setCardSetFilters}
          cardSetFilterStorageKey={cardSetFilterStorageKey}
          onClose={closeOptionsDialog}
          onRandomize={onRandomize}
        />
      </Dialog>
    </>
  );
}
