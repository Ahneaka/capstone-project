import { createStore } from "vuex";
import axios from "axios";
const renderLink = "https://arcadian.onrender.com/";
import router from "../router/index";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: true,
    error: null,
    asc: true
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, spinner) {
      state.spinner = spinner;
    },
    setError(state, error) {
      state.error = error;
    },
    setMessage(state, value) {
      state.products = value;
    },

  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${renderLink}Users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setError", err);
      }
    },

    async fetchUserById(context, id) {
      const res = await axios.get(`${renderLink}/User/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUser", results);
      } else {
        context.commit("setError", err);
      }
    },

    async updateUser(context, payload) {
      const res = await axios.put(
        `${renderLink}/user/${payload.userID}`,
        payload
      );
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUser", results);
      } else {
        context.commit("setError", err);
      }
    },


    async fetchProducts(context) {
      const res = await axios.get(`${renderLink}products`);
      const { results, err } = await res.data;
      console.log(results);
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setError", err);
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${renderLink}product/${id}`);
      const { results } = await res.data;
      context.commit("setProduct", results[0]);
    },

    async register(context, payload) {
      console.log(payload);
      fetch("https://arcadian.onrender.com/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          router.push({ name: '/' })
        })
        .catch((err) => {
          console.log(err);

        })
    },
    async addProduct(context, payload) {
      console.log(payload);
      fetch("https://arcadian.onrender.com/product", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("setProducts", data);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    async deleteProduct(context, id) {
      console.log(id);
      let res = await axios.delete(`${renderLink}product/${id}`);
      let msg = await res.data.msg;
      if (msg) {
        context.dispatch('fetchProducts');
      }
      if (msg) {
        context.commit("setMessage", msg);
      }
    },
    async login(context, payload) {
      console.log(payload);
      fetch("https://arcadian.onrender.com/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            context.commit("setMessage", data);
            router.push({ name: 'home' })
          }
        });
    },
  },


  modules: {},
});
