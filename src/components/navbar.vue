<template>
    <div class="menu-nav">
        <div class="burger">
            <img src="../assets/img/berger.png">
        </div>
        <div class="menu-title">
            <h1 class="text-2xl font-thin">{{titles}}</h1>
        </div>
        <div class="menu-search">
            <input type="text" id="find" class="mr-2 h-10 p-2">
            <label for="find"><img src="../assets/img/search.png" alt=""></label>
        </div>
    </div>
</template>
<script>
export default {
    name: "navbar",
    props: ['titles'],
    data () {
        return{
            
        }
    }
    
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.menu-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    font-family: "Airbnb Cereal App Bold";

}
.burger img{
    width: 35.35px;
    height: 35px;
}
.burger{
    display: flex;
    justify-content: center;
    width: 100px;

}
.menu-search{
    display: flex;
    width: 300px;
    justify-content: center;
}
.menu-search img{
    width: 35.35px;
    height: 35px;
}
</style>