<template>
  <div id="question-card">
    <h3>Question {{ index+1 }}</h3>
    <p v-html="question.question"></p>
    <div class="options">
        <AppOptionsVue :isChecked="question.chosenAnswer === option" @chosen="atChosen" :question="question.question" :value="option" :index="index" v-for="(option, index) in questionOptions" :key="index" />
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
            return [...this.question.incorrect_answers, this.question.correct_answer].sort(() => Math.random() - 0.5);
        }
    },
    methods: {
        atChosen: function (value) {
            this.$emit('checked', {value, qIndex: this.index})
        }
    }
}
</script>

<style>

</style>