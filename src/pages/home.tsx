import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import valeriaMain from "./game-tools/images/valeria-card-kingdoms-main.jpg";

const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 140,
  },
}));

type GameTool = {
  title: string;
  description: string;
  imgSrc: string;
  appLink: string;
};

export function Home(): React.ReactElement {
  const { cardMedia } = useStyles();

  const gameTools: GameTool[] = [{
    title: "Board Game Selector",
    description: "Not sure what to play? Let our selector tool help you choose!",
    imgSrc: valeriaMain,
    appLink: "/board-game-selector",
  },
  {
    title: "Valeria Card Kingdoms Randomizer",
    description: "A card randomizer for Valeria Card Kingdoms",
    imgSrc: valeriaMain,
    appLink: "/valeria-card-kingdoms-randomizer",
  },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid container item xs={12} md={8} spacing={2}>
        {
          gameTools.map((tool) => (
            <Grid item xs={12} md={6}>
              <Card>
                <Link to={tool.appLink} component={CardActionArea}>
                  <CardMedia
                    className={cardMedia}
                    image={tool.imgSrc}
                    title={tool.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {tool.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {tool.description}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  );
}
