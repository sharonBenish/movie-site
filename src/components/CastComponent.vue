<template>
  <div class="cast-container">
    <div class="profile-img">
        <img :src="imgUrl+cast.profile_path" alt="" class="img-fluid">
    </div>
    <div>
        <p>Name: {{cast.name}}</p>
        <p>Role: {{cast.character}}</p>
        <h5>Other movies:</h5>
    </div>
    <div class="list">
        <movie-list :keyword="`/person/${cast.id}/movie_credits`" :numberOfMovies="4" />
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
    border:2px solid rgb(176, 176, 176);
    margin:30px 0;
    padding:30px;
    border-radius:1rem;
}



.profile-img> img{
    max-height: 300px;
    max-width:300px;
}

.img-fluid{
    width:100%;
    height:100%;
    object-fit: cover;

}
>>>#movie-card{
    box-shadow: none;
    height:120px;
}
  
>>>#movie-card:hover{
    transform:none
}
>>>.items{
    max-width:200px;
}
>>>#movie-list {
    row-gap: 20px !important;
    column-gap: 20px !important;
    justify-content: left !important;
}

@media(min-width: 800px){
    .profile-img{
        width:40%;
    }
    .list{
        width:100%;
    }
    .cast-container{
        display:flex;
        flex-wrap: wrap;
    }
    >>>#movie-card{
        height:120px;
    } 
}


/*>>>#movie-list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0px !important;
    column-gap: 0px !important;
    justify-content: left !important;
    padding:2em 0;
    border: 1px solid green;
}

>>>.items{
    border:3px solid orangered;
}

>>>#movie-card {
    height:100px !important;
    border-radius:5px!important;
    box-shadow: none;
    transition: none;
}

>>>#movie-card:hover{
    transform: none;
}*/

</style>
