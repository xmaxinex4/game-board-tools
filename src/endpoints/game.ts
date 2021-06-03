import { Express } from "express";

import { PrismaClient } from ".prisma/client";

export const initializeGameApi = (app: Express, prisma: PrismaClient) => {
  app.get('/api/game/:bggid', async (req, res) => {
    //     export const GAME_DISPLAY_DETAILS = gql`
    // query GAME_DISPLAY_DETAILS(
    //   $bggId: Int!) {
    //     gameDetails(
    //       bggId: $bggId
    //     )
    //   {
    //     name
    //     bggId
    //     year
    //     urlThumb
    //   }
    // }
    // `
  });

  app.get('/api/game/search', async (req, res) => {
    //     export const GAME_SEARCH = gql`
    // query GAME_SEARCH(
    //   $search: String!,
    //   $limit: Int!,
    //   $exact: Boolean) {
    //     gameSearch(
    //           search: $search,
    //           limit: $limit,
    //           exact: $exact
    //     )
    //   {
    //     name
    //     bggId
    //     year
    //   }
    // }
    // `
  });
}
