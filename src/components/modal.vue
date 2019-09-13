<template>
  <section class="wrapper-modal" :class="{ active: showData}" @click="close($event)">
    <div class="container-modal">
      <div class="modal">
        <header>
          <div class="modal-header__title">
            <p>{{ modalTitle }}</p>
          </div>
          <span class="close">X</span>
        </header>
        <article class="modal-content">
          <error :error-message="message" />
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import error from './error.vue';

export default {
  name: 'modal',
  props: {
    showData: {
      type: Boolean,
      required: true,
      default: false,
    },
    message: {
      type: String,
      required: false,
    },
    modalTitle: {
      type: String,
      required: false,
    },
  },
  methods: {
    close(e) {
      if (e.target.classList.contains('active') || e.target.classList.contains('close')) {
        this.$emit('close', !this.showData);
      }
    },
  },
  components: {
    error,
  },
};
</script>
