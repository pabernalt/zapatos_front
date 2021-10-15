<template>
    <div class="Register">
        <div>
            <img src="../assets/images/banner.png" style=" width: 100%" />
        </div>
        <div class="modal-dialog text-center">
            <div class="col-sm-8"></div>
            <div class="modal-content">
                <div class="col-12">
                    <div>
                        <img src="../assets/images/iconLogin.png" alt="" />
                    </div>
                </div>
                <div id="reset" class="form-action hide">
                    <form action="">
                        <h2>Sign in</h2>
                        <label for="nombres"> Nombre:</label><br />
                        <input
                            type="text"
                            id="nombres"
                            name="nombres"
                            v-model="usuario.nombres"
                        /><br />
                        <label for="apellidos">Apellido:</label><br />
                        <input
                            type="text"
                            apellido="apellidos"
                            name="apellidos"
                            v-model="usuario.apellidos"
                        /><br />

                        <label for=" email"> Correo electrónico:</label><br />
                        <input
                            type="email"
                            correo="email"
                            name="email"
                            v-model="usuario.email"
                        /><br />

                        <label for="username"> Usuario Nombre:</label><br />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            v-model="usuario.username"
                        /><br />

                        <label for="password"> Contraseña:</label><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            v-model="usuario.password"
                        /><br />

                        <button
                            type="submit"
                            v-on:click.self.prevent="registrar()"
                        >
                            registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Register",
    data: function() {
        return {
            usuario: {
                nombres: "",
                apellidos: "",
                email: "",
                username: "",
                password: ""
            },
        };
    },
    methods: {
        registrar() {
            axios
                .post("http://localhost:8080/api/usuario", this.usuario)
                .then((data) => {
                    console.log(data);
                    if (data.status == "200") {
                        this.$router.replace("/login");
                    } else {
                        alert("intente otra vez, Id equivocado");
                    }
                })
                .catch((error) => {
                    console.log(error);
                   alert("intente otra vez, Id equivocado");
                });
        },
    },
};
</script>

<style>
body {
    background-color: rgb(238, 236, 236);
    padding: 0%;
    margin: 0%;
    color: mediumpurple;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
a {
    color: mediumpurple;
}
p {
    display: inline-block;
    margin-top: 30;
    color: white;
    text-align: center;
}
h1 {
    color: white;
    text-align: center;
}
.btn-light {
    color: mediumpurple;
}
</style>
