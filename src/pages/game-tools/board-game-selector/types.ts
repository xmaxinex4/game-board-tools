export interface GameDetails {
  name: string,
  bggId: string,
  gameType: string,
  description: string,
  minPlayers: number,
  maxPlayers: number,
  minPlayTime: number,
  maxPlayTime: number,
  minAge: number,
  categoriesAndMechanics: string[];
  mechanics: string[];
  rating: number;
  complexity: number;
  urlThumb: string;
  // designers: string[];
  // artists: string[];
  // publishers: string[];
  // year: number;
}

export const ColorPalette = {
  Green: "#2e7d32",
  Yellow: "#ffc32b",
  Red: "#d32f2f",
};
