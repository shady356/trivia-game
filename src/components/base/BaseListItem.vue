<template>
  <div class="category-item">
    <h3>
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  name: "BaseListItem"
}
</script>

<style lang="scss" scoped>
.category-item {
  background: #ffffff;
  border-bottom: 2px solid #86afa1;
  border-radius: $m;
  color: #07682c;
  padding: $m $l;
  margin: $s;
}
</style>
