<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary z-1 position-absolute container-fluid">
        <div class="container-fluid">
            <img style="height:52px" src="../../public/HSBA_Logo.svg" class="px-1" alt="...">
            <form class="d-flex my-auto mx-4 rounded" role="search">
                <input class="form-control me-2 rounded-pill fw-bold" type="search" placeholder="Suchen nach..." aria-label="Search">
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li>   
                <router-link to="/">
                    <a class="nav-link">
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col p-0">
                                    <span class="material-symbols-outlined">
                                        home
                                    </span>
                                </div>
                                <div class="col fw-bold">
                                    Home                           
                                </div>
                            </div>
                        </div>
                    </a>
                </router-link>
              </li>
              <li>
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
                                    Kurse                           
                                </div>
                            </div>
                        </div>
                    </a>
                </router-link>    
              </li>
              <li>
                <router-link to="/login" v-if="!$store.state.user">
                    <a class="nav-link">
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
                    </a>
                </router-link>
              </li>
              <li>
                <router-link to="/register" v-if="!$store.state.user">
                    <a class="nav-link">
                        <div class="container text-center">
                        <div class="row align-items-start">
                            <div class="col p-0">
                                <span class="material-symbols-outlined">
                                input
                                </span>
                            </div>
                            <div class="col fw-bold">
                                Registrierung                           
                            </div>
                        </div>
                        </div>
                    </a>
                </router-link>
              </li>
              <li>
                <router-link to="/logout" v-if="$store.state.user">
                    <a class="nav-link" @click="$store.dispatch('logout')">
                        <div class="container text-center">
                        <div class="row align-items-start">
                            <div class="col p-0">
                                <span class="material-symbols-outlined">
                                input
                                </span>
                            </div>
                            <div class="col fw-bold">
                                Logout                           
                            </div>
                        </div>
                        </div>
                      </a>
                </router-link>
              </li>
            </ul>
        </div>
    </nav>

</template>

<script>

</script>

<style>

</style>