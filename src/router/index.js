import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/login" },
    {
        path: "/main",
        name: "Main",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Main.vue"),
    },
    {
        path: "/male",
        name: "Male",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Male.vue"),
    },
    {
        path: "/female",
        name: "Female",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Female.vue"),
    },

    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    },

    {
        path: "/register",
        name: "Register",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
