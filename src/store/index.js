import { createStore } from 'vuex'
import axios from 'axios';
const renderLink = "https://arcadian.onrender.com/";
import router from '../router/index'
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: true,
    error:null 
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, spinner) {
      state.spinner = spinner
    },
    setError(state, error){
      state.error = error
    }
  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${renderLink}Users`);
      const {results, err} = await res.data;
      if (results){
        context.commit('setUsers', results)
}else{
  context.commit('setError', err)
}
    },

    async fetchUserById(context,id){
      const res = await axios.get(`${renderLink}/User/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUser', results)
      }else{
        context.commit('setError', err)
      }
    },

    async updateUser(context, payload){
      const res = await axios.put(`${renderLink}/user/${payload.userID}`, payload);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUser', results)
      }else{
        context.commit('setError', err)
      }
    },

    async fetchProducts(context){
      const res = await axios.get(`${renderLink}products`);
      const {results, err} = await res.data;
      console.log(results)
      if(results){
        context.commit('setProducts', results)
      }else{
        context.commit('setError', err)
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${renderLink}product/${id}`);
      const { results } = await res.data;
      context.commit("setProduct", results[0]);
    },
    async register(context, payload) {
      const res = await axios.post(`${renderLink}/register`, payload);
      const {msg, err} = await res.data;
      if (msg) {
        router.push('/')
      context.commit('setError', msg)
      } else {
        context.commit('setError',err)
      }
    },
    async login(context, payload){
      console.log(payload);
      axios.post("http://localhost:3030/login", payload)
      // axios.post(`${renderURL}login`, payload)
        .then(response => {
          // Handle success.
          // gets the whole response
          console.log(response);
          if(response.data.msg) {
            // gets the msg
            console.log(response.data.msg);
            // gets the token
            console.log(response.data.token);
            // gets the user data
            console.log(response.data.result);
          } else {
            // gets error message
            console.log(response.data.err);
          }
          })
          .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
          });
    },
         
  },
   
  
  modules: {
  }
})
