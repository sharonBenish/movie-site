<template>
  <div id="container">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/categories">Categories</router-link></li>
        <li><router-link to="/trending">Trending</router-link></li>
        <li><router-link to="/top-rated">Top Rated</router-link></li>
        <li><router-link to="/popular">Popular</router-link></li>
        <li><router-link to="/upcoming">Upcoming</router-link></li>
      </ul>
    </nav>
    <!-- <router-view /> -->
    <movie-list-vue :keyword="'/trending/all/week'" :numberOfMovies="6" :heading="'Trending this week'" />
    <movie-list-vue :keyword="'/movie/top_rated'" :numberOfMovies="6" :heading="'Top Rated Movies'" />
  </div>
</template>

<script>
import movieListVue from './components/movieList.vue'

export default {
  components: {
    movieListVue
  }
  
}
</script>

<style lang="scss" scoped>
  #container {
    margin: 0 auto;
    max-width: 900px;
  }

  nav {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    height: 50px;
    width: 100%;
  }
  
  ul {
    display: flex;
    list-style: none;
    padding: 10px;
    padding-left: 0;
    padding-bottom: 0 !important;
    li {
      margin-left: 10px;
      &:first-of-type {
        margin-left: 0;
      }
      a {
        color: #333;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
</style>
