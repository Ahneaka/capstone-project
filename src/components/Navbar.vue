<template>
    <nav class="navbar navbar-expand-md fixed-top">
      <div class="container">
        <div class="d-flex">
          <a href="" class="navbar-brand m-auto">
            <img class="nav-img d-inline-block" img src="https://i.postimg.cc/7h5gy5k0/1667550652766.jpg" width="30px"
              height="10px" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav text-center mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="page-scroll nav-link"><router-link to="/home">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="page-scroll nav-link"><router-link to="/profile">Profile</router-link></a>
            </li>
            <li class="nav-item">
              <a class="page-scroll nav-link"><router-link to="/about">About</router-link></a>
            </li>
            <li class="nav-item">
              <a class="page-scroll nav-link"><router-link to="/inventory">Inventory</router-link></a>
            </li>
            <li class="nav-item">
              <a class="page-scroll nav-link"><router-link to="/products">Products</router-link></a>
            </li>
            <li class="nav-item">
              <a class="page-scroll nav-link"><router-link to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link></a>
            </li>

            <li class="nav-item">
              <a class="page-scroll nav-link"><router-link to="/Contact"><i class="fa-solid fa-phone"></i></router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script>
export default {
  name: 'Navbar'
  }
</script>
  