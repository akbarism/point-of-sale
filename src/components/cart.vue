<template>
  <div class="menu-cart">
    <div class="nav-cart">
      <p>Cart</p>
      <div class="count-cart text-white">{{ totalQty }}</div>
    </div>
    <div class="content-cart">
      <div class="empty-cart" v-if="selectedmenu.length == 0">
        <img src="../assets/img/food-and-restaurant.png" alt />
        <h1>Your cart is empty</h1>
        <p>Please add some items from the menu</p>
      </div>
      <div class="idle-cart" v-else>
        <div class="main-list">
          <div class="list-cart" v-for="(item) in selectedmenu" :key="item.id">
            <div class="icon-cart">
              <img :src="item.data.image" alt />
            </div>
            <div class="title-cart">
              <div class="select">
                <h3>{{item.data.name}}</h3>
              </div>
              <div class="min-plus">
                <div class="min" @click="decrement(item)">
                  <p>-</p>
                </div>
                <input
                  type="number"
                  class="numb text-center"
                  v-model="item.count"
                  @change="canotnull(item)"
                />
                <div class="plus" @click="increment(item)">
                  <p>+</p>
                </div>
              </div>
            </div>
            <div class="price-cart font-bold">
              <p>{{item.data.price * item.count}}</p>
            </div>
          </div>
        </div>
        <div class="footer-cart">
          <div class="total">
            <div class="ttl">
              <p>Total :</p>
            </div>
            <div class="rp">
              <p>{{ total }}</p>
            </div>
          </div>
          <div class="ppn">
            <p>*Belum termasuk ppn</p>
          </div>
          <div class="hero-button">
            <button class="submit-cart p-3 w-10/12" @click="$refs.modal.show()">Checkout</button>
            <t-modal class="flex flex-col justify-center" ref="modal">
              <div class="modal-check">
                <div class="title flex w-full">
                  <h1 class="w-3/5 font-black">Checkout</h1>
                  <p class="w-2/5 font-bold">Recept no: {{ invoice }}</p>
                </div>
                <div class="name-cashier mt-3 mb-10 w-full flex">
                  <p>Cashier : {{cashier[0].name_cashier}}</p>
                </div>
                <div class="cecklist-menu flex w-full" v-for="item in selectedmenu" :key="item.id">
                  <h1 class="name-menu w-2/5">{{item.data.name}}</h1>
                  <h2 class="vold w-2/5">{{item.count}} x</h2>
                  <p class="price-tag">Rp. {{item.data.price}}</p>
                </div>
                <div class="add-ppn flex w-full mt-5">
                  <h1 class="w-4/5">Ppn 10%</h1>
                  <p>Rp. {{ ppn }}</p>
                </div>
                <div class="total-list flex w-2/5">
                  <h1 class="flex mr-20">Total :</h1>
                  <p class="flex">Rp. {{mainTotal}}</p>
                </div>
                <div class="payment flex w-full">
                  <h1 class="mr-10 mt-3 mb-3">Payment :</h1>
                  <select name="payment">
                    <option value="ovo">OVO</option>
                    <option value="gopay">Gopay</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div class="flex w-full justify-center items-center flex-col">
                  <button class="print flex justify-center p-3 w-10/12">Print</button>
                  <h1 class="flex justify-center m-1">Or</h1>
                  <button class="send flex justify-center p-3 w-10/12">Send Email</button>
                </div>
              </div>
            </t-modal>
            <button class="cancel-cancel p-3 w-10/12" @click="cancelOrder">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cart",
  data() {
    return {
      getOrder: [],
      total: 0,
      ppn : 0,
      mainTotal: 0,
      totalQty: 0,
      invoice : '#POS'
    };
  },
  computed: {
    selectedmenu() {
      return this.$store.state.selectedmenu;
    },
    cashier() {
      return this.$store.state.getCashier;
    },
    getTotal() {
      return this.$store.state.total;
    }
  },
  methods: {
    increment(data) {
      this.$store.commit("INCREMENT", data);
    },
    decrement(data) {
      this.$store.commit("DECREMENT", data);
    },
    canotnull(data) {
      if (data.count < 1) {
        data.count = 1;
      }
    },
    cancelOrder() {
      this.$store.commit("CANCEL_ORDER");
    },
    grandTotal() {
     this.getOrder = this.selectedmenu;
     if (this.getOrder.length !== 0) {
       const total = [];
       let qty = [];
       // eslint-disable-next-line no-unused-vars
       let aChart = 0
       for (let i = 0; i < this.getOrder.length; i += 1) {
         total.push(this.getOrder[i].data.price * this.getOrder[i].count)
         qty.push(this.getOrder[i].count)
       }
       this.total = total.reduce((a, b) => a + b);
       this.totalQty = qty.reduce((a,b) => a + b)
     }else if (this.getOrder == 0) {
       this.totalQty = 0
     }
    },
    invoiceMaker() {
      const date = new Date().getDate()
      const numberMonth = new Date().getMonth() + 1;
      const month = String(numberMonth);
      const year = new Date().getFullYear()
      let a = Math.floor (10000 + Math.random() * 900000)
      a = String(a)
      a = a.substring(0, 4)
      let result = String(date + month + year)
      this.invoice += result + a
      console.log(this.invoice)
    },
    getPpn() {
      this.ppn = this.total * 0.1
    },
    fixTotal() {
      this.mainTotal = this.total + this.ppn
    },
  },
  mounted() {
    this.$store.dispatch("getCashier");
    this.grandTotal();
    this.invoiceMaker();
  },
  updated() {
    this.grandTotal();
    this.getPpn();
    this.fixTotal();
  }
};
</script>
<style scoped>
* {
  margin: 0;
  margin: 0;
}

