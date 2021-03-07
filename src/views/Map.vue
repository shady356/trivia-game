<template>
  <div>
    <BaseHeader>
      <template #title>
        Game
      </template>
    </BaseHeader>
    <div class="map">
      <ul class="level-list">
        <li v-for="level in levels" :key="level.id" class="level-item">
          {{ level.id }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader.vue";
export default {
  name: "Map",
  components: {
    BaseHeader
  },
  data () {
    return {
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
