import { BASE_URL } from '@/config';
import type { Genre, Show, ShowListGroups, ShowListItem } from '@/types/Show';
import { getShowListGroupsByGenres } from '@/utils/getShowListGroupsByGenres';
import { useFetch } from '@/hooks/useFetch';

export const getShowsByGenre = async (genres: Genre[], country: string) => {
  const { data, error, loading } = await useFetch<ShowListItem[]>(
    `${BASE_URL}/schedule?country=${country}`
  );

  let showListGroups: ShowListGroups[] = [];

  if (data.value) {
    showListGroups = await getShowListGroupsByGenres(data.value, genres);
  }

  return { data: showListGroups, error, loading: loading.value };
};

export const getShowById = async (id: string) => {
  const { data, error, loading } = await useFetch<Show>(`${BASE_URL}/shows/${id}?embed=cast`);

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
