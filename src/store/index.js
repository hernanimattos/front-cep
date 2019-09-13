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
        noResult: null,
      },
      mutations: {
        setDataFromCepSearch(state, data) {
          state.dataFromCepSearch = data;
        },
        setNoResult(state, data) {
          state.noResult = data;
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
            const { cep: cepValue } = cep;

            commit('setNoResult', !cepValue);
            commit('setDataFromCepSearch', { ...cep });
          });
        },
      },
    },
  },
});
