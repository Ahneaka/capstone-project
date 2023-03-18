<template>
    <body>
      <div v-if="items">
        <section>
    <div data-aos="zoom-in animate__animated animate__zoomInUp">
      <h1 class="heading animate__animated animate__zoomInUp">Products</h1>
      <div class="container-fluid">
        <!-- <div class="" id="cards"></div> -->
        <div class="row">
          <div class="col g-1 my-2 mx-2" v-for="item in items" :key="item.id">
            <div class="card">
               <!-- <img src="" id="img" alt="short-surfboard"> -->
            <!-- <div class="card"> -->
              <img :src="item.imgURL" alt="" class="card-img-top" style="width: 15rem; height: 250px;">
              <div class="card-body">

                <h5 class="name">{{ item.prodName }}</h5>
                <p class="description">{{ item.prodDescription }}</p>
                <p class="price">R{{ item.price }}</p>
                <router-link :to="{name: 'single', params: {id: item.id}}" ><a href="#" class="btn btn-primary">View more </a></router-link>
              </div>
            </div>
           
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<div v-else>
  <something />
</div>
    </body>
  </template>

<script>
import axios from "axios";
import something from '../components/Spinner.vue'

export default {
    name: 'Products',
    components: { something
   },
//   setup() {
//     const store = useStore();
//     store.dispatch("fetchProducts")
//     let products = computed(() => store.state.products);
//     return {
//       products,
//     }
//   }

data(){
    return{
        items: this.$store.state.products,
    };
},
created(){
    this.fetchProducts();
},
methods:{
    async fetchProducts(){
        const res = await axios.get(
            `https://arcadian.onrender.com/products`
        );
        this.items = res.data.results;
        console.log(res);
    },
},
};
</script>

  <style scoped>
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-image: url(https://i.postimg.cc/SKrCDwCC/profile.jpg); */
}

body {
    background-image: url(https://i.postimg.cc/tRzCjrd5/140-1403845-bunga-png-japanese-cherry-blossom-png.png);
    background-color: rgba(255, 192, 203, 0.714);
    background-size: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding-top: 70px;
}

.card-body {
  height: 22rem;
}

.row {
  justify-content: center;
  align-items: center;
}

.card{
  align-items: center;
}

section{
    padding-top: 5%;
}
</style>