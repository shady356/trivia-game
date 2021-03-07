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
  padding: $m $l;
  color: #2be;
  border-radius: 50px 15% / 50% 40px;
  border: 4px solid #2299ee60;
  box-shadow: 0 2px 4px #0077cc60;
  letter-spacing: 1px;
  font-size: 28px;
  font-weight: 700;
}
</style>
