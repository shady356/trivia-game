<template>
  <button class="button" @click="click()">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background: #fff;
  padding: $m $xl;
  color: #2be;
  border-radius: 50px 15% / 50% 40px;
  border: 6px solid #2299ee60;
  font-size: 28px;
  font-weight: 700;
}
</style>
