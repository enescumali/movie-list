import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ShowList from '../ShowList.vue';
import { showList } from './__mocks__/show';

describe('ShowList', () => {
  it('renders properly', () => {
    const wrapper = mount(ShowList, { props: { shows: showList } });

    const showCards = wrapper.findAll('.show-card-container');

    expect(showCards.length).toBe(showList.length);

    // check if season and episode name are injected/rendered properly
    expect(showCards[0].text()).toContain(`S.${showList[0].season} - ${showList[0].name}`);
  });
});
