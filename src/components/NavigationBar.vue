<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary z-1 position-absolute container-fluid">
        <div class="container-fluid ">
            <img style="height:52px" src="../../public/HSBA_Logo.svg" class="px-1" alt="...">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li>   
                <RouterLink to="/">
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
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/lektion">
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
                </RouterLink>    
              </li>
              <li v-show="! userStore.isLoggedIn">
                <RouterLink to="/login">
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
                </RouterLink>
              </li>
              <li v-show="! userStore.isLoggedIn">
                <RouterLink to="/register">
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
                </RouterLink>
              </li>
              <li v-show="userStore.isLoggedIn">
                <RouterLink to="/logout">
                    <a class="nav-link">
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
                </RouterLink>
              </li>
            </ul>
        </div>
    </nav>

</template>
<script setup>

import { useUserStore } from '@/store/UserStore';

const userStore = useUserStore()



</script>
<style>

</style>