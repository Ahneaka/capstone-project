<template>
 <body>
  <section>
    <div class="reg animate__animated animate__zoomInUp container">
    <form @submit.prevent="SignUp">
    <div class="">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <div class="row">
        <label for="first"><b>first name</b></label>
        <input type="text" v-model="payload.firstName" placeholder="Enter First name" name="first" required>
      </div>

      <div class="row">

        <label for="last"><b>Last name</b></label>
        <input type="text" v-model="payload.lastName" placeholder="Enter Last name" name="name" required>
      </div>

      <div class="row">
        <label for="gender"><b>Gender</b></label>
        <input type="text" v-model="payload.gender" placeholder="Enter gender" name="gender" required>
      </div>

      <div class="row">
        <label for="email"><b>Email</b></label>
        <input type="text" v-model="payload.emailAdd" placeholder="Enter Email" name="email" id="email" required>
      </div>

      <div class="row">
        <label for="cellNumber"><b>Cell</b></label>
        <input type="text" v-model="payload.cellphoneNumber" placeholder="Enter Cellphone Number" name="cellNumber"
          id="cellNumber" required>
      </div>

        <div class="row">
          <label for="psw"><b>Password</b></label>
          <input type="password" v-model="payload.userPass" placeholder="Enter Password" name="psw" id="psw" required>
        </div>
      <hr>


    

      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <button type="submit" class="registerbtn">Register</button>
    </div>

    <div class="container signin">
      <p>Already have an account? <router-link to="/"><a href="">Login</a></router-link></p>
    </div>
    <HelloWorld msg="Welcome" />
  </form>
  </div>
  </section>
 </body>
  </template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  data() {
    return {
      register: {
        firstName: '',
        lastName: '',
        gender: '',
        cellphoneNumber: '',
        emailAdd: '',
        userPass: '',
      
      }
    }
  },
  setup() {
    const payload = {
      firstName: '',
      lastName: '',
      gender: '',
      cellphoneNum: '',
      emailAdd: '',
      userPass: '',
     
    
    };
  
    const store = useStore();
    const signUp = () => {
      store.dispatch("register", payload);
        store.dispatch("fetchUsers");
    }
    const userMsg =
      computed(() => store.state.message)
    return {
      payload,
      userMsg,
      signUp
    }
  },

  computed: {
    message() {
      return this.$store.state.message
    }
  },
  methods: {
    async SignUp() {
      await this.$store.dispatch('register', this.payload);
      this.payload.firstName = '';
      this.payload.lastName = '';
      this.payload.gender = '';
      this.payload.cellphoneNumber = '';
      this.payload.emailAdd = '';
      this.payload.userPass = '';

    }
  }
}

</script> 

<style scoped>
 * {
    box-sizing: border-box;
    /* background-image: url(https://i.postimg.cc/SKrCDwCC/profile.jpg); */
}

body{
  padding-top: 120px;
  background: url(https://i.postimg.cc/fWXgL1pm/pngegg.png)no-repeat;
  background-color: rgba(255, 192, 203, 0.714);
  
  background-size: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

section{
  padding-top: 5%;
}
</style>