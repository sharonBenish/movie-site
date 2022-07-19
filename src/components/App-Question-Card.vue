<template>
  <div id="question-card">
    <h3>Question {{index}}</h3>
    <p>{{question.question}}</p>
    <div class="options">
        <AppOptionsVue :question="question.question" :value="option" :index="index" v-for="(option, index) in questionOptions" :key="index" />
    </div>
  </div>
</template>

<script>
import AppOptionsVue from './App-Options.vue'

export default {
    components: {
        AppOptionsVue
    },
    props: {
        index: {
            default: 0,
            type: Number
        },
        question: {
            type: Object,
        }
    },
    computed: {
        questionOptions: function () {
            return [...this.question.incorrect_answers, this.question.correct_answer]
        }
    }
}
</script>

<style>

</style>