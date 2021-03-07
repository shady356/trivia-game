<template>
  <div>
    <h1>The game</h1>
    <div v-if="questions !== null">
      <GameCard
        :data="questions[1]"
      />
    </div>
  </div>
</template>

<script>
import triviaAPI from "@/service/triviaAPI.js";
import GameCard from "@/components/game/GameCard.vue"
export default {
  name: "Game",
  components: {
    GameCard
  },
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

      const response = await triviaAPI.getQuiz(
        numberOfQuestions,
        category,
        difficulty,
        type
      );
      this.questions = response.data.results;
      console.log(response);

      if (response.error) {
        console.log("error"); // TODO: replace with toast
      }
    }
  }
};
</script>
