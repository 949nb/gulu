<template>
  <div class="warpper">
    <input
      :class="inputClass"
      :value="value"
      type="text"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <g-icon icon-type="error"></g-icon>
      <span class="errorInfo"> {{error}} </span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    error: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      inputClass: {
        error: this.error,
      },
      errorShow: false,
    };
  },
};
</script>

<style lang="scss">
  .warpper {
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {margin-right: .5em;}
    > input {
      margin-right: 8px;
      height: 36px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0px 6px;
      font-size: 14px;
      &:focus {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);
        outline: none;
        border: 1px solid #777;
      }
      &:hover {
        border: 1px solid #777;
      }
      &.error {
        &:focus {
          border: 1px solid red;
          box-shadow: inset 0px 1px 3px red;
        }
      }
      &[disabled] {
        border: 1px solid #ccc;
        color: #ccc;
        cursor: not-allowed;
      }
    }
    > .errorInfo {
      color: red;
      font-size: 12px;
    }
  }
</style>
