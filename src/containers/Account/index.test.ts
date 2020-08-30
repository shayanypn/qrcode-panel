import { shallowMount } from '@vue/test-utils';
import Account from './index';
import Header from '../../components/Header'
import Box from '../../components/Box'
import BoxIcon from '../../components/BoxIcon'
import Loading from "@/components/Loading";

describe('Account', () => {
  test('page should render correctly', () => {
    const wrapper = shallowMount(Account);

    expect(wrapper.find('h4').text()).toMatch('Information');
    expect(wrapper.findAll('h4').length).toBe(4);
    expect(wrapper.findAllComponents(Header)).toHaveLength(1);
    expect(wrapper.findAllComponents(Loading)).toHaveLength(1);
    expect(wrapper.findAllComponents(Box)).toHaveLength(8);
    expect(wrapper.findAllComponents(BoxIcon)).toHaveLength(5);
  });

  test('form should render correctly', () => {
    const wrapper = shallowMount(Account);
    const contact_form = wrapper.find('form.form-contact');

    expect(contact_form.findAll('[name="firstname"]').exists()).toBe(true);
    expect(contact_form.findAll('[name="lastname"]').exists()).toBe(true);
    expect(contact_form.findAll('[name="phonenumber"]').exists()).toBe(true);
    expect(contact_form.findAll('[name="company"]').exists()).toBe(true);
    expect(contact_form.findAll('[name="street"]').exists()).toBe(true);
    expect(contact_form.findAll('[name="city"]').exists()).toBe(true);
    expect(contact_form.findAll('[name="zipcode"]').exists()).toBe(true);
    expect(contact_form.findAll('[name="website"]').exists()).toBe(true);
  });
});