import {mount} from '@vue/test-utils'

import Component from '../src/component.vue';

describe('datepicker component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      attachToDocument: true,
      propsData: {
        modelValue: new Date()
      }
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  // test('opens datepicker when focus', () => {
  //   wrapper.trigger('focus');
  //   expect(wrapper.vm.$el.nextElementSibling.classList.contains('bootstrap-datetimepicker-widget')).toBe(true);
  // });

  test('renders input field', () => {
    expect(wrapper.element.nodeName.toLowerCase()).toBe('input');
  });

  test('clean up on unmount', () => {
    wrapper.unmount();
    expect(wrapper.vm.dp).toBe(null);
  });

});
