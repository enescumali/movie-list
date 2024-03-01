import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ShowListGroups from '../Show/ShowListGroups.vue';
import { showListGroups } from './__mocks__/show';

describe('ShowListGroups', () => {
  it('renders properly', () => {
    const wrapper = mount(ShowListGroups, { props: { groups: showListGroups }, global:{
      provide:{
        country: { value:'NL'}
      } }
    });

    const showListGroupContainers = wrapper.findAll('.show-list-group-container');

    expect(showListGroupContainers.length).toBe(showListGroups.length);

    const titles = wrapper.findAll('.show-list-genre-title');
    expect(titles[0].text()).toBe(showListGroups[0].genre);
    expect(titles[1].text()).toBe(showListGroups[1].genre);

    const firstShowListGroup = showListGroupContainers[0].findAll('.show-card-container');
    expect(firstShowListGroup.length).toBe(showListGroups[0].items.length);

    const secondShowListGroup = showListGroupContainers[1].findAll('.show-card-container');
    expect(secondShowListGroup.length).toBe(showListGroups[1].items.length);
  });
});
