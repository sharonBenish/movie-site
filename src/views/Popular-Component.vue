<template>
    <div>
        <movie-list-vue :keyword="'/movie/popular'" :numberOfMovies="20" :heading="'Popular Movies'" :showPagination="true" />
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