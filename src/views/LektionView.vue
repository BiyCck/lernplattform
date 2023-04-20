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
        <!-- content -->
    <div class="container-fluid py-5 px-5">
        <!-- title -->
        <div class="container-fluid row pt-5">
            <h1 class="fw-bold fs-1" style="color: #002B5C;">Technikkurs - Lektion 1</h1>
        </div>
        <!-- left -->
        <div class="row">
            <div class="col-2 py-5">
                <nav class="nav flex-column">
                    <a class="nav-link rounded-pill my-2 text-white text-center" style="background-color: #002B5C;" href="#">Lektion 1</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 2</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 3</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 4</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 5</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 6</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 7</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 8</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 9</a>
                    <a class="nav-link bg-body-tertiary rounded-pill my-2 text-black text-center" href="#">Lektion 10</a>
                </nav>
            </div>
    
            <!-- right -->
            <div class="col py-5">
                <div class="container-fluid p-4 bg-body-tertiary rounded">
                    <!-- Text -->
                    <p class="lh-base fw-light py-4">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                        erat, sed diam voluptua. At vero eos et accusam et justo duo 
                        dolores et ea rebum. 
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                        dolor sit amet.
                    </p>
                    <!-- Video -->
                    <div class="d-flex justify-content-center py-4">
                        <iframe class="object-fit-fill border rounded" style="width: 100%; height: 650px" src="https://www.youtube.com/embed/9mmVa6O-hzQ?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- Code Abschnitt -->
                    <div class="py-4">
                        <p class="fw-bold">Task:</p>
                        <p class="lh-base fw-light">
                            Write a function to get the volume of a sphere with radius 6.
                        </p>
                        <form>
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Code</span>
                                    <textarea class="form-control" aria-label="With textarea" style="min-height: 250px" placeholder="math import pi def calc_sphere_volume(r=6): sphere_volume == 4/3*pi*r**2 return sphere_volume"></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-11">
                                    <button type="submit" class="btn btn-primary rounded-pill" style="background-color: #002B5C; border: none">Code prüfen</button>
                                    <button type="submit" class="btn btn-primary rounded-pill" style="background-color: #002B5C; border: none">Nach Tipp fragen</button>
                                </div>
                                <div class="col-1">
                                    <button type="submit" class="btn btn-primary rounded-pill" style="background-color: #002B5C; border: none">
                                        <span class="material-symbols-outlined circle">
                                            smart_toy
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</template>
<style> html, body, #app {height: 100%}</style>