<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="main-container">
  <div class="container">
    <ul class="navbar-nav mx-auto">
    <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>-->
    <router-link to="/">Shop</router-link>
    </ul>
  </div>
 
   <router-view></router-view>
   </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.main-container{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
.navbar-nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #f2f2f2;
  a{
    display: block;
    padding: 10px 15px;
    border: 1px solid #000;
    color: #000;
    &:hover{
      background: #000;
      color: #fff;
    }
  }
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
