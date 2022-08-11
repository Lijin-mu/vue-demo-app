
<script lang="ts">
import { defineComponent } from "vue";
import ProductDataService from '../services/ProductDataService';
import Product from '../interfaces/product';
import ResponseData from '../interfaces/ResponseData';
import ProductCard from './ProductCard.vue';
import SubHead from './SubHead.vue'

export default defineComponent({
    data() {
        return {
            products: [] as Product[]
        };
    },
    methods: {
        fetchData: function () {
            ProductDataService.getAll()
                .then((response: ResponseData) => {
                this.products = response.data;
            })
                .catch((e: Error) => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.fetchData();
    },
    components: { ProductCard, SubHead }
})


</script>

<template>



<div class="container">
  <SubHead title="Shop" />
 <div class="shop">
    <div class="products-list">
      <div v-for="(item, index) in products" class="products-list__item">
          <ProductCard :item="item" />
      </div>
    </div>
  </div>
</div>

</template>

<style lang="scss"> 
.shop {
    padding: 50px 0;
}
  .products-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: auto;
    margin-left: -5px;
    margin-right: -5px;
    &__item{
    width: 50%;
    padding: 5px;
    }
  }

@media (min-width: 577px) {
  .products-list{
    margin-left: -5px;
    margin-right: -5px;
    &__item{
    width: 33.33%;
    padding: 5px;
    }
  }

}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .products-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: auto;
    margin-left: -5px;
    margin-right: -5px;
    &__item{
    width: 20%;
    padding: 5px;
    }
  }

}
</style>