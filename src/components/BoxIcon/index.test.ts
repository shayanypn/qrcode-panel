import { shallowMount } from "@vue/test-utils";
import BoxIcon from "./index";

describe('BoxIcon', () => {
  test('render title', () => {
    const title = 'custom title';
    const icon = 'cutom-icon-classname';
    const wrapper = shallowMount(BoxIcon, {
      propsData: { title, icon }
    });
    expect(wrapper.find('p').text()).toMatch(title);
    expect(wrapper.find('i').classes()).toContain(icon)
  });
});