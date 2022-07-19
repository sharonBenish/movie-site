<template>
  <div>
    <div v-for="(question, indx) in questions" :key="indx">
      <div v-if="currentQuestion === indx">
        <app-question-card :index="indx+1" :question="question" />
      </div>
    </div>
    <div class="buttons">
      <app-button-vue v-if="currentQuestion !== 0 " @clicked="goToPrev" :style="'Danger'" :value="'Prev'" />
      <app-button-vue v-if="currentQuestion !== questions.length-1" @clicked="goToNext" :style="'Success'" :value="'Next'" />
    </div>
  </div>
</template>

<script>
import AppQuestionCard from './components/App-Question-Card.vue'
import AppButtonVue from './components/App-Button.vue'
import Axios from 'axios'

export default {
  components: {
    AppQuestionCard,
    AppButtonVue
  },
  data () {
    return {
      questions: [],
      currentQuestion: 0
    }
  },
  methods: {
    goToNext: function () {
      this.currentQuestion = this.currentQuestion + 1
    },
    goToPrev: function () {
      this.currentQuestion = this.currentQuestion - 1
    },
    async loadQuestions() {
      const response = await Axios.get('https://opentdb.com/api.php?amount=10')
      return response.data
    }
  },
  mounted: async function () {
    const data = await this.loadQuestions()
    this.questions = data.results
  }
}
</script>

<style lang="scss">
  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>
