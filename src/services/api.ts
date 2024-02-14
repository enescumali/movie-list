import { BASE_URL } from '@/config';
import type { Genre, Show } from '@/types/Show';
import { useFetch } from '@/views/hooks/useFetch';

export const getShowsByGenre = async (genre: Genre) => {
  const { data, error, loading } = await useFetch<Show[]>(`${BASE_URL}/schedule`);

  let filteredShows: Show[] = [];

  if (data.value) {
    filteredShows = data.value.filter((show) => {
      return show?.show?.genres?.includes(genre);
    });
  }
  return { data: filteredShows, error, loading };
};

export const getShowById = async (id: string) => {
  const { data, error, loading } = await useFetch<Show>(`${BASE_URL}/shows/${id}`);

  return { data: data.value, error, loading };
};
