import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ShowDetailTemplate from '../Show/ShowDetailTemplate.vue';
import { showDetail } from './__mocks__/show';

describe('ShowDetailTemplate', () => {
  it('renders properly', () => {
    const wrapper = mount(ShowDetailTemplate, { props: { show: showDetail } });

    expect(wrapper.get('h1').text()).toBe(showDetail.name);
    expect(wrapper.get('img').attributes('src')).toBe(showDetail.image.medium);

    expect(wrapper.findAll('.genre-container').length).toBe(showDetail.genres.length);
    expect(wrapper.find('.network-name').text()).toBe(showDetail.network.name);

    const summary = wrapper.find('.show-summary p');
    expect(summary.html()).toBe(showDetail.summary);
  });
});
