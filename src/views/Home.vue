<template>
  <div class="home">
    <CategoryList />
  </div>
</template>

<script>
import triviaAPI from "@/service/triviaAPI.js";
import CategoryList from "@/components/categories/CategoriesList.vue";
export default {
  name: "Home",
  components: {
    CategoryList
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
