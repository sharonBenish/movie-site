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
        <vue-awesome-paginate v-if="showPagination && movies.length>0"
    :total-items="20000"
    :items-per-page="20"
    :max-pages-shown="5"
    :current-page="1"
    :on-click="goToPage"
  />
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
        },
        showPagination:{
            type:Boolean,
            default:false,
        }
    },
    data () {
        return {
            movies: [],
            query:this.$route.params.query||localStorage.getItem('lastQuery'),
            isEmpty:false,
            page:1,
        }
    },
    methods:{
        goToPage(page){
            console.log(page)
            this.page = page
            //this.pageNum = page;
            //this.key ++;
        },
        loadMovies(){
            Axios.get(`${BASE_URL}${this.keyword}?query=${this.query}&api_key=${API_KEY}&page=${this.page}`).then(res => {
            if (res.data.results){
                if (res.data.results.length == 0){
                    this.isEmpty = true;
                };
                this.movies = res.data.results.slice(0, this.numberOfMovies)
            } else if(res.data.cast){
                this.movies =res.data.cast.slice(0, this.numberOfMovies)
            }
            
        })
        }
    },
    watch:{
        page(newVal, oldVal){
            this.loadMovies();
            window.scrollTo(0,0)
        }
    },
    mounted() {
        localStorage.setItem('lastQuery', this.query)
        this.loadMovies()
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
        /*column-gap: 1em;*/
        justify-content: center;
        padding:2em 0;
    }

@media (min-width:530px){
    #movie-list {
        display: flex;
        flex-wrap: wrap;
        row-gap: 3em;
        /*column-gap: 1em;*/
        justify-content: flex-start;
        padding:2em 0;
    }
    .items{
        width:calc(50% - 10px);
    }

}
    

    @media(min-width:1024px){
         #movie-list {
        /*row-gap: 3em;
        column-gap: 3em;*/
        column-gap: 30px;
    }
        .items {
        width:calc(33.33% - 30px);
    }
    }

    @media (min-width:1200px) {
        .items{
            width: calc(25% - 30px)
        }
    }

    @media (min-width:1480px) {
        .items{
            width: calc(20% - 30px)
        }
    }

    
</style>