<template>
  <div
    class="form-search" >
    <form
      class="card"
      @submit.prevent="formValidate($data)">
      <div
        class="wrapper-input">
        <the-mask
          mask="#####-###"
          type="search"
          name="search"
          v-model="cep"
        />
        <input
          class="btn"
          type="submit"
          value="Buscar CEP"
        />

      </div>
    </form>
    <display-data
      class="card"
      :cep-information="dataFromCepSearch"
    />
    <modal
      v-if="showModal"
      :show-data="showModal"
      :message="'Digite um CEP válido!'"
      @close="showModal = $event"
      :modal-title="'Erro'"/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import displayData from './display-data.vue';
import modal from './modal.vue';

const { mapState, mapActions } = createNamespacedHelpers('search');

export default {
  name: 'form-search',
  data() {
    return {
      cep: null,
      showModal: false,
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
      if (!this.cep || this.cep.length < 7) {
        this.showModal = true;
        return false;
      }
      this.showModal = false;
      this.getCepSearch(data);
      return true;
    },
  },
  components: {
    displayData,
    modal,
  },
};
</script>
