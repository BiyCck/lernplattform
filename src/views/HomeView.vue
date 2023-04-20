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
    <navigation-bar />
     <!-- Header -->
    <div id="header">
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
    <div id="categories">

      <!--<img class="z-1 position-fixed" style="top: 120%; left: 30%;" src="../../public/gotLearning-Collaborative-Learning-System-CLS-hero-tablet-student-elearning-about1.svg" alt="">-->

      <div class="text-center" style="height:100%">
        <div class="h-25 w-100 d-inline-block">
          <div class="position-absolute" style="top: 110%; left: 25px; right: 25px">
            <p class="text-start fw-bold fs-1" style="color: 002B5C;">
              Was möchtest du lernen?
            </p>
          </div>
        </div>

        <!-- obere Reihe -->
        <div class="h-25 w-50 d-inline-block">
          <div class="position-absolute h-10 px-5 py-4 text-center d-inline-block" style="top: 130%; left: 12%;">
            <a href="" class="btn text-start fw-bold fs-1 px-5 py-4 rounded bg-light text-center w-100 d-inline-block">Technik</a>
          </div>
        </div>

        <div class="h-25 w-50 d-inline-block">
          <div class="position-absolute h-10 px-5 py-4 text-center d-inline-block" style="top: 130%; right: 12%;">
            <a href="" class="btn text-start fw-bold fs-1 px-5 py-4 rounded bg-light text-center w-100 d-inline-block">Wirtschaft</a>
          </div>
        </div>

        <!-- untere Reihe -->
        <div class="h-25 w-50 d-inline-block">
          <div class="position-absolute h-10 px-5 py-4 text-center d-inline-block" style="top: 155%; left: 12%;">
            <a href="" class="btn text-start fw-bold fs-1 px-5 py-4 rounded bg-light text-center w-100 d-inline-block">Sport</a>
          </div>
        </div>

        <div class="h-25 w-50 d-inline-block">
          <div class="position-absolute h-10 px-5 py-4 text-center d-inline-block" style="top: 155%; right: 12%;">
            <a href="" class="btn text-start fw-bold fs-1 px-5 py-4 rounded bg-light text-center w-100 d-inline-block">Sprachen</a>
          </div>
        </div>

      </div>
    </div>
  </body>
</template>
<style> 
        html, body, #app {height: 100%}

        #header{
          height: 100%; 
          background-image: url('../../public/header.svg'); 
          background-repeat: no-repeat; 
          background-position: 50%; 
          background-size: cover;
        }

        #categories{
          height: 100%; 
          background-image: url('../../public/categories.svg'); 
          background-repeat: no-repeat; 
          background-position: 50%; 
          background-size: cover;
        }
</style>
<script>

import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import NavigationBar from '@/components/NavigationBar.vue';

export default {
  components: { NavigationBar },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}

</script>