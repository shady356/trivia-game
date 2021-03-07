<template>
  <div>
    <ul>
      <CategoryItem
        v-for="category in categories"
        :key="category.value"
        tag="li"
      >
        {{ category.name }}
      </CategoryItem>
    </ul>
  </div>
</template>

<script>
import { $getCategories } from "@/helpers/triviaData.js";
import CategoryItem from "@/components/categories/CategoryItem.vue";
export default {
  name: "CategoryList",
  components: {
    CategoryItem
  },
  data() {
    return {
      categories: $getCategories()
    };
  }
};
</script>
