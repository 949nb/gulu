<template>
  <div class="popover" ref="popover">
    <div ref='popContent' v-if="active" class="popoverInfo">
      <slot name="content"></slot>
    </div>
    <div ref='popBtn' @click="openPopover" class="popoverBtn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    openPopover(event) {
      if (this.$refs.popover.contains(event.target)) {
        if (this.active === false) {
          this.active = true;
          this.setPosition();
          if (this.active) {
            document.addEventListener('click', this.documentOnClick);
          }
        } else {
          this.active = false;
          document.removeEventListener('click', this.documentOnClick);
        }
      }
    },
    setPosition() {
      this.$nextTick(() => {
        document.body.appendChild(this.$refs.popContent);
        const { left, top } = this.$refs.popBtn.getBoundingClientRect();
        // 解决bug, getBoundingClientRect只能获取相对视窗的x y的距离
        this.$refs.popContent.style.left = `${left + window.scrollY}px`;
        this.$refs.popContent.style.top = `${top}px`;
      });
    },
    documentOnClick(e) {
      // eslint-disable-next-line no-empty
      if (this.$refs.popover && (this.$refs.popover.contains(e.target) || e.target === this.$refs.popover))
      { return; }
      this.active = false;
      document.removeEventListener('click', this.documentOnClick);
    },
  },
};
</script>

<style scoped lang="scss">
  .popover {
    border: 1px solid red;
    display: inline-block;
  }
  .popoverInfo {
      position: absolute;
      border: 1px solid;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.3);
      transform: translateY(-100%)
    }
</style>
