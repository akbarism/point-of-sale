<template>
    <div class="main-menu" >
<sidebar v-on:showw="$emit('over')" v-on:show="$emit('oper')"/>
    <history/>
<div class="list-menu blank">
<div class="card-menu" @click="mmk(item.id_menu)" v-for="item in newMenu" :key="item.id_menu">
    <section class="ikon-menu">
        <img :src="item.image" alt="">
    </section>
    <section class="detail-menu">
        <h1 class="text-lg">{{item.name}}</h1>
        <p class="text-2xl py-4">Rp. {{item.price}}</p>
    </section>
</div>
</div>
    </div>
</template>
<script>
import sidebar from "../components/sidebar";
import history from "../components/history";
// import axios from "axios";
export default {
    name: "menuItems",
    components: {
        sidebar,
        history,

    },
    data(){
        return{
           
        }
    },
    computed:{
        newMenu(){
        return this.$store.state.allmenu
        } 
    },
    methods: {
        mmk(id_menu){
            // console.log(id_menu);
            
            this.$store.commit('SELECT_MENU', id_menu)        
        }
    },
    mounted(){
        this.$store.dispatch('getMenu', this.$store.state.currentPage)
    }
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.main-menu{
    display: flex;
    width: 100%;
    font-family: "Airbnb Cereal App Bold";
}
.list-menu{
    flex-wrap: wrap ;
    display: flex;
    width: 0;
    height: 938px;
    background:  rgba(190, 195, 202, 0.3);
}
.blank{
    width: 90%
}
.card-menu{
    margin: 20px;
    height: 270px;
    width: 260px;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
}
.card-menu:hover{
    transform: scale(1.02);
    transition: 0.3s;
    box-shadow: 10px 15px 10px rgba(16, 17, 17, 0.61);

}
.card-check{
    height: 180px;
    background: rgba(0, 0, 0, 0.4);
}
.ikon-menu img{
    height: 180px;
    width: 270px;
}
.detail-menu{
display: flex;
flex-direction: column;
}

</style>