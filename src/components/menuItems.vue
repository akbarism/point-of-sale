<template>
    <div class="main-menu" >
        <sidebar v-on:showw="$emit('over')" v-on:show="$emit('oper')"/>
        <history/>
        <div class="list-menu blank">
        <div class="card-menu " @click="pick(item)" v-for="item in newMenu" :key="item.id_menu">
        <section class="ikon-menu card-check">
        <img :src="item.image" alt="">
        </section>
        <section class="detail-menu">
        <h1 class="text-lg">{{item.name}}</h1>
        <p class="text-2xl py-4">Rp. {{item.price}}</p>
        </section>
        <!-- <t-pagination
  :total-items="totalRows"
  :per-page="perPage"
  :limit="limit"
  :disabled="disabled"
  v-model="currentPage"
/> -->
    </div>
</div>
    </div>
</template>
<script>
import sidebar from "../components/sidebar";
import history from "../components/history";
// import TPagination from 'vue-tailwind/src/components/t-pagination.vue'
// import axios from "axios";
export default {
    name: "menuItems",
    components: {
        sidebar,
        history,
        // TPagination
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
        pick(data){
            this.$store.commit('SELECT_MENU', {data, count : 1})    
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
    height: 1000px;
    font-family: "Airbnb Cereal App Bold";
}
.list-menu{
    flex-wrap: wrap ;
    display: flex;
    width: 0;
    /* height: 938px; */
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
    /* position: absolute; */
    height: 180px;
    /* background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)); */
    background: black;
}
.ikon-menu img{
    
    height: 180px;
    width: 270px;
    object-fit: cover;
}
.detail-menu{
display: flex;
flex-direction: column;
}

</style>