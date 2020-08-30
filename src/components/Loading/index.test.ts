import { shallowMount } from '@vue/test-utils';
import Loading from './index';

describe('Loading', () => {
  test('render correctly', () => {
    const wrapper = shallowMount(Loading);
    expect(wrapper.findAll('.loading > div').length).toBe(3);
  });
});