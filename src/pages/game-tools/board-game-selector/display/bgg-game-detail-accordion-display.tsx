import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMoreTwoTone";
import CategoryIcon from "@mui/icons-material/CategoryTwoTone";
import DescriptionIcon from "@mui/icons-material/DescriptionTwoTone";
// import DesignerIcon from "@mui/icons-material/DesignServicesTwoTone";
// import ArtistIcon from "@mui/icons-material/BrushTwoTone";
// import PublisherIcon from "@mui/icons-material/MenuBookTwoTone";
// import MechanicIcon from "@mui/icons-material/BuildTwoTone";
// import CreditIcon from "@mui/icons-material/PersonOutlineTwoTone";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

// TODO: Encorporate designers, artists, and publisher info into display
export interface BggGameDetailAccordionDisplayProps {
  categoriesAndMechanics?: string[];
  gameDescription?: string;
  // designers?: string[];
  // artists?: string[];
  // publishers?: string[];
}

export function BggGameDetailAccordionDisplay(props: BggGameDetailAccordionDisplayProps): React.ReactElement {
  const {
    categoriesAndMechanics,
    gameDescription,
    // designers,
    // artists,
    // publishers,
  } = props;

  return (
    <>
      {categoriesAndMechanics && categoriesAndMechanics?.length > 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="game-categories-content"
            id="game-categories-header"
          >
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <CategoryIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography>Categories and Mechanics</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              {categoriesAndMechanics.map((categoryOrMechanic: string) => (
                <Grid item key={`category-mechanic-item-${categoryOrMechanic}`}>
                  <Chip
                    sx={{ maxWidth: { xs: "200px", sm: "500px" } }}
                    label={categoryOrMechanic}
                  />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      )}
      {gameDescription && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="game-description-content"
            id="game-description-header"
          >
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <DescriptionIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography>Desciption</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              {gameDescription}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="game-credits-content"
          id="game-credits-header"
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <CreditIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography>Credits</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            <Grid container spacing={1}>
              {designers && designers?.length > 0 && (
                <Grid container item>
                  <Grid item xs={1}><DesignerIcon color="primary" /></Grid>
                  <Grid item xs={11}>{`Designers: ${designers.join(", ")}`}</Grid>
                </Grid>
              )}
              {artists && artists?.length > 0 && (
                <Grid container item>
                  <Grid item xs={1}><ArtistIcon color="primary" /></Grid>
                  <Grid item xs={11}>{`Artists: ${artists.join(", ")}`}</Grid>
                </Grid>
              )}
              {publishers && publishers?.length > 0 && (
                <Grid container item>
                  <Grid item xs={1}><PublisherIcon color="primary" /></Grid>
                  <Grid item xs={11}>{`Publishers: ${publishers.join(", ")}`}</Grid>
                </Grid>
              )}
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
}
