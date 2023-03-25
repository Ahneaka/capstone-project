<template>
  <body>
    <section>
      <div v-if="product" data-aos="zoom-in">
        <div class="heading animate__animated animate__zoomInUp">
          <h1>Product</h1>
        </div>
        <div class="container-fluid">
          <div class="" id="cards"></div>
          <div class="row">
            <div class="col-3 card g-1 my-2 mx-2">
              <div class="card-body">
                <img :src="product.imgURL" alt="">
                <h5 class="name">{{ product.prodName }}</h5>
                <p class="description">{{ product.prodDescription }}</p>
                <p class="price">R{{ product.price }}</p>
                <a href="#" class="btn btn-primary">Add to checkout </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.id)
  },
}
</script>

<style scoped>
section {
  padding-top: 5%;

}

body {
  background-image: url(https://i.postimg.cc/tRzCjrd5/140-1403845-bunga-png-japanese-cherry-blossom-png.png);
  background-color: rgba(255, 192, 203, 0.714);
  background-size: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-top: 30px;
}

.container-fluid {
  justify-content: center;
  display: flex;
  align-content: center;
}

img {
  /* width: 100px; */
  max-width: 300px;
  /* height: 250px; */
  min-height: 200px;
}

.card {
  display: flex;
  padding-top: 1em;
  align-self: center;
  width: 100%;
  justify-content: center;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 18px;
}

@media screen and (max-width:650px) {

  img {
    /* width: 250px; */
    min-width: 150px;
    max-width: 165px;
    height: auto;
    align-self: center;
  }

  .card {
    min-width: 200px;
    max-width: 165px;
    height: auto;
    align-self: center;
    justify-content: center;
  }

  body {
    /* background-image: url(https://i.postimg.cc/tRzCjrd5/140-1403845-bunga-png-japanese-cherry-blossom-png.png); */
    /* background-color: rgba(255, 192, 203, 0.714); */
    background-size: center;
    background-repeat: no-repeat;
    /* min-height: 100vh; */
    padding-top: 70px;
  }
}</style>