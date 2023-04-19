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
    <nav class="navbar navbar-expand-lg bg-body-tertiary z-1 position-absolute container-fluid">
        <div class="container-fluid">
            <img style="height:52px" src="../../src/assets/HSBA_Logo.svg" class="px-1" alt="...">
            <form class="d-flex my-auto mx-4 rounded" role="search">
                <input class="form-control me-2 rounded-pill fw-bold" type="search" placeholder="Suchen nach..." aria-label="Search">
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <a class="nav-link" href="login.html">
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
              </li>
              <li>
                <a class="nav-link" href="lektion1.html">
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
              </li>
              <li>
                <a class="nav-link" href="login.html">
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
              </li>
              <li>
                <a class="nav-link" href="register.html">
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
              </li>
            </ul>
        </div>
    </nav>

    <!-- Header -->
    <div class="" style="height: 100%; background-image: url('../../src/assets/header.svg'); background-repeat: no-repeat; background-position: 50%; background-size: cover;">
        <div class="position-absolute" style="top: 25%; left: 25px;">
            <p class="text-start fw-bold" style="color: 002B5C; font-size: 75px;">
              Lorem Ipsum <br>
              Lorem Ipsum Lorem <br>
              Ipsum
            </p>
            <a type="button" class="btn btn-primary fs-3 fw-bold rounded-pill px-5" style="background-color: #002B5C; border: none;">KLICKEN</a>
        </div>
    </div>

    <!-- Categories -->
    <div class="" style="height: 100%; background-image: url('../../src/assets/categories.svg'); background-repeat: no-repeat; background-position: 50%; background-size: cover;">
            
    </div>
</body>
</template>

<script>

import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {

  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}

</script>