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
    <!-- Anmeldung -->
    <div class="container-xl d-flex" style="height: 100%; color: 002B5C;">
        <div class="m-auto" style="max-width: 600px">
            <form class="row g-3">
                <div class="col-md-12">
                    <p class="fw-bold fs-1 text-center">
                        LOGIN
                    </p>
                </div>
                <div class="col-md-12">
                  <label for="username" class="form-label">GEBE DEINEN BENUTZERNAMEN EIN</label>
                  <input type="text" class="form-control bg-body-tertiary rounded-pill" id="username">
                </div>
                <div class="col-md-12">
                  <label for="inputPassword" class="form-label">GEBE DEIN PASSWORT EIN</label>
                  <input type="password" class="form-control bg-body-tertiary rounded-pill" id="inputPassword">
                </div>
                <div class="col-12 text-center">
                  <button type="submit" class="btn btn-primary rounded-pill my-2 text-white text-center fs-4" style="background-color: #002B5C; border: none; height: 50px; width: 150px;">Anmelden</button>
                </div>
                <div class="col-12 text-center">
                  <a class=" btn fs-6">Neu hier? Hier registrieren</a>
                </div>
            </form>
        </div>
    </div>

</body>
</template>

<script>

    import {ref} from 'vue';
    import {useStore} from 'vuex';
import NavigationBar from '@/components/NavigationBar.vue';

    export default {
  components: { NavigationBar },
    setup () {
        const login_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value)
        }

        return {
            login_form,
            login,
        }

    }

}
</script>