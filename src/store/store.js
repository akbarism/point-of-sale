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
        count: 1
        
    },
    getters:{
        
    },
    mutations: {
        GET_MENU(state, data){
            state.allmenu = data;
        },

        ADD_MENU(state, data){
            state.allmenu = data
        }
        ,
        SELECT_MENU(state, id_menu){
            const data = state.allmenu.filter(item => item.id_menu === id_menu)
            const selected = state.selectedmenu.filter(item => item.id_menu === id_menu)
            // const dataSelected = {
            //     id_menu: data[0].id_menu,
            //     name: data[0].name,
            //     image: data[0].image,
            //     id_category: data[0].id_category,
            //     price: data[0].price,
            //     count: 1
                
            // }
            if (state.selectedmenu.length === 0 || selected[0] === undefined) {
                state.selectedmenu.push(data[0])
              }  
        },
        GET_MSG(state, error){
            state.msg = error
        },
        COUNT(state){
            return state.count++
        }
    },
    actions: {

        getMenu(context, komodo){
            axios
            .get(`process.env.APP_VUE_URL_PAGE ${komodo}`)
            .then(res =>{
                context.commit ('GET_MENU', res.data.result)
            })
            .catch(err => {
                console.log(err);
                
            });

        },
        add(context, data){
            axios.post(process.env.VUE_APP_URL_ADD, data)
            .then(res => {
                res.data
                console.log(data);
                
            })
            .catch((error)=>{
                context.commit('GET_MSG', error.response.data.err)
            })
          },
        isLogin(context, data){
            return new Promise((resolve)=>{
                axios
                .post("http://localhost:2000/cashier/login", data)
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
    }
})