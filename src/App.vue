<template>
  <div id="app">
    <div class="container">
      <formSearch/>
    </div>
  </div>
</template>

<script>
import formSearch from './components/form-search.vue';

export default {
  name: 'app',
  components: {
    formSearch,
  },
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
