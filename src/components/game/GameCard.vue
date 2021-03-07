<template>
  <div class="game-card">
    <h6>{{ data.category }}</h6>
    <h3>{{ data.question }}</h3>
    <div class="option-list">
      <div v-if="isMultiple">
        <BaseButton
          v-for="option in multipleChoiceOptions"
          :key="option"
          class="option"
        >
          {{ option }}
        </BaseButton>
      </div>
      <div v-else>
        <BaseButton class="option">
          False
        </BaseButton>
        <BaseButton class="option">
          True
        </BaseButton>
      </div>
    </div>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "GameCard",
  components: {
    BaseButton
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      multipleChoiceOptions: null
    };
  },
  computed: {
    isMultiple() {
      return this.data.type === "multiple";
    }
  },
  mounted() {
    if (this.isMultiple) {
      this.multipleChoiceOptions = this.getMultipleChoiceOptions();
    }
  },
  methods: {
    getMultipleChoiceOptions() {
      let options = this.data.incorrect_answers;
      options.push(this.data.correct_answer);
      return options;
    }
  }
};
</script>

<style lang="scss" scoped>
.game-card {
  background: rgb(9, 49, 59);
  color: #fff;
  letter-spacing: 1px;
  text-align: center;
  font-weight: normal;

  .option-list {
    padding: $l;
    display: flex;
    justify-content: center;
    align-items: center;

    .option {
      margin: 1% 0;
      width: 100%;
    }
  }
}
</style>
