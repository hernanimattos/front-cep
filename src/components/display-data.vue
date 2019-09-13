<template>
    <div
      class="list-item" v-if="cepInformation && cepInformation.cep">
      <p>
        <strong>CEP:</strong>
        {{cepInformation.cep}}
      </p>
      <p>
        <strong>Estado:</strong>
        {{cepInformation.uf}}
      </p>
      <p>
        <strong>Cidade:</strong>
        {{cepInformation.localidade}}
      </p>
      <p>
        <strong>Logradouro:</strong>
        {{cepInformation.logradouro}}
      </p>
    </div>
    <div v-else-if="noResult">
      <strong>Nehum resultado encontrado</strong>
    </div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('search');

export default {
  name: 'display-data',
  computed: {
    ...mapState([
      'noResult',
    ]),
  },
  props: {
    cepInformation: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  text-align: left;
}
</style>
