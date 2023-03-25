<template>
    <body>
        <Footer1 />
    </body>
</template>
<script>
import Footer from "@/components/Footer.vue"
//   import Navbar from "@/components/Navbar.vue"
export default {
    components: {
        //   Navbar,
        Footer
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

@media screen and (max-width: 650px) {

    body {
        margin-top: 70px;
    }

}
</style>

