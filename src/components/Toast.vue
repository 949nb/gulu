<template>
    <div :class="toastClass" class="toast" ref="wrapper">
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
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
      },
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
  computed: {
    toastClass() {
      return `position-${this.position}`;
    },
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit('close');
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
    transition: .3s;
    position: fixed;
    left: 50%;
    box-shadow: 0 0 3px 0 grey;
    font-size: 12px;
    padding: 0 16px;
    & > .toastCloseButton {
      cursor: pointer;
      margin-left: 16px;
      flex-shrink: 0;
    }
    &.position-top{
      top: 10px;
      transform: translateX(-50%);
      animation: .3s fade-top linear;
    }
    &.position-bottom {
      bottom: 10px;
      transform: translateX(-50%);
      animation: .3s fade-bottom linear;
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
      animation: .3s fade-middle linear;
    }
  }
  .line {
    border-left: 1px solid white;
    height: 100%;
    margin-left: 16px;
  }
  @keyframes fade-top{
    0% {top: 0; opacity: 0;}
    100% {top: 10px; opacity: 1;}
  }
  @keyframes fade-middle{
    0% {top: 48%; opacity: 0;}
    100% {top: 50%; opacity: 1;}
  }
  @keyframes fade-bottom{
    0% {bottom: -10px; opacity: 0;}
    100% {bottom: 10px; opacity: 1;}
  }
</style>
