/** ***************************** Library Games */
export interface LibraryGame {
  id: string;
  createdAt: string;
  bggId: string;
  name: string;
  urlImage: string | null;
  urlThumb: string | null;
  year: string | null;
 //  owners: UserResponse[];
  gameDetails?: GameDetails;
}

export interface LibraryReponse {
  library: {
    [key: string]: LibraryGame;
  };
}

/** ***************************** Games */
export interface GameResponse {
  bggId: string,
  name: string,
  urlImage: string,
  urlThumb: string,
  year: string,
}

export const GameResponsePrismaSelect = {
  bggId: true,
  name: true,
  urlImage: true,
  urlThumb: true,
  year: true,
};

export interface CollectionGameResponse {
  id: string;
  createdAt: string;
  game: GameResponse;
}

export const CollectionGameResponsePrismaSelect = {
  id: true,
  createdAt: true,
  game: {
    select: {
      ...GameResponsePrismaSelect,
    },
  },
};

export interface GameDetails {
  bggId: string,
  gameType: string,
  description: string,
  minPlayers: number,
  maxPlayers: number,
  minPlayTime: number,
  maxPlayTime: number,
  minAge: number,
  categories: string[];
  mechanics: string[];
  designers: string[];
  artists: string[];
  publishers: string[];
  rating: number;
  complexity: number;
}

/** ***************************** Collections */
export interface CollectionResponse {
  id: string,
  name: string,
  games: CollectionGameResponse[],
  // owners: UserResponse[],
}

export interface CollectionsResponse {
  collections: CollectionResponse[];
}

// export const CollectionResponsePrismaSelect: Prisma.CollectionSelect = {
//   id: true,
//   name: true,
//   games: {
//     select: {
//       ...CollectionGameResponsePrismaSelect,
//     },
//   },
//   owners: {
//     select: {
//       ...UserResponsePrismaSelect,
//     },
//   },
// };
