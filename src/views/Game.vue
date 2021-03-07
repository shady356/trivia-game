<template>
  <div>
    <h1>The game</h1>
  </div>
</template>

<script>
import triviaAPI from "@/service/triviaAPI.js";
export default {
  name: "Game",
  data() {
    return {
      questions: null
    }
  },
  mounted() {
    this.getQuiz();
  },
  methods: {
    async getQuiz() {
      const numberOfQuestions = this.$store.state.currentNumberOfQuestions;
      const category = this.$store.state.currentCategory;
      const difficulty = this.$store.state.currentDifficulty;
      const type = this.$store.state.currentType;

      let response = await triviaAPI.getQuiz(
        numberOfQuestions,
        category,
        difficulty,
        type
      );
      console.log(response);

      if (response.error) {
        console.log("error"); // TODO: replace with toast
      }
    }
  }
};
</script>
