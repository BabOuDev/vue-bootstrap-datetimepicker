import {mount} from '@vue/test-utils'

import Component from '../src/component.vue';
import moment from 'moment';

describe('datepicker props', () => {

  // Store for future usage
  const props = {
    modelValue: '10/11/2017',
    config: {
      format: 'DD/MM/YYYY'
    }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: props
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('accepts config via prop', () => {
    expect(wrapper.props('config')).toEqual(props.config);
    // dp is the datepicker instance
    expect(wrapper.vm.dp.options()).toHaveProperty('format', props.config.format);
  });

  test('accepts value via prop', () => {
    expect(wrapper.props('modelValue')).toBe(props.modelValue);
  });

  test('validates v-model', () => {
    let vModel = wrapper.vm.$options.props.modelValue;

    expect(vModel.validator(false)).toBe(false);
    expect(vModel.validator(undefined)).toBe(false);

    expect(vModel.validator(new Date())).toBe(true);
    expect(vModel.validator(null)).toBe(true);
    expect(vModel.validator('2017-12-12')).toBe(true);
    expect(vModel.validator(moment())).toBe(true);

  });

});
