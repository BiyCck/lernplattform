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
    <div class="container-xl d-flex" style="height: 100%">
        <div class="m-auto" style="max-width: 600px">
            <form class="row g-3" @submit.prevent="login">
                <div class="col-md-12">
                        <p class="fs-2">Anmeldung</p>
                </div>
                <div class="col-md-12">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail" v-model="login_form.email">
                </div>
                <div class="col-md-12">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword" v-model="login_form.password">
                </div>
                <div class="col-8">
                  <button type="submit" class="btn btn-primary" value="Login">Anmelden</button>
                </div>
                <div class="col-4">
                  <a class="btn">Passwort vergessen...</a>
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