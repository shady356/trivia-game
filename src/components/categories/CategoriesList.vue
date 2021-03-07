<template>
  <div>
    <ul>
      <CategoryItem
        v-for="category in categories"
        :key="category.value"
        tag="li"
        @click.native="setCurrentCategory(category)"
      >
        {{ category.name }}
      </CategoryItem>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  },
  methods: {
    ...mapActions(["commitCurrentCategory"]),
    setCurrentCategory(category) {
      this.commitCurrentCategory(category.value)
    }
  }
};
</script>
