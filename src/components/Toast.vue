<template>
    <div class="toast" ref="wrapper">
      <slot v-if="!isHTML"></slot>
      <div v-else v-html="$slots.default[0]" style="max-width: 150px"></div>
      <span class="line" ref="line"></span>
      <span
        v-if="closeButton.text"
        class="toastCloseButton"
        @click="closeButtonClick"
      >
        {{closeButton.text}}
      </span>
    </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: () => {},
        };
      },
    },
    isHTML: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`;
    }, 500);
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
    closeButtonClick() {
      this.close();
      if (this.closeButton && this.closeButton.callback && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback();
      }
    },
  },
};
</script>

<style lang="scss">
  .toast {
    min-height: 38px;
    margin-bottom: 10px;
    /*width: 140px;*/
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
    padding: 0 16px;
    & > .toastCloseButton {
      cursor: pointer;
      margin-left: 16px;
      flex-shrink: 0;
    }
  }
  .line {
    border-left: 1px solid white;
    height: 100%;
    margin-left: 16px;
  }
</style>
