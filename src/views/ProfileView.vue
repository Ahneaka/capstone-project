<template>
  <body>
    <div class="bg-container d-flex justify-content-center">
      <div class="card my-auto" style="width: 50rem; height: 35rem">
        <div class="card-body">
          <div class="row">
            <h2 style="text-align:center">User Profile Card</h2>
            <div class="col">



              <div class="card-2 class" style="width:400px">
                <div class="image">
                  <img src="https://i.postimg.cc/C1Rxfz5x/My-profile-orange-300x300.png" alt="John" style="height: 70%;">
                </div>
                <h1>John Doe</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>

                <p><button>Contact</button></p>
              </div>

            </div>

            <div class="container">


            </div>


          </div>
        </div>
      </div>
    </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-image: url(https://i.postimg.cc/SKrCDwCC/profile.jpg); */
}

body {
  background-image: url(https://i.postimg.cc/pVJLhHHQ/cloud.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}



.flex-container {
  position: relative;
  right: 0;
  top: 80px;
  /* float: left; */
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.bg-container {
  padding-top: 5rem;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin: auto;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: transparent !important;
  backdrop-filter: blur(10px);
}
</style>