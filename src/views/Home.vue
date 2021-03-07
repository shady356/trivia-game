<template>
  <div class="home">
    <BaseHeader>
      <template #title>
        Choose a category
      </template>
    </BaseHeader>
    <CategoryList />
  </div>
</template>

<script>
import triviaAPI from "@/service/triviaAPI.js";
import CategoryList from "@/components/categories/CategoriesList.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
export default {
  name: "Home",
  components: {
    CategoryList,
    BaseHeader
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
