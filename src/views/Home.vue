<template>
  <div class="home">
    <h1 class="game-title">Trivia game</h1>
    <router-link to="map">
      <BaseButton>
        START
      </BaseButton>
    </router-link>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "Home",
  components: {
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;

  .game-title {
    padding: $xxl 0;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 4px 4px #09c;
  }
}
</style>
