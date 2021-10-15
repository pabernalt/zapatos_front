<template>
    <div class="Login">
        <div>
            <img src="../assets/images/banner.png" style=" width: 100%" />
        </div>

        <div class="modal-dialog text-center">
            <div class="col-sm-8"></div>
            <div class="modal-content">
                <div class="col-12">
                    <img src="../assets/images/iconLogin.png" />
                </div>
                <form class="col-12">
                    <h1>Login</h1>
                    <p>Bienvenido a Zapatos de segunda mano Namu!</p>
                    <p>Encuentra las mejores ofertas para ti.</p>
                    <div class="form-group">
                        <input
                            type="text"
                            placeholder="Usuario ID"
                            v-model="usuario.username"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            v-model="usuario.password"
                        />
                    </div>
                    <div class="form-group">
                        <button type="submit" v-on:click.self.prevent="login()">
                            Login
                        </button>
                    </div>
                    <router-link to="/register">Registarse</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data: function() {
        return {
            usuario: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            axios
                .post(`http://localhost:8080/api/usuario/login`, this.usuario)
                .then((data) => {
                    console.log(data);
                    if (data.status == "200") {
                        this.$router.replace("/main");
                    }else{
                       alert("El usuario ya existe, intente de nuevo"); 
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert("El usuario ya existe, intente de nuevo");
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
    color: black;
    text-align: center;
}
h1 {
    color: black;
    text-align: center;
}
</style>
