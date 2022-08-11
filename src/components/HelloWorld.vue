<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Counter from '../components/Counter.vue'


const count = ref<number | null>(null)

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

</script>

<template>
  <h1> About us</h1>

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

  <Counter
    :limit="10"
    ></Counter>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
