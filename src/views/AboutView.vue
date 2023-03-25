<template>
  <body>
    <section>
      <div class="bg-container d-flex justify-content-center">
        <div class="card my-auto" style="width: 70rem; height: 35rem">
          <div class="card-body">
            <h3>Arcadian</h3>
            <br>
            <p>
              Welcome to the Arcadian, you will be able to purchase your skins for guns in games as well as more from our
              collaborating anime. <br>
              You can also purchase one of our anime characters to wait in your lobby. May your purchase lead you to
              victory in your battles Arcadian.
            </p>
            <div class="collaborations">
              <a href="#"><i class="fa-brands fa-xbox"></i></a>
              <a href="#"><i class="fa-brands fa-playstation"></i></a>
              <a href="#"><i class="fa-brands fa-windows"></i></a>
              <a href="#"><i class="fa-brands fa-apple"></i></a>
              <a href="#"><i class="fa-brands fa-android"></i></a>

            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer1 />
  </body>
</template>

<script>
import Footer1 from "@/components/Footer.vue"
// import Navbar from "@/components/Navbar.vue"
export default {
  components: {
    // Navbar,
    Footer1
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Cinzel+Decorative:wght@900&family=Press+Start+2P&family=Share+Tech+Mono&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Press Start 2P', cursive;
  /* background-image: url(https://i.postimg.cc/SKrCDwCC/profile.jpg); */
}

body {
  background-image: url(https://i.postimg.cc/pVJLhHHQ/cloud.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

section {
  padding-top: 140px;

}

.card {
  margin: auto;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: transparent !important;
  backdrop-filter: blur(10px);
}

section .collaborations {
  /* height: 70%; */
  margin: 10px;
}

section h3 {
  font-size: 100px;
  line-height: 1;
  color: rgb(242, 177, 58);
}

.copyright {}

@media screen and (max-width: 650px) {

  body {
    /* margin-top: 70px; */
    background-image: url(https://i.postimg.cc/pVJLhHHQ/cloud.jpg);
    background-size: center;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  section {
    padding-top: 40px;

  }

  section h3 {
    padding-top: 50px;
    font-size: 35px;
    line-height: 1;
    color: rgb(242, 177, 58);
  }

}
</style>