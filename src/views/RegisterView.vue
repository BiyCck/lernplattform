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
        <!-- Registrierung -->
        <div class="container-xl d-flex" style="height: 100%">
            <div class="m-auto" style="max-width: 600px">
                <form class="row g-3" @submit.prevent="register">
                    <div class="col-md-12">
                            <p class="fs-2">
                                Regstrierung
                            </p>
                    </div>
                    <div class="col-md-6">
                        <label for="inputFirstname" class="form-label">Vorname</label>
                        <input type="text" class="form-control" id="inputFirstname">
                    </div>
                    <div class="col-md-6">
                        <label for="inputLastname" class="form-label">Nachname</label>
                        <input type="text" class="form-control" id="inputLastname">
                    </div>
                    <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="register_form.email">
                    </div>
                    <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" v-model="register_form.password">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPasswordrepeat" class="form-label">Password wiederholen</label>
                        <input type="password" class="form-control" id="inputPasswordrepeat">
                    </div>
                    <div class="col-12">
                    <label for="inputAddress" class="form-label">Addresse</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Straße und Hausnummer">
                    </div>
                    <div class="col-md-6">
                    <label for="inputCity" class="form-label">Ort</label>
                    <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-2">
                    <label for="inputZip" class="form-label">Postleitzahl</label>
                    <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Land</label>
                        <select id="inputState" class="form-select">
                        <option selected>Auswählen...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-8">
                        <button type="submit" class="btn btn-primary" value="Register">Registrieren</button>
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

    export default {
        setup () {
            const register_form = ref({});
            const store = useStore();

            const register = () => {
                store.dispatch('register', register_form.value)
            }

            return {
                register_form,
                register
            }

        }

    }
</script>