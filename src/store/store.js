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
        totalPages: [],
        total: []
        
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
            if (state.selectedmenu.length === 0 || selected[0] === undefined) {
                state.selectedmenu.unshift(data[0])
              }
              
              
              
            //   else {
            //     if (data.id === selected[0].id_menu) {
            //       const currentId = state.selectedmenu.map(item => item.id_menu).indexOf(id_menu)
            //       state.selectedmenu.splice(currentId, 1)
            //       return
            //     }
            //     state.selectedmenu.push(data)
            //   }
                
                
        }
    },
    actions: {
        
        getMenu(context, komodo){
            axios
            .get(`http://localhost:2000/menu/?page=${komodo}`)
            .then(res =>{
                context.commit ('GET_MENU', res.data.result)
                // context.state.total = res.data.total;
                // context.state.totalPages = Math.ceil(this.total / 9)
            })
            .catch(err => {
                console.log(err);
                
            });

        },
        add(e, context){
            e.preventDefault();
            const fd = new FormData();
            fd.append("name", this.menuValue.name);
            fd.append("image", this.$refs.file.files[0]);
            fd.append("price", this.menuValue.price);
            fd.append("id_category", this.menuValue.id_category);
            axios.post(`http://localhost:2000/menu/`, fd)
            .then(res => {
              context.commit ('ADD_MENU', res.data)
              this.$router.go('/')
             
              
            })
          }
    }
})