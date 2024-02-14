import type { Show } from '@/types/Show';
import { useFetch } from '@/views/hooks/useFetch';

export const getShowsByGenre = async (genre: string) => {
  const { data, error, loading } = await useFetch<Show[]>('https://api.tvmaze.com/schedule');

  if (data.value) {
    return data.value.filter((movie) => {
      return movie.genres.includes(genre);
    });
  }
  return { data, error, loading };
};
