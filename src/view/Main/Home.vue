<template>
    <div class="main-container">
        <div class="side-left">
            <navbar v-bind:titles="titles"/>
            <menuItems v-on:oper="history"  v-on:over="menu"/>
        </div>
        <div class="side-right hide">
        <cart/>
        </div>
    </div>
</template>
<script>
import navbar from "../../components/navbar.vue"
import menuItems from "../../components/menuItems.vue"
import cart from "../../components/cart.vue"
export default {
    name: "Home",
    data(){
        return{
            titles: 'Food Items'
        } 
    },
    components: {
        navbar,
        menuItems,
        cart,
        
    },
    methods: {
        history(){
            const tag = document.querySelector(".side-right");
            const nav = document.querySelector(".side-left");
            const none = document.querySelector(".list-menu");
            const boom = document.querySelector(".there")
            tag.classList.remove("hide")
            nav.classList.add("long")
            none.classList.remove("blank")
            boom.style.display = "flex"
            this.titles = "History"
            // document.querySelector(".main-menu").style.display = "none"
        },
        menu(){
            const tag = document.querySelector(".side-right");
            const nav = document.querySelector(".side-left");
            const none = document.querySelector(".list-menu");
            const boom = document.querySelector(".history-menu")
            tag.classList.add("hide")
            nav.classList.remove("long")
            none.classList.add("blank")
            boom.style.display = "none"
            this.titles = "Food Items"
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.main-container{
    display: flex;
    width: 100%;
    background: #ffffff;
}
.side-left{
    width: 75%;
    transition: 0.5s ;
}
.long{
    transition: 0.5s;
    width: 100%;
}
.side-right{
    width: 25%;
    display: none;
    position: fixed;
    right: 0;
    top: 0;
    
}
.hide{
    display: flex;
    transition: ease;
}
</style>