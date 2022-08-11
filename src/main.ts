import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import ShopPage from './components/ShopPage.vue'
import ProductDetails from './components/ProductDetails.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: ShopPage },
        // { path: '/about', component: HelloWorld },
        // { path: '/shop', component: ShopPage},
        { path: '/product/:id', component: ProductDetails}

    ]
})

createApp(App)
.use(router)
.mount('#app')
