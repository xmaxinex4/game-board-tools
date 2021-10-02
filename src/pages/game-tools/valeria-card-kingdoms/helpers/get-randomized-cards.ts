import {
  ValeriaCardKingdomsCardBuckets,
  ValeriaCardKingdomsCard,
  ValeriaCardKingdomsSetFilters,
  ValeriaCardKingdomsCardBucketKeys,
} from "../data";

// Fisher-Yates shuffle via https://bost.ocks.org/mike/shuffle/
function shuffle(array: ValeriaCardKingdomsCard[]) {
  const shuffledArray = array;

  let m = shuffledArray.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m);
    m -= 1;

    // And swap it with the current element.
    t = shuffledArray[m];
    shuffledArray[m] = shuffledArray[i];
    shuffledArray[i] = t;
  }

  return array;
}

export function getRandomizedCards(filters: ValeriaCardKingdomsSetFilters) {
  const cards: ValeriaCardKingdomsCard[] = [];

  const shuffledMonsters: ValeriaCardKingdomsCard[] = shuffle(ValeriaCardKingdomsCardBuckets.MONSTER.filter(
    (card) => filters[card.set],
  ));

  shuffledMonsters
    .slice(0, 5)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .forEach((card) => cards.push(card));

  ValeriaCardKingdomsCardBucketKeys.forEach((key) => {
    if (key !== "MONSTER") {
      const list: ValeriaCardKingdomsCard[] = ValeriaCardKingdomsCardBuckets[key].filter((card) => filters[card.set]);
      if (list?.length) {
        cards.push(list[Math.floor(Math.random() * list.length)]);
      }
    }
  });

  return cards;
}
