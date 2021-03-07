<template>
  <div>
    <ul>
      <BaseListItem
        v-for="category in categories"
        :key="category.value"
        tag="li"
        @click.native="setCurrentCategory(category)"
      >
        {{ category.name }}
      </BaseListItem>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { $getCategories } from "@/helpers/triviaData.js";
import BaseListItem from "@/components/base/BaseListItem.vue";
export default {
  name: "CategoryList",
  components: {
    BaseListItem
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
