import { BASE_URL } from '@/config';
import type { Genre, ShowResponse, ShowListItemResponse } from '@/types/Show';
import { useFetch } from '@/views/hooks/useFetch';

export const getShowsByGenre = async (genre: Genre) => {
  const { data, error, loading } = await useFetch<ShowListItemResponse[]>(`${BASE_URL}/schedule`);

  let filteredShows: ShowListItemResponse[] = [];

  if (data.value) {
    filteredShows = data.value.filter((show) => {
      return show?.show?.genres?.includes(genre);
    });
  }
  return { data: filteredShows, error, loading: loading.value };
};

export const getShowById = async (id: string) => {
  const { data, error, loading } = await useFetch<ShowResponse>(`${BASE_URL}/shows/${id}`);

  return { data: data.value, error, loading: loading.value };
};

export const findShowByQuery = async (query: string) => {
  const { data, error, loading } = await useFetch<ShowResponse>(
    `${BASE_URL}/singlesearch/shows?q=${query}`
  );

  return { data: data.value, error, loading: loading.value };
};
