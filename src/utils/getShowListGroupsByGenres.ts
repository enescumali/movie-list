import {
  Genres,
  type Genre,
  type ShowListGroups,
  type ShowListItem,
  type ShowListItemsByGenres
} from '@/types/Show';
import { getMostPopularShows } from './getMostPopularShows';

export const getShowListGroupsByGenres = (data: ShowListItem[], genres: Genre[]) => {
  const showListItemsByGenres: ShowListItemsByGenres = {};
  const showListGroups: ShowListGroups[] = [];

  data.map((show) => {
    const foundGenre = show?.show?.genres?.find((genre) => genres.includes(genre));
    if (foundGenre) {
      showListItemsByGenres[foundGenre] = showListItemsByGenres[foundGenre] || [];
      showListItemsByGenres[foundGenre]?.push(show);
    }
  });

  Object.keys(showListItemsByGenres).map((genre) => {
    const showListByGenre = {
      genre,
      items: showListItemsByGenres[genre as keyof ShowListItemsByGenres]
    } as ShowListGroups;

    showListGroups.push(showListByGenre);
  });

  const mostPopularShows = getMostPopularShows(data);

  showListGroups.unshift({
    genre: Genres.MostPopular,
    items: mostPopularShows
  });

  return showListGroups;
};
