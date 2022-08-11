<template>
<div class="product">
    <div class="product-image">
    <img :src="item.image" />
    </div>
    <div class="product-details">
       <div class="product-details__title">{{ item.title }}</div>
         <div class="product-details__rating"></div>
         <div class="product-details__price">$ {{ item.price }}</div>
        <div class="product-details__description">{{ item.description }}</div>
        
        <div class="product-details__more">
          <router-link
          :to="'/product/' + item.id"
          class="btn btn-warning w-100"
          >Details</router-link
        >
        </div>
        <div class="product-details__actions">
            <div class="add-to-cart"></div>
            <div class="add-to-wishlist"></div>
        </div>
    </div>
</div>

</template>

<script lang="ts">
export default {
  name: 'ProductBox',
 
  data () {
    return {
  
    }
  },
  props: {
    item:Object
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss">

.product{
    width: 100%;
    height: auto;
    padding: 15px;
    border: 1px solid #ccc;
    &-image{
        width:100%;
        height: 150px;
        @media (min-width: 577px) {
          height: 250px;
        }
        img{
            width: 100%;
             height: 150px;
            @media (min-width: 577px) {
              height: 250px;
            }
            object-fit: contain;
            object-position: center;
        }
    }
    &-details{
        width: 100%;
        height: auto;
        margin-top: 20px;
        &__title{
          width: 100%;
          font-size: 20px;
          color: #000;
          font-weight: bold;
          line-height: 26px;
          display: -webkit-box;
          max-width: 100%;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 52px;
        }
        &__description{
          margin-top: 15px;
          font-size: 16px;
          line-height: 24px;
          display: -webkit-box;
          max-width: 100%;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 96px;
        }
        &__price {
            font-size: 18px;
            color: #000;
            font-weight: bold;
            margin-top: 15px;
        }
        &__more{
          margin-top: 15px;
        }
    }
}

</style>