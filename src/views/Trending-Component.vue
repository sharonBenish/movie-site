<template>
    <div>
        <movie-list-vue :keyword="'/trending/all/day'" :numberOfMovies=20 :heading="'Trending Today'" />
        <movie-list-vue :keyword="'/trending/all/week'" :numberOfMovies="20" :heading="'Trending this week'" />
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