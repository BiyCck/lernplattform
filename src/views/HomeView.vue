<template>
<head>
    <meta name="title" content="Lernplattform für Python">
    <meta name="description" content="Eine Lernplattform, um die Programmiersprache Python zu erlernen.">
    <meta name="keywords" content="Lernen, Plattform, Lernplattform, python, deep learning, künstliche neuronale netze, machine learning, ki, chatgpt, programmieren, program">
    <meta name="robots" content="index, nofollow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-16">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    <meta name="author" content="Technikgruppe der HSBA - A20-BI2 & A20-MMC2">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Learning Plattform</title>
</head>
<body>
    <!-- Navigation -->
    <!-- Icons by Google: https://fonts.google.com/icons -->
    <div class="container-fluid p-0 fixed-top">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img style="height:52px" src="../../public/1200px-HSBA_Hamburg_School_of_Business_Administration_Logo_2018_nur_Wappen.svg.png" class="img-thumbnail px-1" alt="...">
            <a class="navbar-brand fw-bolder px-2" href="index.html">Digital Labour</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="lektion1.html">
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
            <a class="nav-link d-flex">
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
              <a class="nav-link d-flex">
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
              </a>
            </router-link>
          </div>
        </div>
      </nav> 
    </div>

    <div class="container-fluid" style="height: 100%; background-image: url('header.png');">
      <div class="position-absolute" style="top: 25%; left: 25px;">
        <p class="text-start fw-bold" style="color: 002B5C; font-size: 75px;">
          Lorem Ipsum <br>
          Lorem Ipsum Lorem Ipsum
        </p>
        <a type="button" class="btn btn-primary" style="font-size: 35px; border-radius: 40px;">KLICK!</a>
      </div>
    </div>
    <!-- Cards -->
    <div class="container-fluid py-2" style=" background-color: 002B5C">
      <div class="container text-center">
        <div class="row py-2">
          <div class="col">
            <div class="card mx-auto" style="width: 18rem;">
              <img src="../../public/Python.svg.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Informationen</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mx-auto" style="width: 18rem;">
              <img src="../../public/Python.svg.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Informationen</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-2">
          <div class="col">
            <div class="card mx-auto" style="width: 18rem;">
              <img src="../../public/Python.svg.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Informationen</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mx-auto" style="width: 18rem;">
              <img src="../../public/Python.svg.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Informationen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Codemirror/>
    </div>
    <div>
      <ChatGPT/>
    </div>
</body>
</template>

<script>

import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import Codemirror from "/src/components/Codemirror.vue";
import ChatGPT from "/src/components/ChatGPT.vue";

export default {
  components: {
    Codemirror,
    ChatGPT
  },

  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}

</script>