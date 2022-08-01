<template>
    <div>
        <div v-if="movies.length>0 && heading" class="top">
            <h3>{{ heading }}</h3>
            <router-link v-if="path" :to=path>More...</router-link>
        </div>
        <div id="movie-list">
            <div class="items" v-for="movie in movies" :key="movie.id">
                <movie-card-vue :movie="movie" />
            </div>
        </div>
        <h4 v-if="isEmpty">No results found...</h4>
    </div>
</template>

<script>
import movieCardVue from './movieCard.vue'
import Axios from 'axios'
import { API_KEY, BASE_URL } from './../config.js'

export default {
    components: {
        movieCardVue
    },
    props: {
        keyword: {
            type: String,
            default: 'trending'
        },
        heading: {
            type: String,
            default: ''
        },
        numberOfMovies: {
            type: Number,
            default: 3
        },
        path:{
            type:String
        }
    },
    data () {
        return {
            movies: [],
            query:this.$route.params.query||localStorage.getItem('lastQuery'),
            isEmpty:false,
        }
    },
    mounted() {
        localStorage.setItem('lastQuery', this.query)
        Axios.get(`${BASE_URL}${this.keyword}?query=${this.query}&api_key=${API_KEY}`).then(res => {
            if (res.data.results){
                if (res.data.results.length == 0){
                    this.isEmpty = true;
                };
                console.log("results")
                this.movies = res.data.results.slice(0, this.numberOfMovies)
            } else if(res.data.cast){
                console.log("cast");
                this.movies =res.data.cast.slice(0, this.numberOfMovies)
            }
            
        })
    }

}
</script>

<style scoped>
    .top{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-top:2rem;
        margin-bottom: 1rem;
    }
    h3{
        
        font-size:2rem;
    }

    .top a{
        color:#832528;
        text-decoration: none;
        font-size:1.2rem;
    }

    #movie-list {
        display: flex;
        flex-wrap: wrap;
        row-gap: 3em;
        column-gap: 1em;
        justify-content: space-between;
        padding:2em 0;
    }

    .items{
        flex: 1 1 200px;
    }

    @media(min-width:1024px){
         #movie-list {
        display: flex;
        flex-wrap: wrap;
        row-gap: 3em;
        column-gap: 3em;
        justify-content: space-between;
        padding:2em 0;
    }
        .items {
        flex: 1 1 250px;
    }
    }

    
</style>