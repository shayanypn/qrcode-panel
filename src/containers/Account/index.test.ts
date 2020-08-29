import { shallowMount } from '@vue/test-utils';
import Account from './index';
import Statics from '../../components/Statics'
import BoxIcon from '../../components/BoxIcon'

describe('Account', () => {
  test('render title', () => {
    const wrapper = shallowMount(Account);

    expect(wrapper.findAllComponents(Statics)).toHaveLength(4);
    expect(wrapper.findAllComponents(BoxIcon)).toHaveLength(5);
  });
});