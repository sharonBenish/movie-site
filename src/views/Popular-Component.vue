<template>
    <div>
        <movie-list-vue :keyword="'/movie/popular'" :numberOfMovies="6" :heading="'Popular Movies'" />
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