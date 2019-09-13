<template>
  <div
    class="wrapper-error">
    <label
      class="error search-error"
      for="search"
    >{{ errorMessage }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    errorMessage: {
      type: String,
      required: true,
      default: 'Verifique o campo',
    },
  },
};
</script>
