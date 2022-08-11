<template>
<div class="subhead">
    <div class="subhead-title"> {{ title }}</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    data() {
        return {
           
        };
    },
    props:{
        title : String
    },

    methods: {

    },
    computed: {

}

})

</script>
<style lang="scss">
.subhead {
    min-height: 250px;
    padding: 50px;
    background: #3a3030;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &-title{
        font-size: 24px;
        line-height: 34px;
        font-weight: bold;
    }
}

</style>