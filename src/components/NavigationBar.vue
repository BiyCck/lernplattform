<template>
    <!-- Navigation -->
    <!-- Icons by Google: https://fonts.google.com/icons -->
    <div class="container-fluid p-0 fixed-top">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <img style="height:52px" src="../../public/1200px-HSBA_Hamburg_School_of_Business_Administration_Logo_2018_nur_Wappen.svg.png" class="img-thumbnail px-1" alt="...">
            <router-link to="/">
              <a class="navbar-brand fw-bolder px-2" href="index.html">Digital Labour</a>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link to="/lektion">
                    <a class="nav-link">
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col p-0">
                                    <span class="material-symbols-outlined">
                                        school
                                    </span>
                                </div>
                                <div class="col fw-bold">
                                    Lektionen                           
                                </div>
                            </div>
                        </div>    
                    </a>
                </router-link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">
                    <div class="container text-center">
                        <div class="row align-items-start">
                            <div class="col p-0">
                                <span class="material-symbols-outlined">
                                shopping_cart
                                </span>
                            </div>
                            <div class="col fw-bold">
                                Preisliste                           
                            </div>
                        </div>
                    </div>
                </a>
                </li>
            </ul>
            <router-link to="/login">
            <button class="nav-link d-flex" v-if="!$store.state.user">
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col p-0">
                          <span class="material-symbols-outlined">
                            login
                            </span>
                        </div>
                        <div class="col fw-bold">
                            Login                           
                        </div>
                    </div>
                </div>
              </button>
            </router-link>
              <button type="button" class="nav-link d-flex" v-if="$store.state.user" @click="$store.dispatch('logout')" >
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col p-0">
                          <span class="material-symbols-outlined">
                            logout
                            </span>
                        </div>
                        <div class="col fw-bold">
                            Logout                           
                        </div>
                    </div>
                </div>
              </button>
              <router-link to="/register"> 
              <button class="nav-link d-flex" v-if="!$store.state.user">
                <div class="container text-center">
                  <div class="row align-items-start">
                      <div class="col p-0">
                        <span class="material-symbols-outlined">
                          input
                          </span>
                      </div>
                      <div class="col fw-bold">
                        Regstrierung                       
                    </div>
                  </div>
                </div>
              </button>
            </router-link>
            
            </div>
          </div>
        </nav> 
      </div>
</template>

<script>

</script>

<style>

</style>