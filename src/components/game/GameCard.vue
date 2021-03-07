<template>
  <div class="game-card">
    <h6>{{ data.category }}</h6>
    <h3>{{ data.question }}</h3>
    <div v-if="isMultiple">
      <BaseButton v-for="option in multipleChoiceOptions" :key="option">
        {{ option }}
      </BaseButton>
    </div>
    <div v-else>
      <BaseButton>
        False
      </BaseButton>
      <BaseButton>
        True
      </BaseButton>
    </div>
    <pre>{{ data }}</pre>
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
    }
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
}
</script>

<style lang="scss" scoped>
.game-card {
  background: #08a;
}
</style>
