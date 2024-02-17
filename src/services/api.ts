import { BASE_URL } from '@/config';
import type { Genre, Show, ShowListItem, ShowListItemsByGenres } from '@/types/Show';
import { useFetch } from '@/views/hooks/useFetch';

export const getShowsByGenre = async (genres: Genre[], country: string) => {
  const { data, error, loading } = await useFetch<ShowListItem[]>(
    `${BASE_URL}/schedule?country=${country}`
  );

  const showListItems: ShowListItemsByGenres = {};

  if (data.value) {
    data.value.map((show) => {
      const foundGenre = show?.show?.genres?.find((genre) => genres.includes(genre));
      if (foundGenre) {
        showListItems[foundGenre] = showListItems[foundGenre] || [];
        showListItems[foundGenre].push(show);
      }
    });
  }
  console.log(showListItems);
  return { data: showListItems, error, loading: loading.value };
};

export const getShowById = async (id: string) => {
  const { data, error, loading } = await useFetch<Show>(`${BASE_URL}/shows/${id}`);

  return { data: data.value, error, loading: loading.value };
};

export const findShowByQuery = async (query: string) => {
  const { data, error, loading } = await useFetch<Show>(
    `${BASE_URL}/singlesearch/shows?q=${query}`
  );

  return { data: data.value, error, loading: loading.value };
};

export const getMostPopularShows = async (country: string = 'NL') => {
  const { data, error, loading } = await useFetch<ShowListItem[]>(
    `${BASE_URL}/schedule/?country=${country}`
  );

  let mostPopularShows: ShowListItem[] = [];

  if (data.value) {
    mostPopularShows = data.value.sort((a, b) => {
      return Number(b?.show?.rating?.average) - Number(a?.show?.rating?.average);
    });
  }

  return { data: mostPopularShows, error, loading: loading.value };
};
