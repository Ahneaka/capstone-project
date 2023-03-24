<template>
  <body>
    <section>
      <div class="reg animate__animated animate__zoomInUp container">
        <form @submit.prevent="register">
          <div class="">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
            <div class="row">
              <label for="first"><b>first name</b></label>
              <input type="text" v-model="firstName" placeholder="Enter First name" name="first" required>
            </div>
            <div class="row">
              <label for="last"><b>Last name</b></label>
              <input type="text" v-model="lastName" placeholder="Enter Last name" name="name" required>
            </div>
            <div class="row">
              <label for="gender"><b>Gender</b></label>
              <input type="text" v-model="gender" placeholder="Enter gender" name="gender" required>
            </div>
            <div class="row">
              <label for="email"><b>Email</b></label>
              <input type="text" v-model="emailAdd" placeholder="Enter Email" name="email" id="email" required>
            </div>
            <div class="row">
              <label for="cellNumber"><b>Cell</b></label>
              <input type="text" v-model="cellphoneNumber" placeholder="Enter Cellphone Number" name="cellNumber"
                id="cellNumber" required>
            </div>
            <div class="row">
              <label for="psw"><b>Password</b></label>
              <input type="password" v-model="userPass" placeholder="Enter Password" name="psw" id="psw" required>
            </div>
            <hr>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button type="submit" class="registerbtn" @click="($event) => register()">Register</button>
          </div>
          <div class="container signin">
            <p>Already have an account? <router-link to="/"><a href="">Login</a></router-link></p>
          </div>
        </form>
      </div>
    </section>
  </body>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      cellphoneNumber: '',
      emailAdd: '',
      userPass: '',
      userRole: 'User',
      userProfile: 'https://i.postimg.cc/26Y1n3gw/3445053.png',
    }
  },
  computed: {
    message() {
      return this.$store.state.message
    }
  },
  methods: {
    register() {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        cellphoneNumber: this.cellphoneNumber,
        emailAdd: this.emailAdd,
        userPass: this.userPass,
        userRole: this.userRole,
        userProfile: this.userProfile,
      }
      this.$store.dispatch('register', payload);
    }
  }
}
</script> 
<style scoped>
* {
  box-sizing: border-box;
  /* background-image: url(https://i.postimg.cc/SKrCDwCC/profile.jpg); */
}
body {
  padding-top: 120px;
  background: url(https://i.postimg.cc/fWXgL1pm/pngegg.png)no-repeat;
  background-color: rgba(255, 192, 203, 0.714);
  background-size: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
section {
  padding-top: 5%;
}
</style>