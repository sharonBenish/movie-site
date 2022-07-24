<template>
    <div>
        <movie-list-vue :keyword="'/movie/top_rated'" :numberOfMovies="6" :heading="'Top Rated Movies'" />
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