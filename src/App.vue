<template>
  <div>
     <Navbar/>
   
  <router-view/>
  </div>
 
</template>
<script>
import Footer from '@/components/Footer.vue'
import Navbar from "@/components/Navbar.vue"

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Cinzel+Decorative:wght@900&family=Press+Start+2P&family=Share+Tech+Mono&display=swap');
#app {
  margin: 0;
  padding: 0;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
}

.navbar{
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: transparent !important;
  backdrop-filter: blur(10px);
}

nav a {
  color: rgb(69, 68, 68);
  text-decoration: none;
  font-size: 17px;
}

nav a:hover {
  background-color: rgba(242, 178, 58, 0.466);
  color: white;
  border-radius: 70px;
  /* border: solid 1px; */
  /* border-color: rgb(128, 128, 128); */
}

h1{
  font-family: 'Press Start 2P', cursive;
}

</style>
