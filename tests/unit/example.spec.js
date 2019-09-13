import { shallowMount } from '@vue/test-utils';
import error from '@/components/error.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const errorMesssa = 'new message';
    const wrapper = shallowMount(error, {
      propsData: { error },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
