<template>
  <body>

    <section>

      <h1 class="heading animate__animated animate__zoomInUp">Users</h1>

      <div data-aos="zoom-in">
        <div class="container">
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th>first name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Role</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userRole }}</td>
                <!-- <td>R{{ user.userProfile }}</td> -->
                <td>
                  <button type="button" class="btn btn-edit mt-4 mb-4" data-bs-toggle="modal"
                    :data-bs-target="`#exampleModal${user.userID}`">
                    Edit user
                  </button>
                  <div class="modal fade" :id="`exampleModal${user.userID}`" tabindex="-1"
                    aria-labelledby="exampleModalLabel2" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title mx-auto me-3" id="exampleModalLabel2">New user</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="addProduct" action="POST">
                            <div class="mb-3">
                              <input type="text" class="form-control input" id="name" :value="user.firstName">
                            </div>
                            <div class="mb-3">
                              <input type="text" class="form-control input" id="description" :value="user.lastName">
                            </div>
                            <div class="mb-3">
                              <input type="text" class="form-control input" id="price" :value="user.emailAdd">
                            </div>
                            <div class="mb-3">
                              <input type="text" class="form-control input" id="quantity" :value="user.userRole">
                            </div>

                            <div class="modal-footer">
                              <button type="submit" class="add">Add</button>

                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td><a href="#" class="btn btn-delete">Delete</a></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <!-- product table -->

      <h1 class="heading animate__animated animate__zoomInUp">Products</h1>
      <div>
        <AddProduct/>
      </div>


      <div class="container">


        <table class="table table-hover table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>price</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodDescription }}</td>
              <td>R{{ product.prodQuantity }}</td>
              <td>R{{ product.price }}</td>

              <td><button type="button" class="btn btn-edit mt-4 mb-4" data-bs-toggle="modal"
                  :data-bs-target="`#exampleModal${product.id}`">
                  Edit user
                </button>
                <div class="modal fade" :id="`exampleModal${product.id}`" tabindex="-1"
                  aria-labelledby="exampleModalLabel2" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title mx-auto me-3" id="exampleModalLabel2">New product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="addProduct" method="POST">
                          <div class="mb-3">
                            <input type="text" class="form-control input" id="name" v-model="prodName">
                          </div>
                          <div class="mb-3">
                            <input type="text" class="form-control input" id="description" v-model="prodDescription">
                          </div>

                          <div class="mb-3">
                            <input type="text" class="form-control input" id="quantity" v-model="prodQuantity">
                          </div>

                          <div class="mb-3">
                            <input type="text" class="form-control input" id="price" v-model="price">
                          </div>
                          <div class="modal-footer">
                            <button type="submit" @click="addProduct" class="btn btn-edit" id="add-btn">Add</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td><button type="button" @click="$event =>this.$store.dispatch('deleteProduct', product.id)" class="btn">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </body>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'
import AddProduct from '../components/AddProduct.vue';
export default {
  setup(){
    const store = useStore();
    store.dispatch('fetchProducts');
    store.dispatch('fetchUsers');
    let user = computed(()=> store.state.user);
    let products = computed(() => store.state.products);
    let users = computed(() => store.state.users);
    const deleteProduct = async (id) => {
      store.dispatch('deletedProduct', id);
      store.dispatch('fetchProducts');
      store.dispatch('fetchUsers');
      location.reload();
    }
    return{
      AddProduct,
      products,
      users,
      user,
      deleteProduct,
    }
  },
  components: {
    AddProduct,
  },
  computed: {
    product() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  }
}

</script>

<style scoped>
section{
    padding-top: 5%;
    
}
body {
  background-image: url(https://i.postimg.cc/tRzCjrd5/140-1403845-bunga-png-japanese-cherry-blossom-png.png);
  background-color: rgba(255, 192, 203, 0.714);
  background-size: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-top: 70px;
}

.container{
  justify-content: center;
  display: flex;
  align-content: center;
}

img{
  /* width: 100px; */
  max-width: 300px;
  /* height: 250px; */
  min-height: 200px;
}
.card{
  display: flex;
  padding-top: 1em;
  align-self: center;
  justify-content: center;
}
@media screen and (max-width:768px) {

img{
  /* width: 250px; */
  min-width: 150px;
  max-width: 165px;
  height: auto;
  align-self: center;
}

.card{
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
  /* padding-top: 70px; */
}
}
</style>




