<template>
    <div>
        <CastComponent v-for="(cast, index) in seeCast" :key="index" :cast="cast"/>
        <button @click="showMore">See More</button>
    </div>
</template>

<script>
import { BASE_URL, API_KEY, IMG_URL } from '@/config'
import axios from 'axios'
import CastComponent from '@/components/CastComponent.vue'
export default {
    created() {
        axios.get(`${BASE_URL}/movie/${this.$route.params.id}/credits?api_key=${API_KEY}`)
            .then(res => {
            this.casts = res.data.cast.filter(item => item["known_for_department"] === "Acting");
        });
    },
    data() {
        return {
            casts: [],
            castNum: 5,
        };
    },
    computed: {
        seeCast(){
            return this.casts.slice(0, this.castNum)
        }
    },
    methods:{
        showMore(){
            this.castNum += 5;
        }
    },
    components: { CastComponent }
}
</script>

<style>

</style>