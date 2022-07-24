<template>
  <div id="container">
    <nav>
      <div class="mobile-cntrl" @click="toggleNav" :class="{closed:!isOpen}">
        <img v-if="!isOpen" src="./assets/icon-hamburger.svg" alt=""/>
        <img v-if="isOpen" src="./assets/icon-close-modal.svg" alt=""/>
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/trending">Trending</router-link></li>
        <li><router-link to="/top-rated">Top Rated</router-link></li>
        <li><router-link to="/popular">Popular</router-link></li>
        <li><router-link to="/upcoming">Upcoming</router-link></li>
      </ul>
    </nav>
    <transition
    enter-active-class="animate__animated animate__fadeInUp"
    leave-active-class="animatee__animated animate__fadeOutDown">
        <router-view/>
    </transition> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      isOpen:false,
    }
  },
  methods:{
    toggleNav(){
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
  #container {
    margin: 0 auto;
    max-width: 900px;
    padding:0 2rem;
  }

  .mobile-cntrl{
    position:absolute;
    top:50%;
    right:0;
  }

  .closed + ul{
    display:none;
  }

  nav {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    position:relative;
  }

  nav a{
    color:#000;
  }

  nav a.router-link-exact-active{
    color:#832528;
  }
  

  ul{
    z-index: 1000;
    position: absolute;
    top:100%;
    width:100%;
    background: #fff;
    list-style:none;
    padding:10px;
    border-radius:10px;
    li{
      margin-bottom:1rem;
    }
      a {
        //color: #333;
        font-weight: bold;
        text-decoration: none;
      }
  }
  
  

@media (min-width:600px){
  nav a{
    color:#fff;
  }

  .closed + ul{
    display: flex;
  }

  nav a.router-link-exact-active{
    color:#fff;
    padding:0.6rem 1rem;
    background-color:#832528;
    border-radius:5px;
  }

  .mobile-cntrl{
    display:none;
  }

  ul {
    position:static;
    width:100%;
    background: none;
    padding:10px;
    border-radius:none;

    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 10px;
    padding-left: 0;
    padding-bottom: 0 !important;
    //font-size:10px;
    li {
      margin-left: 10px;
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
}
</style>

<style>
body{
    background-color:#000;
    color:#fff;
}

</style>
