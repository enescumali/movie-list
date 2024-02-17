import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ShowCard from '../ShowCard.vue';
import { showDetail } from './__mocks__/show';

describe('ShowCard', () => {
  it('renders properly', () => {
    const wrapper = mount(ShowCard, { props: { show: showDetail } });

    expect(wrapper.get('h2').text()).toBe(showDetail.name);
    expect(wrapper.get('img').attributes('src')).toBe(showDetail.image.medium);

    const summary = wrapper.find('.show-summary p');
    expect(summary.html()).toBe(showDetail.summary);

    expect(wrapper.text()).toContain(`S.${showDetail.season} - ${showDetail.episodeName}`);
    expect(wrapper.text()).toContain(showDetail.rating.average);
  });
});
