import { shallowMount } from '@vue/test-utils';
import Statics from './index';

describe('Statics', () => {
  test('render title', () => {
    const title = 'custom title';
    const face = 'custom-face-num';
    const classname = 'custom-class-name';
    const wrapper = shallowMount(Statics, {
      propsData: { title, face, classname },
      slots: {
        default: '<div class="fake-msg"></div>'
      }
    });
    expect(wrapper.find('p').text()).toMatch(title);
    expect(wrapper.find('strong').text()).toMatch(face);
    expect(wrapper.findAll('.fake-msg').length).toBe(1);
    expect(wrapper.find('.bx').classes()).toContain(classname)

  });
});