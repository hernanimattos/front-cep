import Vue from 'vue';
import Vuex from 'vuex';
import gql from 'graphql-tag';
import ApolloClient from '../graphql/apolloClient';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search: {
      namespaced: true,
      state: {
        dataFromCepSearch: {},
      },
      mutations: {
        setDataFromCepSearch(state, data) {
          state.dataFromCepSearch = data;
        },
      },
      actions: {
        getCepSearch({ commit }, params) {
          const {
            cep: cepNumberTosearch,
          } = params;
          ApolloClient.query({
            query: gql`
            query($cep:String){
                cep(cep:$cep){
                  cep
                  logradouro
                  localidade
                  uf
                }
              }
            `,
            variables: { cep: cepNumberTosearch },
          }).then((res) => {
            const { data } = res;
            const { cep } = data;
            commit('setDataFromCepSearch', { ...cep });
          });
        },
      },
    },
  },
});
