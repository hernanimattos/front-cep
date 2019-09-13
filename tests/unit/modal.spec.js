import { shallowMount } from '@vue/test-utils';
import modal from '@/components/modal.vue';
import error from '@/components/error.vue';

describe('modal.vue', () => {
  let wrapper;
  let vm;
  beforeEach(() => {
    wrapper = shallowMount(modal, {
      propsData: {
        showData: true,
        modalTitle: 'headerTitle',
      },
    });
    vm = wrapper.vm; // eslint-disable-line
    vm.$emit = jest.fn();
  });

  it('renders props.errorMessage when passed', () => {
    expect(wrapper.find('p').text()).toBe('headerTitle');
  });

  it('renders props.showData when passed true', () => {
    expect(wrapper.find('section').classes()).toContain('active');
  });

  it('renders props.showData when passed false', () => {
    wrapper.setProps({
      showData: false,
    });
    expect(wrapper.find('section').classes()).not.toContain('active');
  });

  it('check if use error', () => {
    expect(wrapper.contains(error)).toBeTruthy();
  });

  it('teste close event emit', () => {
    vm.close = jest.fn();
    wrapper.find('section.wrapper-modal').trigger('click');
    expect(vm.close).toBeCalled();
  });
});
