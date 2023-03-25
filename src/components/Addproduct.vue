<template>
  <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addModal">
    Add Product
  </button>
  <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-dark" id="exampleModalLabel">
            Add Product
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="modal-body" @submit.prevent="addProduct">
          <input type="text" name="prodName" id="prodName" required placeholder="Product Name" v-model="prodName"
            class="input" />
          <input type="text" name="prodDescription" id="prodDescription" required placeholder="Product Description"
            v-model="prodDescription" class="input" />
          <input type="text" name="category" id="category" required placeholder="Category" v-model="category"
            class="input" />
          <input type="number" name="price" id="price" required placeholder="Price" v-model="price" class="input" />
          <input type="text" name="imgURL" id="imgURL" required placeholder="Product Image URL" v-model="imgURL"
            class="input" />
          <button class="btn btn-secondary" type="submit" @click="($event) => addProduct()">
            Add Product
          </button>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodName: "",
      prodDescription: "",
      category: "",
      price: "",
      imgURL: "",
    };
  },

  methods: {
    addProduct() {
      const payload = {
        prodName: this.prodName,
        prodDescription: this.prodDescription,
        category: this.category,
        price: this.price,
        imgURL: this.imgURL,
      };
      this.$store.dispatch("addProduct", payload);
    },
  },
};
</script>
