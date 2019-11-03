<template>
    <div class="toast">
      <slot></slot>
      <span v-if="closeButton" class="toastCloseButton">| {{closeButton.text}}</span>
    </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: false,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: (toast) => {
            toast.close();
          },
        };
      },
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, 2000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
  },
};
</script>

<style lang="scss">
  .toast {
    height: 30px;
    margin-bottom: 10px;
    width: 100px;
    border-radius: 5px;
    background-color: #333639;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 3px 0 grey;
    font-size: 12px;
    & > .toastCloseButton {
      cursor: pointer;
    }
  }
</style>
