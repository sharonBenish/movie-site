<template>
    <div>
        <movie-list-vue :key="key" :keyword="'/movie/top_rated'" :numberOfMovies="20" :heading="'Top Rated Movies'" :showPagination="true" />
    </div>  
</template>

<script>
import movieListVue from '../components/movieList.vue'
export default {
  components: {
    movieListVue
  },
  
}
</script>

<style scoped>
.pagination ul{
  display: flex;
  list-style: none;
  border:1px solid red;
  justify-content: space-between;
  width:100%;
  max-width:300px;
  padding: 20px;
}

.pagination ul >li{
  padding:0.5rem 1rem;
  background: #fff;
  color:#000000
}

.pagination ul >li:hover{
  background: red;
  color:#fff
}
</style>