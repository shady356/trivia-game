<template>
  <div class="home">
    <h1>Hello</h1>
  </div>
</template>

<script>
import triviaAPI from "@/service/triviaAPI.js";
export default {
  name: "Home",
  mounted() {
    this.getQuiz();
  },
  methods: {
    async getQuiz() {
      let response = await triviaAPI.getQuiz(10, 18, "medium", "boolean");
      console.log(response)

      if (response.error) {
        console.log("error"); // TODO: replace with toast
      }
    }
  }
};
</script>
