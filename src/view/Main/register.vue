<template>
    <div class="gray">
        <div class="content-modal">
            <img src="../../assets/img/poslog.png">
            <div class="for-flex"><h1 class="text-2xl font-bold">REGISTER</h1></div>
            <form @submit.prevent="add" class="flex justify-center flex-col">
            <div class="form-group" >
            <label class="text-xl font-bold" for="fullname">password</label>
            <input
              type="text"
              class="form-control"
              id="fullname" 
              v-model="name"
              :class="$v.name.$error ? 'bg-red-200 placeholder-red-500' : 'bg-white'"
            />
            <!-- <div v-if="submitted && $v.email.$error" class="text-red-500 font-semibold ml-1">
                  <span v-if="!$v.name.required">Required</span>
              </div> -->
          </div>
            <div class="form-group" >
            <label class="text-xl font-bold" for="name">Email</label>
            <input
              type="email"
              class="form-control"
              id="name"
              v-model="email"
              :class="$v.email.$error ? 'bg-red-200 placeholder-red-500' : 'bg-white'" 
            />
            <div v-if="submitted && $v.email.$error" class="text-red-500 font-semibold ml-1">
                  <span v-if="!$v.email.required">Required</span>
                  <span v-if="!$v.email.email">Invalid Email</span>
              </div>
          </div>
          <div class="form-group" >
            <label class="text-xl font-bold" for="name">password</label>
            <input
              type="password"
              class="form-control"
              id="name" 
              v-model="password"
              :class="$v.password.$error ? 'bg-red-200 placeholder-red-500' : 'bg-white'"
            />
            <div v-if="submitted && !$v.password.required"
              class="text-red-500 font-semibold ml-1">
                Required
              </div>
          </div>
          <div class="form-group">
          <button @click="login" class="add-itm  py-3 text-white w-full ">Sign Up</button>
          <p class="text-lg mt-3 font-semibold">have an account?? <router-link to='/' class="ok">log in</router-link></p>
          </div>
        </form> 
        </div>
    </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators';
// import axios from 'axios'
export default {
    name: "register",
    data(){
        return{
            email: '',
            name: '',
            password:'',
            submitted: false,
            error: false
        }
    },
    validations: {
    email: { required, email },
    password: { required },
  },
    methods: {
    login(e) {
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
            }else{
                this.$store.dispatch('isLogin', {email: this.email, password: this.password})
                .then((res) => {
                    res
                this.$router.push('/');
        });
            }
        },
     }
      
}
</script>
<style scoped>
    .gray{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
    }
    .content-modal{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 430px;
        width: 430px;
        background: #ffffff;
        border-radius: 5px;
    }
    .content-modal img{
        object-fit: cover;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-top: -100px;
    }
    .for-flex{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 40px ;
        margin-top: -30px;

    }
    .form-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 310px;
    margin-bottom: 10px;
    }
    .form-control {
    width: 310px;
    height: 50px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    font-family: "Airbnb Cereal App";
    }
    .add-itm{
    background: #F24F8A ;
}
.ok{
    color: #57CAD5 ;
}
</style>
