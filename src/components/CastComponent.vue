<template>
  <div class="cast-container">
    <div class="profile-img">
        <img :src="imgUrl+cast.profile_path" alt="" class="img-fluid">
    </div>
    <div>
        <p>Name: {{cast.name}}</p>
        <p>Role: {{cast.character}}</p>
        <div class="list">
            <movie-list :keyword="`/person/${cast.id}/movie_credits`" :numberOfMovies="3" />
        </div>
    </div>
  </div>
</template>

<script>
import { IMG_URL } from '@/config'
import movieList from './movieList.vue'
export default {
  components: { movieList },
    props:["cast"],
    data(){
        return {
            imgUrl:IMG_URL
        }
    }
}
</script>

<style scoped>
.cast-container{
    display:flex;
    border:1px solid red;
}

.profile-img{
    width:40%;
}

.profile-img> img{
    max-height: 300px;
}

.img-fluid{
    width:100%;
    height:auto;
    object-fit: cover;

}

.list{
    border:1px solid yellow;
    padding:0;
}

>>>#movie-list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0px !important;
    column-gap: 0px !important;
    justify-content: left !important;
    padding:2em 0;
    border: 1px solid green;
}

>>>.items{
    flex: 1 1 auto !important;;
    border:3px solid orangered;
}

>>>#movie-card {
    height:100px !important;
    border:1px solid red;
    border-radius:5px!important;
    box-shadow: none;
    transition: none;
}

>>>#movie-card:hover{
    transform: none;
}

</style>
