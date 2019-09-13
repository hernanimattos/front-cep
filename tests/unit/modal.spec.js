import { shallowMount } from '@vue/test-utils';
import modal from '@/components/modal.vue';

describe('error.vue', () => {
  it('renders props.errorMessage when passed', () => {
    const errorMessage = 'new message';

    const wrapper = shallowMount(error, {
      propsData: {
        errorMessage,

       },
    });
    expect(wrapper.text()).toMatch(errorMessage);
  });
});
