import { shallowMount } from "@vue/test-utils";
import Header from "./index";

describe('Header', () => {
  test('render title', () => {
    const title = 'custom title';
    const wrapper = shallowMount(Header, {
      propsData: { title }
    });
    expect(wrapper.find('h1').text()).toMatch(title);
  });

  test('edit button should work', async () => {
    const title = 'custom title';
    const wrapper = shallowMount(Header, {
      propsData: { title }
    });
    expect(wrapper.find('.box-title h1').isVisible()).toBe(true);
    expect(wrapper.find('.box-title input').isVisible()).toBe(false);

	await wrapper.find('.box-title .btn').trigger('click');

    expect(wrapper.find('.box-title  h1').isVisible()).toBe(false);
    expect(wrapper.find('.box-title  input').isVisible()).toBe(true);
  });

  test('updating title should work', async () => {
    const title = 'custom title';
    const new_title = 'new title';
    const wrapper = shallowMount(Header, {
      propsData: { title }
    });
	await wrapper.find('.box-title .btn').trigger('click');

	const textInput = wrapper.find('.box-title input');
	await textInput.setValue(new_title);
	await wrapper.find('.box-title .btn').trigger('click');

    expect(wrapper.find('.box-title h1').text()).toMatch(new_title);
  });
});