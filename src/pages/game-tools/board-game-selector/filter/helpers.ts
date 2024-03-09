// import { LibraryGame } from "../../../../../src/types/types";

import { LibraryGameFilters } from "./model";

// function sortGames(sort: string, games: LibraryGame[]): LibraryGame[] {
//   const sortedGames = [...games];

//   switch (sort) {
//     case "nameDesc":
//       sortedGames.sort((a, b) => ((a.name < b.name) ? 1 : -1));
//       return sortedGames;
//     case "nameAsc":
//       sortedGames.sort((a, b) => ((a.name > b.name) ? 1 : -1));
//       return sortedGames;
//     case "lowHighComp":
//       sortedGames.sort((a, b) => ((a.gameDetails && b.gameDetails && (a.gameDetails.complexity > b.gameDetails.complexity)) ? 1 : -1));
//       return sortedGames;
//     case "highLowComp":
//       sortedGames.sort((a, b) => ((a.gameDetails && b.gameDetails && (a.gameDetails.complexity < b.gameDetails.complexity)) ? 1 : -1));
//       return sortedGames;
//     case "shortestTimes":
//       sortedGames.sort((a, b) => (((a.gameDetails && b.gameDetails) && a.gameDetails.maxPlayTime > b.gameDetails.maxPlayTime) ? 1 : -1));
//       return sortedGames;
//     case "longestTimes":
//       sortedGames.sort((a, b) => (((a.gameDetails && b.gameDetails) && a.gameDetails.maxPlayTime < b.gameDetails.maxPlayTime) ? 1 : -1));
//       return sortedGames;
//     case "newest":
//       sortedGames.sort((a, b) => (((a.year && b.year) && a.year < b.year) ? 1 : -1));
//       return sortedGames;
//     case "oldest":
//       sortedGames.sort((a, b) => (((a.year && b.year) && a.year > b.year) ? 1 : -1));
//       return sortedGames;
//     case "recentlyAdded":
//       sortedGames.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
//       return sortedGames;
//     default:
//       return sortedGames;
//   }
// }

// function filterRange(lowerBound: number, upperBound: number, min?: number, max?: number): boolean {
//   if (!min && min !== 0 && !max && max !== 0) {
//     return true;
//   }

//   if ((min || min === 0) && !max && max !== 0) {
//     return min >= lowerBound && min <= upperBound;
//   }

//   if ((max || max === 0) && !min && min !== 0) {
//     return max >= lowerBound && max <= upperBound;
//   }

//   if ((min || min === 0) && (max || max === 0) && (
//     (lowerBound <= min && upperBound >= min)
//     || (lowerBound >= min && upperBound <= max)
//     || (lowerBound <= max && upperBound >= max)
//   )) {
//     return true;
//   }

//   return false;
// }

// function filterGames(filters: LibraryGameFilters, games: LibraryGame[]): LibraryGame[] {
//   let filteredGames = [...games];

//   // Name Contains Filter
//   if (filters.name) {
//     filteredGames = filteredGames.filter((game) => (
//       game.name.toLowerCase().includes(filters.name?.toLowerCase() || "")
//     ));
//   }

//   // Minimum Age Filter
//   if ((filters.minAge || filters.minAge === 0) && (filters.maxAge || filters.maxAge === 0)) {
//     filteredGames = filteredGames.filter((game) => (
//       (game.gameDetails?.minAge && (filters.minAge || filters.minAge === 0) && (filters.maxAge || filters.maxAge === 0))
//         ? (game.gameDetails.minAge <= filters.maxAge && game.gameDetails.minAge >= filters.minAge)
//         : true
//     ));
//   }

//   // Player Count Filter
//   if ((filters.minPlayers || filters.minPlayers === 0) && (filters.maxPlayers || filters.maxPlayers === 0)) {
//     const lowerBound = filters.minPlayers;
//     const upperBound = filters.maxPlayers;

//     filteredGames = filteredGames.filter((game) => {
//       const min = game.gameDetails?.minPlayers;
//       const max = game.gameDetails?.maxPlayers;
//       return filterRange(lowerBound, upperBound, min, max);
//     });
//   }

