import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import axios from 'axios'
export const store = new Vuex.Store({
    state: {
        // titles: 'Food Items',
        allmenu: [],
        selectedmenu: [],
        currentPage: 1,
        msg: '',
        getCashier: [],
        idCashier : null,
        total: 0
    },
    getters:{
        
    },
    mutations: {
        GET_MENU(state, data){
            state.allmenu = data;
        },
        GET_CASHIER(state, data) {
            state.getCashier = data;
        },
        ADD_MENU(state, data){
            state.allmenu = data
        },
        SELECT_MENU(state, data){
            const items = state.selectedmenu.find((item) => item.data.id_menu === data.data.id_menu)
            if (!items) {
                state.selectedmenu.push(data)
            }
        },
        GET_MSG(state, error){
            state.msg = error
        },
        INCREMENT(state, data){
            let items = state.selectedmenu.find((item) => item.data.id_menu === data.data.id_menu)
            if (items) {
                items.count += 1;
            }
        },
        DECREMENT(state, data){
            let items = state.selectedmenu.find((item) => item.data.id_menu === data.data.id_menu)
            if (items) {
                if (items.count <= 1) {
                    state.selectedmenu = state.selectedmenu.filter(item => item != items)
                }else {
                    items.count -= 1;
                }
            }
        },
        CANCEL_ORDER(state) {
            state.selectedmenu = []
        }
    },
    actions: {

        getMenu(context){
            axios
            .get(process.env.VUE_APP_URL + "menu")
            .then(res =>{
                context.commit ('GET_MENU', res.data.result)
            })
            .catch(err => {
                console.log(err);
            });
        },
        getCashier(context) {
            axios
            .get(process.env.VUE_APP_URL + "cashier/" + localStorage.id_cashier)
            .then(res =>{
                context.commit ('GET_CASHIER', res.data.result)
            })
            .catch(err => {
                console.log(err);
            });
        },
        add(context, data){
            axios.post(process.env.VUE_APP_URL + "menu", data)
            .then(res => {
                res.data
            })
            .catch((error)=>{
                context.commit('GET_MSG', error.response.data.err)
            })
          },
        isLogin(context, data){
            return new Promise((resolve)=>{
                axios
                .post(process.env.VUE_APP_URL + "cashier/login", data)
                .then((res) => {
                    localStorage.setItem('id_cashier', res.data.result.id_cashier)
                    localStorage.setItem('password', res.data.result.password)
                    resolve(res)
                  })
                  .catch((error) => {
                    context.commit('GET_MSG', error.response.data.err); 
                  });   
            })
          },
        register(context, data) {
            return new Promise((resolve)=> {
                axios
                .post(process.env.VUE_APP_URL + "cashier/register", data)
                .then((res)=> {
                    resolve(res)
                })
                .catch((error)=> {
                    context.commit('GET_MSG', error.response.data.err)
                })
            })
        }
    }
})