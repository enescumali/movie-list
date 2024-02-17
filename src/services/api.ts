import { BASE_URL } from '@/config';
import type { Genre, Show, ShowListItem } from '@/types/Show';
import { useFetch } from '@/views/hooks/useFetch';

export const getShowsByGenre = async (genre: Genre, country: string) => {
  const { data, error, loading } = await useFetch<ShowListItem[]>(
    `${BASE_URL}/schedule?country=${country}`
  );

  let filteredShows: ShowListItem[] = [];

  if (data.value) {
    filteredShows = data.value.filter((show) => {
      return show?.show?.genres?.includes(genre);
    });
  }
  return { data: filteredShows, error, loading: loading.value };
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
