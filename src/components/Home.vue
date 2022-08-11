<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'


const count = ref<number | null>(null)

interface productItem {
  id:number,
  title:string,
  price:string,
  category:string,
  description:String,
  image:string
}

interface appdata {
  title:string,
  desc:string
}


const appInfo = reactive({
  name:'Counter',
  slogan: 'an app you can count down'
})

const appsData: appdata = reactive({
  title:'title',
  desc: 'descriptions'
})


function data(){
 
}

onMounted( () => {
axios.get('https://fakestoreapi.com/products')
    .then(response =>{
        const datas = response.data;
        return datas;
    })
    .catch(error =>{
        console.log(error)
    })
})





</script>
src/
<template>
  <h1>Home Page</h1>
<!--<img alt="Vue logo" class="logo" src="@/assets/vue.svg" />-->
  <div class="grid">
    <article class="card bg-primary">
    <div class="card-image"><a href="#" tabindex="-1"><img src="https://www.placecage.com/300/300" alt="" width="300" height="300"/></a></div>
    <div class="card-content">
      <h2 class="card-title"><a href="#">Card Title</a></h2>
      <ul>
        <li><a href="#">Lorem</a></li>
        <li><a href="#">Ipsum</a></li>
      </ul>
    </div>
  </article>
  </div>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <h1> {{appInfo.name}} </h1>
    <h2> {{appInfo.slogan}} </h2>

     <h1> {{appsData.title}} </h1>
    <h2> {{appsData.desc}} </h2>
  </div>

</template>

<style scoped>
body {
  --ctx-bg: rgb(29, 18, 47);
  --ctx-color: rgb(240, 241, 244);
  --accent: rgb(255, 0, 149);
  --alt-bg: #161616;
  --corner-radius: 4px;
  min-height: 100vh;
  padding: 1rem;
  color: var(--ctx-color);
  background-color: var(--ctx-bg);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  gap: 1rem;
}

.card {
  position: relative;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--accent);
  border-radius: var(--corner-radius);
  background: var(--alt-bg);
  /* //For :has() support:
  &-image a:is(:hover) img,
  &:focus-within &-image a img,
  &:has(a:is(:hover, :focus)) &-image a img {
  	transform: scale(1.0625) rotate(1deg);
  }
  //*/
}
.card-image {
  flex-shrink: 0;
}
.card-image a {
  display: block;
  overflow: hidden;
}
.card {
  pointer-events: none;
}
.card a {
  pointer-events: auto;
}
.card:hover .card-image img, .card:focus-within .card-image img {
  transform: scale(1.0625) rotate(1deg);
}
.card-image img {
  width: 100%;
  background: #808080;
  transition: transform 250ms cubic-bezier(0.67, 0, 0.33, 1);
}
.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
}

a {
  color: var(--accent);
}

</style>
