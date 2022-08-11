<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import fetchCount from './fetchCount';
import countBtn from './countBtn.vue';

const count = ref<number | null>(null)

interface Props {
    limit: number;
    alertMessageOnLimit?: string;
}

const props = withDefaults(defineProps<Props>(),{
    alertMessageOnLimit: 'cannot go beyond'
})

onMounted(()=>{
  fetchCount((initilCount)=>{
    count.value = initilCount
  })
})

function addCount(num: number){
  if(count.value !==null){
    if(count.value >= props.limit){
        alert(props.alertMessageOnLimit)
    } else{
        count.value += num
    }
    
  }
}

</script>

<template>

<h1>{{ count }}</h1>

  <div class="card">
     <countBtn @add-count ="addCount" @reset-count ="count = 0"></countBtn>
  </div>

</template>