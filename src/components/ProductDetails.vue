
<script lang="ts">
import { defineComponent } from "vue";
import ProductDataService from '../services/ProductDataService';
import Product from '../interfaces/product';
import ResponseData from '../interfaces/ResponseData';
import SubHead from './SubHead.vue'


let product: Array<Product>;

export default defineComponent({
    data() {
        return {
            product: {} as Product,
        };
    },
    props: {
    id: [Number, String],
  },
    methods: {
        fetchProduct: function (id:any) {
            console.log(id);
            ProductDataService.get(id)
                .then((response: ResponseData) => {
                this.product = response.data;
                console.log(this.product);
            })
                .catch((e: Error) => {
                console.log(e);
            });
        }
    },
    mounted() {
        console.log(this.$route.params.id);
        this.fetchProduct(this.$route.params.id);
    },
     components: { SubHead }
    
})


</script>

<template>
<div class="container">
    <SubHead :title=product.title />
<div class="product-single">
    <div class="row">
        <div class="col-md-6">
            <div class="product-single__image">
                <img :src="product.image" />
            </div>
        </div>
        <div class="col-md-6">
        <div class="product-single__title"><h1> {{ product.title }} </h1></div>
         <div class="product-single__rating"></div>
        <div class="product-single__description">{{ product.description }}</div>
        <div class="product-single__price">$ {{ product.price }}</div>
        <div class="product-single__actions">
            <div class="add-to-cart"> <a href="#" class="btn btn-warning">Add to Cart</a></div>
            <div class="add-to-wishlist"></div>
        </div>

        </div>

</div>

</div>
</div>
</template>

<style lang="scss"> 
.product-single{
    width: 100%;
    height: auto;
    margin: 50px 0;
    &__image{
        width: 100%;
        height: auto;
        img{
            width: 100%;
            height: auto;
        }
    }
    &__title{
        width: 100%;
    }
    &__description{
        margin-top: 20px;
        font-size: 16px;
        line-height: 24px;

    }
    &__price{
        margin-top: 20px;
        font-weight: bold;
    }
    &__actions{
        margin-top: 20px;
    }
}
</style>