import {mount} from '@vue/test-utils'

import Component from '../src/component.vue';
import moment from 'moment';

describe('datepicker watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        modelValue: null,
        config: {}
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('updates value runtime', async () => {
    let date = moment();
    await wrapper.setProps({modelValue: date});
    expect(wrapper.vm.dp.date()).toEqual(date);
  });

  test('updates configs runtime', async () => {
    await wrapper.setProps({
      config: {
        showTodayButton: true
      }
    });
    expect(wrapper.vm.dp.options()).toHaveProperty('showTodayButton', true);
  });

});