//   // Play Time Filter
//   if ((filters.minPlayTime || filters.minPlayTime === 0) && (filters.maxPlayTime || filters.maxPlayTime === 0)) {
//     const lowerBound = filters.minPlayTime * 30;
//     const upperBound = filters.maxPlayTime * 30;

//     filteredGames = filteredGames.filter((game) => {
//       const min = game.gameDetails?.minPlayTime;
//       const max = game.gameDetails?.maxPlayTime;
//       return filterRange(lowerBound, upperBound, min, max);
//     });
//   }

//   // Complexity Filter
//   if (filters.complexityRange && filters.complexityRange.length === 2) {
//     const lowerBound = filters.complexityRange[0];
//     const upperBound = filters.complexityRange[1];

//     filteredGames = filteredGames.filter((game) => {
//       const complexity = game.gameDetails?.complexity;
//       return (complexity && complexity >= lowerBound && complexity <= upperBound) || !complexity;
//     });
//   }

//   // Expansion Filter
//   if (filters.excludeExpansions) {
//     filteredGames = filteredGames.filter((game) => (
//       game.gameDetails?.gameType !== "boardgameexpansion"
//     ));
//   }

//   if (filters.categoriesOrMechanics && filters.categoriesOrMechanics.length > 0) {
//     filters.categoriesOrMechanics.forEach((categoryOrMechanic) => {
//       filteredGames = filteredGames.filter((game) => {
//         if (!game.gameDetails?.categories && !game.gameDetails?.mechanics) {
//           return false;
//         }

//         if (game.gameDetails?.categories && game.gameDetails?.categories.some((cat) => cat === categoryOrMechanic)) {
//           return true;
//         }

//         if (game.gameDetails?.mechanics) {
//           return game.gameDetails?.mechanics.some((mech) => mech === categoryOrMechanic);
//         }

//         return false;
//       });
//     });
//   }

//   return filteredGames;
// }

/**
 * A helper function to filter and sort games
 */
// export function sortAndFilterGames(games: LibraryGame[], sort?: string, filters?: LibraryGameFilters): LibraryGame[] {
//   let sortedAndFilteredGames = [...games];

//   if (filters) {
//     sortedAndFilteredGames = filterGames(filters, sortedAndFilteredGames);
//   }

//   if (sort) {
//     sortedAndFilteredGames = sortGames(sort, sortedAndFilteredGames);
//   }
//   return sortedAndFilteredGames;
// }

/**
 * A helper function to get the number of filters currently being applied
 */
export function getFilterCount(filters: LibraryGameFilters): number {
  let filterCount = 0;

  if (filters?.name) {
    filterCount += 1;
  }

  if (filters?.excludeExpansions) {
    filterCount += 1;
  }

  if (filters?.categoriesOrMechanics && filters.categoriesOrMechanics.length > 0) {
    filterCount += 1;
  }

  const hasMinComplexityFilter = filters?.complexityRange && filters?.complexityRange?.[0] !== 0;
  const hasMaxComplexityFilter = filters?.complexityRange && filters?.complexityRange?.[1] !== 5;

  if (hasMinComplexityFilter || hasMaxComplexityFilter) {
    filterCount += 1;
  }

  const hasMinPlayersFilter = filters?.minPlayers && filters?.minPlayers !== 1;
  const hasMaxPlayersFilter = filters?.maxPlayers && filters?.maxPlayers !== 7;

  if (hasMinPlayersFilter || hasMaxPlayersFilter) {
    filterCount += 1;
  }

  const hasMinPlayTimeFilter = filters?.minPlayTime && filters?.minPlayTime !== 0;
  const hasMaxPlayTimeFilter = filters?.maxPlayTime && filters?.maxPlayTime !== 8;

  if (hasMinPlayTimeFilter || hasMaxPlayTimeFilter) {
    filterCount += 1;
  }

  const hasMinAgeFilter = filters?.minAge && filters?.minAge !== 0;
  const hasMaxAgeFilter = filters?.maxAge && filters?.maxAge !== 21;

  if (hasMinAgeFilter || hasMaxAgeFilter) {
    filterCount += 1;
  }

  return filterCount;
}
