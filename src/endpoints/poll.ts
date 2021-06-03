import { Express } from "express";

import { PrismaClient } from ".prisma/client";

export const initializePollApi = (app: Express, prisma: PrismaClient) => {
  app.get('/api/poll/:groupid', async (req, res) => {
    // query {
    //   groupPolls {
    //       id
    //       title
    //       open
    //       playDate
    //       author {
    //         id
    //         username
    //         color
    //       }
    //     }
    //   }
  });
}