.menu-cart {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  font-family: "Airbnb Cereal App Bold";
}
.nav-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 80px;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
}
.nav-cart p {
  margin-right: 3px;
}
.count-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background: #57cad5;
}
.empty-cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px ; */
  width: 100%;
  height: 300px;
  /* background: #ffffff; */
}
.empty-cart img {
  height: 200px;
  width: 200px;
}
.empty-cart p {
  color: #cecece;
}
.idle-cart {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  height: 535px;
}
.main-list {
  width: 100%;
  height: 350px;
  overflow-y: scroll;
}
.list-cart {
  display: flex;
  margin: 10px;
}
.icon-cart img {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
}
.icon-cart {
  width: 80px;
  height: 80px;
}
.title-cart {
  width: 160px;
  height: 80px;
}
.price-cart {
  display: flex;
  align-items: flex-end;
  width: 80px;
  height: 80px;
}
.price-cart p {
  font-family: "Airbnb Cereal App Light";
}
.select {
  display: flex;
  justify-content: flex-end;
  width: 130px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.min-plus {
  display: flex;
  justify-content: center;
  width: 120px;
  height: 35px;
  margin-left: 15px;
}
.min {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 35px;
  border: 1px solid #82de3a;
  background: rgba(130, 222, 58, 0.2);
  cursor: pointer;
}
.numb {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
  border: 1px solid #82de3a;
}
.plus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
  border: 1px solid #82de3a;
  background: rgba(130, 222, 58, 0.2);
  cursor: pointer;
}
.footer-cart {
  margin-top: 10px;
}
.total {
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-left: 15px;
}
.ppn {
  margin-left: 15px;
  font-family: "Airbnb Cereal App Light";
  margin-bottom: 10px;
}
.ppn p {
  font-size: 15px;
}
.hero-button {
  display: flex;
  width: 100%;
  height: 110px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.submit-cart {
  background: #57cad5;
  border: none;
  font-family: "Airbnb Cereal App Bold";
  color: #ffffff;
}
.cancel-cancel {
  background: #f24f8a;
  border: none;
  font-family: "Airbnb Cereal App Bold";
  color: #ffffff;
}
.print {
  background: #57cad5;
  border: none;
  font-family: "Airbnb Cereal App Bold";
  color: #ffffff;
}
.send {
  background: #f24f8a;
  border: none;
  font-family: "Airbnb Cereal App Bold";
  color: #ffffff;
}
.modal-check {
  display: flex;
  font-family: "Airbnb Cereal App";
  flex-direction: column;
}
.total-list {
  margin-left: 298px;
}
/* ---------------css scroll------------------------ */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  /* background: #888;  */
  background: #57cad5;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /* background: #555;  */
  background: #f24f8a;
}
/* ------------css scroll end----------- */
</style>
