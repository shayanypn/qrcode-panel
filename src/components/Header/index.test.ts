import { shallowMount } from '@vue/test-utils';
import Header from './index';
import i18n from '../../i18n';

describe('Header', () => {
  const $tc = () => {}

  test('should render title', () => {
    const title = 'custom title';
    const wrapper = shallowMount(Header, {
      propsData: { title },
      i18n
    });
    expect(wrapper.find('h1').text()).toMatch(title);
  });

  test('edit button should work', async () => {
    const title = 'custom title';
    const wrapper = shallowMount(Header, {
      propsData: { title },
      i18n
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
      propsData: { title },
      i18n
    });
    await wrapper.find('.box-title .btn').trigger('click');

    const textInput = wrapper.find('.box-title input');
    await textInput.setValue(new_title);
    await wrapper.find('.box-title .btn').trigger('click');

    expect(wrapper.find('.box-title h1').text()).toMatch(new_title);
  });

  test('updating title should work', async () => {
    const title = 'custom title';
    const wrapper = shallowMount(Header, {
      propsData: { title },
      i18n
    });
    await wrapper.find('#lng-de').trigger('click');
    expect(wrapper.find('#a-account').text()).toMatch('Konto');

    await wrapper.find('#lng-en').trigger('click');
    expect(wrapper.find('#a-account').text()).toMatch('Account');
  });
});