<template>
  <div class="home">
    <ul>
      <li v-for="category in categories" :key="category.value">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import triviaAPI from "@/service/triviaAPI.js";
import { $getCategories } from "@/helpers/triviaData.js";
export default {
  name: "Home",
  data() {
    return {
      categories: $getCategories()
    };
  },
  mounted() {
    // this.getQuiz();
  },
  methods: {
    async getQuiz() {
      let response = await triviaAPI.getQuiz(10, 18, "medium", "boolean");
      console.log(response);

      if (response.error) {
        console.log("error"); // TODO: replace with toast
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: $xl;
  background: cyan;
}
</style>
