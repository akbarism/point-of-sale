<template>
    <div class="main-menu">
<sidebar v-on:showw="$emit('over')" v-on:show="$emit('oper')"/>
    <history/>
<div class="list-menu blank">
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/espresso.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1 class="text-lg">Espresso</h1>
        <p class="text-2xl py-4">Rp. 10.000</p>
    </section>
</div>
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/coffe-late.jpg" alt="">
        </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
<div class="card-menu card-check">
    <section class="ikon-menu">
        <img src="../assets/img/latte.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/red-velvet.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/choco-rum.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/blackforest.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/chicken-katsu.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/tongkol.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
<div class="card-menu">
    <section class="ikon-menu">
        <img src="../assets/img/tempe-goreng.jpg" alt="">
    </section>
    <section class="detail-menu">
        <h1>Espresso</h1>
        <p>Rp. 10.000</p>
    </section>
</div>
</div>
    </div>
</template>
<script>
import sidebar from "../components/sidebar"
import history from "../components/history"
export default {
    name: "menuItems",
    components: {
        sidebar,
        history,
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
    display: none;
    width: 90%;
    height: 938px;
    background:  rgba(190, 195, 202, 0.3);
}
.blank{
    display: flex;
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