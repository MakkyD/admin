<template>
  <div id="app">
    <div id="nav" class="fixed-top">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <app-header></app-header>
    </div>
    <div class="row">
        <div class="col-lg-2 app-sideBar">
          <app-sidebar></app-sidebar>
        </div>
        <div class="col-lg-10 Content">
          <router-view/>
        </div>
      </div>
    
  </div>
</template>
<script>
import Header from "./components/Header.vue"
import SideBar from "./components/SideBar"
export default {
  components:{
    "app-header": Header,
    "app-sidebar": SideBar,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(238, 229, 229);
}
*{}

#nav {
  /* padding: 30px; */
}
nav{
  padding: 0rem 2rem 0rem 2rem
}

#nav a {
  font-weight: bold;
  color: #2c3e50; 
}

.row{
  margin-right: 0;
}

.sideBar{
    background-color: rgb(23, 23, 73);
    height: 100vh;
    color: rgb(151, 146, 146);
    position: fixed;
    /* top: 0; */
    left: 0;
    width: 12rem;
    padding-top:3rem
}
.app-sideBar{
  /* width:200rem */
}
.profileImg{
  margin-top: 2rem;
    width:50%;
}
.Content{
  /* background-color: rgb(238, 229, 229); */
  /* height:100vh */
  margin-top: 7rem
}
.Header{
     background-color: white;
 }
</style>
