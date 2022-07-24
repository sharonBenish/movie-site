<template>
    <div>
        <h3>Showing search results for "{{searchQuery}}"</h3>
        <movie-list-vue :keyword="'/search/movie'" :numberOfMovies="6" />  
    </div>
  
</template>

<script>
import movieListVue from '../components/movieList.vue'

export default {
  components: {
    movieListVue
  },
  data(){
    return{
        searchQuery:this.$route.params.query||localStorage.getItem('lastQuery')
    }
  }
  
}
</script>

<style>
h3{
  margin-top:2rem;
  margin-bottom: 1rem;
  font-size:2rem;
}

</style>