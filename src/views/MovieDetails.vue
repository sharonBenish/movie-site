<template>
  <div class="container">
    <div class="movie-img">
        <img :src="imgUrl + movie_details.backdrop_path" alt="">
    </div>
    <div class="details">
        <h4>{{movie_details.title}}</h4>
        <div class="overview">{{movie_details.overview}}</div>
        <div>
            <p><span class="title">Rating:</span><span><img class="star" src="../assets/star.png" /> {{movie_details.vote_average.toFixed(1)}}</span></p>
            <p><span class="title">Budget:</span> <span>${{ movie_details.budget }}</span></p>
            <p><span class="title">Release Date:</span><span>{{ movie_details.release_date }}</span></p>
            <p><span class="title">Revenue:</span><span>${{ movie_details.revenue }}</span></p>
        </div>
    </div>

    <div id="similar">
        <movie-list-vue :key="key" :keyword="`/movie/${routeParamsID}/similar`" :numberOfMovies="6" :heading="'SIMILAR MOVIES'" />
    </div>
    
  </div>
</template>

<script>
import movieListVue from '../components/movieList.vue'
import { BASE_URL, API_KEY, IMG_URL } from '@/config'
import axios from 'axios'
export default {
  components: {
    movieListVue
  },
  data(){
    return{
        movie_id:this.$route.params.id,
        movie_details:{},
        imgUrl:IMG_URL,
        key:0,
    }
  },
  created(){
    this.loadMovieDetails();
  },
  computed:{
    routeParamsID(){
        return this.$route.params.id;
    }
  },
  watch:{
    routeParamsID(newVal, oldVal){
      this.loadMovieDetails();
      this.key++
    }
  },
  methods:{
    loadMovieDetails(){
      axios.get(`${BASE_URL}/movie/${this.$route.params.id}?api_key=${API_KEY}`)
        .then(res => {
            this.movie_details = res.data
        });
        window.scrollTo(0,0)
    }
  },
}
</script>

<style scoped>
.container{
    padding:2rem 0;
}
.details > div>p{
    display:flex;
    justify-content: space-between;
    max-width:500px;
}
.movie-img{
    width:100%;
}
.movie-img >img{
    width:100%;
    height: auto;
    min-height:250px;
    object-fit: cover;
}
.star{
    max-width:15px;
}

.overview{
    font-size:0.8rem;
}

.title{
    color:#832528;
    font-weight: 700;
}
</style>