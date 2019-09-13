import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import formSearch from '@/components/form-search.vue';
import modal from '@/components/modal.vue';

describe('formSearch.vue', () => {
  let wrapper;
  let vm;
  beforeEach(() => {
    const store = new Vuex.Store({
      modules: {
        search: {
          name: 'search',
          namespaced: true,
          state: {
            dataFromCepSearch: {},
          },
          actions: {
            getCepSearch: jest.fn(),
          },
          mutations: {
            setDataFromCepSearch: jest.fn(),
          },
        },
      },
    });

    wrapper = shallowMount(formSearch, {
      data() {
        return {
          showModal: false,
          cep: null,
        };
      },
      store,
    });
    vm = wrapper.vm; // eslint-disable-line
  });

  it('check submit form trigger submit', () => {
    vm.formValidate = jest.fn();
    wrapper.find('input.btn').trigger('submit');
    expect(vm.cep).toBe(null);
    expect(vm.formValidate).toHaveBeenCalled();
  });

  it('check execute formValidate with cep null', () => {
    vm.getCepSearch = jest.fn();
    const data = { cep: 'eee' };
    expect(vm.formValidate(data)).toBe(false);
    expect(vm.getCepSearch).not.toHaveBeenCalled();
  });

  it('check execute formValidate with cep treu', () => {
    vm.getCepSearch = jest.fn();
    vm.cep = '04438000';
    const data = { cep: 'eee' };
    expect(vm.formValidate(data)).toBe(true);
    expect(vm.getCepSearch).toHaveBeenCalledWith(data);
  });

  it('check if use modal', () => {
    expect(wrapper.contains(modal)).toBeTruthy();
  });
});
