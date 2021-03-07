<template>
  <div>
    <BaseHeader>
      <template #title>
        Game
      </template>
    </BaseHeader>
    <div class="map">
      <ul class="level-list">
        <li v-for="level in levels" :key="level.id" class="level-item" @click="openGameModal(level)">
          {{ level.id }}
        </li>
      </ul>
    </div>
    <BaseModal v-if="isGameModalOpen" @close="closeGameModal">
      Category: {{ selectedLevel.category }} <br />
      Type: {{ selectedLevel.type }} 
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
export default {
  name: "Map",
  components: {
    BaseButton,
    BaseHeader,
    BaseModal
  },
  data () {
    return {
      isGameModalOpen: false,
      selectedLevel: {
        category: null,
        type: null
      },
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
    openGameModal(level) {
      this.isGameModalOpen = true
      this.selectedLevel.category = level.gameDetails.category
      this.selectedLevel.type = level.gameDetails.type
      console.log(level)
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

  .level-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .level-item {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      width: $xl;
      height: $xl;
      border-radius: 50%;
      font-size: 24px;

      &:nth-child(even) {
        align-self: flex-end;
      }
    }
  }
}
</style>
