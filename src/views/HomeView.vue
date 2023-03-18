<template>
  <body>
    <h1>WELCOME TO MY REALM <br>ARCADIAN</h1>
  </body>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Cinzel+Decorative:wght@900&family=Press+Start+2P&family=Share+Tech+Mono&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-image: url(https://i.postimg.cc/SKrCDwCC/profile.jpg); */
}

 body{
    background-image: url(https://i.postimg.cc/bYC4gvqz/gi-home-bg.jpg);
    /* background-image: url(https://i.postimg.cc/Px7CpDkS/pine-genshin-impact-ganyu-render-by-dk-nb-deh3q84-fullview.png); */
    background-position: cover;
    background-repeat: no-repeat;
    /* overflow: hidden; */
    min-height: 100vh;
    background-size: cover;
}

h1{
  padding-top: 500px;
  font-family: 'Press Start 2P', cursive;
}
</style>
