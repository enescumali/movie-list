import { describe, it, expect } from 'vitest';
import { getShowListGroupsByGenres } from '../getShowListGroupsByGenres';
import { showList } from '@/components/__tests__/__mocks__/show';
import { Genres } from '@/config';

describe('getShowListGroupsByGenres', () => {
  it('groups shows by genre', () => {
    const showListItems = [showList[0], showList[1]];
    const genre = Object.values(Genres);

    const showListGroups = getShowListGroupsByGenres(showListItems, genre);

    expect(showListGroups[0].genre).toBe('Most Popular');
    expect(showListGroups[0].items[0].name).toEqual(showListItems[0].name);

    expect(showListGroups[1].genre).toBe('Family');
    expect(showListGroups[1].items[0].name).toEqual(showListItems[0].name);

    expect(showListGroups[2].genre).toBe('Fantasy');
    expect(showListGroups[2].items[0].name).toEqual(showListItems[1].name);
  });
});
