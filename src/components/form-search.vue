<template>
  <div class="form-search" >
    <form class="card" @submit.prevent="formValidate($data)">
      <div class="wrapper-input">
        <the-mask
          mask="#####-###"
          type="search"
          name="search"
          v-model="cep"
        />
        <input
          class="btn"
          type="submit"
          value="buscar"
        />

        <error :error="error"/>

      </div>
    </form>
    <display-data
      class="card"
      :cep-information="dataFromCepSearch"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import displayData from './display-data.vue';
import error from './error.vue';

const { mapState, mapActions } = createNamespacedHelpers('search');

export default {
  name: 'form-search',
  data() {
    return {
      cep: null,
      error: {},
    };
  },
  computed: {
    ...mapState([
      'dataFromCepSearch',
    ]),
  },
  methods: {
    ...mapActions([
      'getCepSearch',
    ]),
    formValidate(data) {
      if (!this.cep || this.cep.length < 8) {
        this.error = {
          message: '* O cep precisa ter pelo menos 9 caracteres',
        };
        return false;
      }
      this.error = {};
      this.getCepSearch(data);
      return true;
    },
  },
  components: {
    displayData,
    error,
  },
};
</script>

<style>

</style>
