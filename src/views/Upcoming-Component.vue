<template>
    <div>
        <movie-list-vue :keyword="'/movie/upcoming'" :numberOfMovies="20" :heading="'Upcoming Movies'" :showPagination="true" />
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