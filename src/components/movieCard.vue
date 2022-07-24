<template>
    <div id="movie-card">
        <img :src="imgUrl+movie.backdrop_path" class="movie-img"/>
        <div class="text">
            <div class="title">
                <!-- <h5 v-if="movie.media_type">{{ movie.title }} ({{movie.release_date}})</h5> -->
                <h5 v-if="!movie.media_type || movie.media_type == 'movie'">{{ movie.title }} ({{ dateYear(movie.release_date) }})</h5>
                <h5 v-else>{{ movie.name }} ({{ dateYear(movie.first_air_date) }})</h5>
            </div>
            <div class="details">
                <h5><span><img class="star" src="../assets/star.png" alt=""></span>{{ movie.vote_average.toFixed(1) }} Rating</h5>
                <h5>{{ movie.release_date || movie.first_air_date }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import { IMG_URL } from './../config.js'
import { convertToYear } from './../config.js'

export default {
    props: {
        movie: {
            type: Object
        }
    },
    data () {
        return {
            imgUrl: IMG_URL
        }
    },
    methods:{
        dateYear(date){
            const year = convertToYear(date);
            return year;
        }
    }
}
</script>

<style lang="scss" scoped>
    h5 {
        margin: 0;
        margin-top: 10px;
    }
    
    .text {
        padding: 10px;
        width:90%;
        //padding-bottom: 50px;
        position:absolute;
        bottom:0;
        z-index:100;
    }

    .title {
        h5 {
            height: 20px;
        }
    }

    #movie-card {
        position: relative;
        height:300px;
        border-radius:5px!important;
        overflow: hidden;
        //border: 1px solid #ccc;
        box-shadow: 0px 0px 20px 3px rgb(87, 87, 87);
        transition: transform 0.5s
        // max-width: 300px;
        // box-shadow: 1px 2px 20px #ccc;
    }

    #movie-card:hover{
        transform: scale(1.1);
    }

    .movie-img {
        //height: 180px;
        height:100%;
        object-fit: cover;
        width:100%;
    }

    .details {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .star{
        max-width:15px;
        max-height: 15px;
        object-fit: cover;
        padding:0 5px;
    }
</style>