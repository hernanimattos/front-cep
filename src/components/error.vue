<template>
  <div class="wrapper-error" v-if="error && error.message">
    <label
      class="error search-error"
      for="search"
    >{{ error.message }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
