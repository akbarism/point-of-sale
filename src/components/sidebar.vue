<template>
    <div class="side">
        <div class="fork">
            <img @click="$emit('showw')" src="../assets/img/fork.png" alt="">
        </div>
        <div class="clipboard">
            <img @click="$emit('show')" src="../assets/img/clipboard.png" alt="">
        </div>
        <div class="add">
            <img  @click="$refs.modal.show()"  src="../assets/img/add.png" alt="">
        </div>
        <div class="logout " @click="logot">
            <i class="fas fa-sign-out-alt fa-2x text-red-600"></i>
        </div>
        <t-modal class="flex flex-col justify-center" ref="modal">
           <p class="text-xl pb-5">Add Item</p>
            <div class="form-add">
              <!-- --------------- MODAL ------------------- -->
             <form @submit.prevent="add">
          <div class="form-group" >
            <label class="label" for="name">Name</label>
            <input
              type="text"
              
              class="form-control"
              id="name" 
              v-model="menuValue.name"
            />
          </div>
          <div class="form-group">
            <label class="label" for="image">Image</label>
            <input
              type="file"
              ref="file"
              class="form-control"
              id="image"
            />
          </div>
           <div class="form-group">
            <label class="label" for="price">Price</label>
            <input
              type="text"
              class="form-price"
              id="price"
              v-model="menuValue.price"
            />
          </div>
           <div class="form-group">
            <label class="label" for="catgeory">Category</label>
            <select
              type="select"
              class="form-select"
              id="category"
              v-model="menuValue.id_category"
            >
            <option value="1">Chake</option>
            <option value="2">Drink</option>
            <option value="3">Food</option></select>
          </div>
          <div class="hero-btn">
          <button class="cncl  py-3 text-white w-3/12 rounded-md">Cancel</button>
          <button class="add-itm  py-3 text-white w-3/12 rounded-md" @click="add">Add</button>
          </div>
        </form>
            </div>
        </t-modal>
    </div>
</template>
<script>
// import axios from "axios"
import { required, number } from "vuelidate/lib/validators";
export default {
    name: "navbar",
    data(){
      return{
        menuValue: {
          name: "",
          image: null,
          price: "",
          id_category: ""
        },
        
      }
    },
    validations: {
    name: { required },
    price: { required, number }
  },
    //    computed:{
    //     newMenu(){
    //     return this.$store.state.allmenu
    //     } 
    // },
    methods: {
      add(e){
        e.preventDefault();
            const fd = new FormData();
            fd.append("name", this.menuValue.name);
            fd.append("image", this.$refs.file.files[0]);
            fd.append("price", this.menuValue.price);
            fd.append("id_category", this.menuValue.id_category);
            this.$store.dispatch('add', fd)
            this.$router.go('/')
            
        },
        logot(){
          delete localStorage.id_cashier
          delete localStorage.password
          this.$router.push('/login')
        }
    }
}
 
</script>
<style scoped>
.side{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 938px;
    width: 100px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.fork{
    padding: 30px;
}
.fork:hover{
    transform: scale(1.2);
    transition: 0.3s;
}
.clipboard{
    padding: 30px;
}
.clipboard:hover{
    transform: scale(1.2);
    transition: 0.3s;
}

.add{
    padding: 30px;
}
.add:hover{
    transform: scale(1.2);
    transition: 0.3s;
}
.form-add{
    display: flex;
    justify-content: space-between;
}   
.form-group {
  display: flex;
  width: 500px;
  margin: 20px;
}
.form-control {
  width: 350px;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Airbnb Cereal App";

}
.form-price {
  width: 200px;
  height: 50px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Airbnb Cereal App";
}
.form-select {
  width: 150px;
  height: 50px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Airbnb Cereal App";
}
label{
    display: flex;
    align-items: center;
    width: 100px;
    height: 40px;
}
.hero-btn{
    display: flex;
    width: 470px;
    justify-content: flex-end;
}
.cncl{
 background: #F24F8A;
 margin-right: 20px ;
}
.add-itm{
 background: #57CAD5 ;
}
.invalid-feedback{
  z-index: 10;
  color: #F24F8A;
}
</style>