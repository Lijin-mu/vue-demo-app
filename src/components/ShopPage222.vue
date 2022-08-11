
<script lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Vue from 'vue';
import { defineComponent } from "vue";
import ProductDataService from '../services/ProductDataService';
import Product from '../interfaces/product';
import ResponseData from '../interfaces/ResponseData';
import axios from 'axios';


export default {
  name: "app",
  data() {
    return {
      dataset: null,
    };
  },
  methods: {
    fetchData: function(){
        ProductDataService.getAll()
        .then((response: ResponseData) => {
          dataset = response.data;
          console.log(dataset);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }

    
        
}
}


let data: Array<Product>;

let dataset = Vue.reactive([{

}])

async function fetchData() {

    ProductDataService.getAll()
        .then((response: ResponseData) => {
          data = response.data;
          console.log(data);
          return data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
        
}

fetchData()

</script>

<template>
<h1>shop page</h1>
<div class="row">
    <div class="col-md-3" v-for="product in dataset">
        <div class="card">
            <div class="card-body">
                
            </div>
        </div>
    </div>
</div>
</template>