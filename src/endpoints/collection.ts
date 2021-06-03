import { Express } from "express";

import { PrismaClient } from ".prisma/client";

export const initializeCollectionApi = (app: Express, prisma: PrismaClient) => {
  app.get('/api/collection/:id', async (req, res) => {
  });

  app.get('/api/collection/mycollections', async (req, res) => {
  });

  app.post('/api/collection/upsert', async (req, res) => {
    const { collectionId, name, ownerIds, bggIds } = req.body;

    if (!collectionId || !name || !ownerIds || !bggIds) {
      return res.status(401).json({ error: `Required parameters were not given` });
    }

    //gather owner ids
    //gather bggids

    const result = await prisma.collection.upsert({
      where: {
        id: collectionId
      },
      create: {
        name,
      },
      update: {
        name,
        games: {

        }
      }
    });

    res.json(result)
  });
}
