<template>
   <body>
    <div class="bg-container d-flex justify-content-center">
      <div class="card my-auto" style="width: 50rem; height: 35rem">
        <div class="card-body">
<div class="row">
  <div class="col">
    <div class="card-2" style="width:400px">
  <img class="card-img-top " src="https://i.postimg.cc/C1Rxfz5x/My-profile-orange-300x300.png" alt="Card image" style="height: 70%;">
  <br>
  <div class="col"><h1>Username</h1><br><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> Debitis in quibusdam facilis quae doloribus, atque animi assumenda amet facere,<br> omnis voluptatem asperiores necessitatibus eius odit <br>repudiandae iure placeat, possimus magni!</p></div>
  
</div>
<div class="col"></div>

</div>

<div class="container">

  <!-- <div class="card-2" style="width:350px">
  <img class="card-img-top" src="https://i.postimg.cc/SKrCDwCC/profile.jpg" alt="Card image" style="height: 70%;"> -->
 
</div>


        </div>
      </div>
    </div>
      </div>
     </body>  
  </template>

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

.card-2{
  /* float: left; */
  /* width: 30%;
  height: 300px; 
  background: #ccc;
  padding: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-left: 200px;
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

.card {
  margin: auto;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: transparent !important;
  backdrop-filter: blur(10px);
}
  </style>