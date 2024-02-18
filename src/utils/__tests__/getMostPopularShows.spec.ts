import { describe, it, expect } from 'vitest';
import { getMostPopularShows } from '../getMostPopularShows';
import { showList } from '@/components/__tests__/__mocks__/show';

describe('getMostPopularShows', () => {
  it('groups shows by genre', () => {
    const showsByPopularity = getMostPopularShows(showList);

    expect(showsByPopularity[0].ranking).toBe(1);
    expect(showsByPopularity[1].ranking).toBe(2);
    expect(showsByPopularity[2].ranking).toBe(3);

    const firstShowRating = Number(showsByPopularity[0].show.rating.average);
    const secondShowRating = Number(showsByPopularity[1].show.rating.average);
    const thirdShowRating = Number(showsByPopularity[2].show.rating.average);

    expect(firstShowRating).toBeGreaterThan(secondShowRating);
    expect(secondShowRating).toBeGreaterThan(thirdShowRating);
  });
});
