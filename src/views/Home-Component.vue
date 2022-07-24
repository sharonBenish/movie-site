<template>
    <div>
        <h1>Cinemax Movies</h1>
        <form class="search-box" @submit.prevent="fetchData">
          <input class="search-field" type="text" placeholder="Search for movies..." required v-model="query">
        </form>
        <movie-list-vue :keyword="'/discover/movie'" :numberOfMovies="6" :heading="'DISCOVER'" />
    </div>
  
</template>

<script>
import movieListVue from '../components/movieList.vue'

export default {
  data(){
    return{
      query:"",
    }
  },
  components: {
    movieListVue
  },
  methods:{
    fetchData(){
      this.$router.push({ 
        name: 'SearchResults', 
        params: { 
          query: this.query,
        } 
      })
      this.query=""
    }
  }
  
}
</script>

<style>
h1{
  text-align: center;
}
.search-box {
  display: flex;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
}
.search-box .search-field {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: #F3F3F3;
  display: block;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 8px;
  color: #313131;
  font-size: 1rem;
  transition: 0.4s;
}
.search-field::placeholder {
  color: #AAA;
}
.search-field:focus, .search-field:valid {
	color: #FFF;
	background-color: #313131;
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
}
</style>