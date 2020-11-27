import Component from '../src/index';
import {mount} from '@vue/test-utils';

describe('datepicker global component', () => {

  test('works as plugin', () => {

    let app = {
      template: `<div id="app">
                  <date-picker name="date" class="date-picker" v-model="date" :config="config"></date-picker>
                 </div>`,
      data() {
        return {
          date: '10/10/2017',
          config: {
            format: 'DD/MM/YYYY'
          }
        }
      },
      components: {'date-picker': Component}
    };

    let wrapper = mount(app);

    let input = wrapper.findComponent(Component);
    expect(input.element.nodeName.toLowerCase()).toBe('input');
    expect(input.vm.$el.value).toBe('10/10/2017');
    expect(input.classes()).toContain('date-picker');
    expect(input.attributes('name')).toEqual('date');
  });

});
