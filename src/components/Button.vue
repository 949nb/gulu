<template>
<!-- 有三种 colorType [ 'success', 'danger', 'warning' ] -->
<!-- iconType ['loading', 'setting', 'good', 'download', 'left', 'right'] -->
<!-- iconPosition ['left', 'right']-->
  <button class="g-button" :class="buttonClass" @click="clickMe">
    <g-icon
      v-show="!loadingShow"
      v-if="iconType"
      :icon-type="iconType"
    ></g-icon>
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
      default: '',
    },
    colorType: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: 'left',
      // validator(value) {
      //   return ['left', 'right'].indexOf(value) >= 0;
      // },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      load: this.loading,
      loadingShow: this.iconType === 'loading',
      buttonClass: {
        [this.colorType]: true,
        [`icon-${this.iconPosition}`]: true,
        iconLoading: this.iconType === 'loading',
      },
    };
  },
  methods: {
    clickMe() {
      if (this.iconType === 'loading') {
        this.loadingShow = !this.loadingShow;
      }
    },
  },
};

</script>

<style lang="scss" scope>
.g-button {
  border-radius: 3px;
  padding: 0 .8em;
  font-size: 16px;
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:focus {
    outline: none;
  }
  &.success {
    background-color: #98C479;
    color: white;
  }
  &.warning {
    background-color: #E4C17B;
  }
  &.danger {
    background-color: #DF6C75;
    color: white;
  }
  &.icon-left {
    > .icon {
      order: 0;
      margin-right: 5px;
    }
  }
  &.icon-right {
    > .icon {
      order: 1;
      margin-left: 5px;
    }
  }
  &.iconLoading {
    > .icon {
      animation: .8s spin linear infinite;
    }
  }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.isLoading {
  animation: .8s spin linear infinite;
}
</style>
