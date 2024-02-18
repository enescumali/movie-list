import type { ShowListItem } from '@/types/Show';

export const getMostPopularShows = (data: ShowListItem[]): ShowListItem[] => {
  const mostPopularShows = data
    .sort((a, b) => {
      return Number(b?.show?.rating?.average) - Number(a?.show?.rating?.average);
    })
    .map((showListItem, index) => {
      return {
        ...showListItem,
        ranking: index + 1
      };
    })
    .slice(0, 5); // for now only show 5 shows;

  return mostPopularShows;
};
