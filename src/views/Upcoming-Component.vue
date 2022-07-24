<template>
    <div>
        <movie-list-vue :keyword="'/movie/upcoming'" :numberOfMovies="6" :heading="'Upcoming Movies'" />
    </div>
</template>

<script>
import movieListVue from '../components/movieList.vue'

export default {
  components: {
    movieListVue
  }
  
}
</script>

<style>

</style>