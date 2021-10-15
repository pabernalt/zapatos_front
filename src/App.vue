<template>
    <div id="app">
        <div id="nav">
            <router-link to="/main">Main</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link> |
        </div>

        <div class="contenedor">
            <router-view />
        </div>
        <footer>pie pagina</footer>
    </div>
</template>

<style>
.contenedor {
    width: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border: 1px solid black;
}
#nav {
    padding: 30px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}
#nav a.router-link-exact-active {
    color: cadetblue;
}
</style>
