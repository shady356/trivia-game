import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCategory: 9,
    currentDifficulty: "medium",
    currentType: "multiple",
    currentNumberOfQuestions: 5
  },
  mutations: {
    setCurrentCategory(state, payload) {
      state.currentCategory = payload;
    },
    setCurrentDifficulty(state, payload) {
      state.currentDifficulty = payload;
    },
    setCurrentType(state, payload) {
      state.currentType = payload;
    },
    setCurrentNumberOfQuestions(state, payload) {
      state.currentNumberOfQuestions = payload;
    }
  },
  actions: {
    commitCurrentCategory(state, payload) {
      state.commit("setCurrentCategory", payload);
    },
    commitCurrentDifficulty(state, payload) {
      state.commit("setCurrentDifficulty", payload);
    },
    commitCurrentType(state, payload) {
      state.commit("setCurrentType", payload);
    },
    commitCurrentNumberOfQuestions(state, payload) {
      state.commit("setCurrentNumberOfQuestions", payload);
    }
  },
  modules: {}
});
