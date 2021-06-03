import { Express } from "express";

import { PrismaClient } from ".prisma/client";

export const initializeGroupApi = (app: Express, prisma: PrismaClient) => {
  app.post('/api/group/create', async (req, res) => {
    // export const CREATE_GROUP = gql`
    // mutation CREATE_GROUP(
    //   $name: String!) {
    //     createGroup(
    //         name: $name
    //     )
    //   {
    //     name,
    //     members {
    //       user {
    //         id
    //         username
    //       }
    //     }
    //   }
    // }
  });
}
