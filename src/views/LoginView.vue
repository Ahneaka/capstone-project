<template>
  <body>
    <div class="background">
      <div class="bg-container d-flex justify-content-center">
        <div class="card my-auto" style="width: 40rem; height: 35rem">
          <div class="card-body">
            <form @submit="login" method="post">
              <div class="container">
                <label for="email"><b>Email</b></label>
                <input type="email" v-model="emailAdd" placeholder="Enter email" name="username" required>
                <label for="pass"><b>Password</b></label>
                <input type="password" v-model="userPass" placeholder="Enter Password" name="pass" required>
                <router-link to="/home"><a href="">Login</a></router-link>
              </div>
              <div class="container">
                <button type="button" class="cancel">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a><br>
                  <button class="btn"> <router-link to="/registration"><a href="">Sign up?</a></router-link>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
  
<script>
  export default {
    data() {
      return {
        emailAdd: '',
        userPass: '',
      }
    },
    methods: {
      login(e) {
        e.preventDefault();
        const payload = {
          emailAdd : this.emailAdd, 
          userPass : this.userPass, 
        }
        this.$store.dispatch('login', payload)
      }
    }
  }
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-image: url(https://i.postimg.cc/SKrCDwCC/profile.jpg); */
}
body {
  background-image: url(https://i.postimg.cc/htFK5v0R/sao-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
.flex-container {
  position: relative;
  right: 0;
  top: 80px;
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.bg-container {
  padding-top: 5rem;
}
.card {
  margin: auto;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: transparent !important;
  backdrop-filter: blur(10px);
}
/* .words {
  padding-top: 10%;
} */
nav a {
  color: rgb(69, 68, 68);
  text-decoration: none;
  font-size: 17px;
}
.nav-img {
  width: 20%;
  height: auto;
  margin-left: 0;
  border-radius: 50%;
  float: left;
}
@media screen and (max-width: 767px) {
  .nav-img {
    width: 15%;
    height: auto;
    margin-left: 0;
    border-radius: 50%;
  }
}
nav a:hover {
  background-color: rgba(128, 128, 128, 0.172);
  color: white;
  border-radius: 25px;
  border: solid 1px;
  border-color: rgb(128, 128, 128);
}
.card-content {
  justify-content: space-around;
}
h6 {
  letter-spacing: 6px;
  /* color: #fff; */
  font-family: "Cinzel Decorative", cursive;
}
h5 {
  font-family: "Share Tech Mono", monospace;
}
input[type=email],
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(128, 128, 128);
  box-sizing: border-box;
}
button {
  background-color: rgba(242, 178, 58, 0.801);
  /* color: white; */
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
button:hover {
  opacity: 0.8;
}
.cancel {
  width: auto;
  padding: 10px 18px;
  background-color: #403d40;
}
/* .imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
} */
/* img.avatar {
  width: 40%;
  border-radius: 50%;
} */
.container {
  padding: 16px;
}
span.psw {
  float: right;
  padding-top: 16px;
}
/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancel {
    width: 100%;
  }
}
.btn {
  /* --color1: #1a8516;
  --color2: #236b19; */
  perspective: 1000px;
  padding: 1em 1em;
  background: linear-gradient(rgba(242, 178, 58, 0.801), rgba(242, 178, 58, 0.599));
  border: none;
  outline: none;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 10px 10px #000;
  cursor: pointer;
  transform: rotateX(70deg) rotateZ(30deg);
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
.btn::before {
  content: "";
  width: 100%;
  height: 15px;
  background-color: rgba(242, 178, 58, 0.599);
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotateX(90deg);
  transform-origin: bottom;
}
.btn::after {
  content: "";
  width: 15px;
  height: 100%;
  background-color: rgba(242, 178, 58, 0.801);
  position: absolute;
  top: 0;
  right: 0;
  transform: rotateY(-90deg);
  transform-origin: right;
}
.btn:hover {
  transform: rotateX(30deg) rotateZ(0);
}
</style>