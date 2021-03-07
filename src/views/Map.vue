<template>
  <div>
    <BaseHeader>
      <template #title>
        Game
      </template>
    </BaseHeader>
    <div class="map">
      <CategoryList @selectCategory="openGameModal" />
    </div>
    <BaseModal v-if="isGameModalOpen" @close="closeGameModal">
      
      Category: {{selectedCategory.name}}
      <br />
      <br />
      <br />
      <br />
      <BaseButton>
        Play
      </BaseButton>
    </BaseModal>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseModal from "@/components/base/BaseModal.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import CategoryList from "@/components/categories/CategoriesList.vue";
export default {
  name: "Map",
  components: {
    BaseButton,
    BaseHeader,
    BaseModal,
    CategoryList
  },
  data () {
    return {
      isGameModalOpen: false,
      selectedCategory: null,
      levels: [
        {
          id: 1,
          gameDetails: {
            amount: 3,
            category: 18, 
            difficulty: "easy",
            type: "boolean"
          }
        },
        {
          id: 2,
          gameDetails: {
            amount: 3,
            category: 17, 
            difficulty: "easy",
            type: "boolean"
          }
        },
        {
          id: 3,
          gameDetails: {
            amount: 3,
            category: 15, 
            difficulty: "easy",
            type: "boolean"
          }
        }
      ]
    }
  },
  methods: {
    openGameModal(category) {
      this.isGameModalOpen = true
      this.selectedCategory = category
    },
    closeGameModal() {
      this.isGameModalOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  padding: $l;
}
</style>
