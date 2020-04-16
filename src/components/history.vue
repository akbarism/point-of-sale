<template>
    <div class="history-menu there">
        <div class="income">
        <div class="pink">
            <div class="detail">
            <h5> Today's Income</h5>
            <h1 class="text-3xl">Rp. 1.000.000</h1>
            <p>+2% yesterday</p>
            </div>
            <div class="circle-pink">
            <div class="circle-a"></div>
            <div class="circle-b"></div>
            <div class="circle-c"></div>
            </div>
        </div>
        <div class="blue">
            <div class="detail">
            <h5> Orders</h5>
            <h1 class="text-3xl">3.270</h1>
            <p>+5% Last Week</p>
            </div>
            <div class="circle-pink">
            <div class="circle-a"></div>
            <div class="circle-b"></div>
            <div class="circle-c"></div>
            </div>
        </div>
        <div class="purple">
            <div class="detail">
            <h5> This Years Income</h5>
            <h1 class="text-3xl text-black">Rp. 100.000.000.000</h1>
            <p>+2% Last Year</p>
            </div>
            <div class="circle-pink">
            <div class="circle-a"></div>
            <div class="circle-b"></div>
            <div class="circle-c"></div>
            </div>
        </div>
        </div>
        <div class="revenue">
            <div class="title">
                <h1 class="text-xl">Revenue</h1>
                <div class="round"><select id="month"><option value="month">Month</option></select></div>
            </div>
            <div class="grarik"></div>
        </div>
        <div class="recent">
            <div class="title">
                <h1 class="text-xl">Recent Order</h1>
                <div class="round"><select id="month"><option value="month">Today</option></select></div>
            </div>
            <div class="grarik"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "history"
}
</script>
<style scoped>
.history-menu{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 938px;
}
.there{
    display: none;
}
.income{
    display: flex;
    justify-content: space-around;
    margin-top: 20px ;
    width: 100%;
}
.pink{
    width: 30%;
    height: 180px;
    background: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    box-shadow: 10px 15px 10px rgba(255, 143, 178, 0.25);
    border-radius: 10px;
    }
.blue{
    width: 30%;
    height: 180px;
    background: linear-gradient(285.38deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
    box-shadow: 10px 15px 10px rgba(41, 223, 255, 0.25);
    border-radius: 10px;
    }
.purple{
    width: 30%;
    height: 180px;
    background: linear-gradient(285.38deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
    box-shadow: 10px 15px 10px rgba(241, 201, 236, 0.25);
    border-radius: 10px;
    }
.circle-pink{
    position: relative;
    display: flex;
    margin-top: -130px;
    width: 200px;
    height: 150px;
    margin-left: 165px;
    z-index: 1;

}
.circle-a{
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: rgba(253, 211, 228, 0.3);
    /* margin-right: -40px ; */
    margin-top: 50px;
    margin-right: -50px ;

    }
.circle-b{
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: rgba(253, 211, 228, 0.3);
    margin-right: -40px;
    margin-top: 30px;
    
    }
.circle-c{
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: rgba(253, 211, 228, 0.3);
    margin-right: 10px;
    margin-top: 10px;
    }
.detail{
    margin-top: 30px ;
    margin-left: 20px ;
    z-index: 3;
    opacity: 1;
}
.revenue{
    display: flex;
    justify-content: center;
    width: 97%;
    height: 300px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 10px;
}
.title{
    display: flex;
    margin-top: 10px;
    width: 95%;
    justify-content: space-between;

}
.round{
    display: flex;
    justify-content: center;
    width: 100px;
    height: 30px;
    background: #CECECE;
    border-radius: 5px;
}
#month{
    background: none;
    border: none;
}
.recent{
    display: flex;
    justify-content: center;
    width: 97%;
    height: 380px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 10px;
}
</style>