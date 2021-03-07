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
// import triviaAPI from "@/service/triviaAPI.js";
// 

import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "Home",
  components: {
    BaseButton
  },
  mounted() {
    // this.getQuiz();
  },
  methods: {
    /* async getQuiz() {
      let response = await triviaAPI.getQuiz(10, 18, "medium", "boolean");
      console.log(response);

      if (response.error) {
        console.log("error"); // TODO: replace with toast
      }
    } */
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
