<template>
  <div class="vue-tempalte"  >
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="http://fuelbuddy.in/" target="_blank">
           fuelbuddy.in
        </a>
        <ul class="nav navbar-nav flex-row float-right ">
          <li class="nav-item mr-3">
            <router-link class="nav-link pr-3 mr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item " v-bind:style="{ marginLeft: '8px' }">
            <router-link class="btn btn-outline-primary " to="/">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>