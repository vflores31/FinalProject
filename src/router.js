import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/public/index.vue";
import NotFound from "./pages/public/404.vue";
import Login from "./pages/public/login.vue";
import Music from "./pages/public/music.vue";
import Resources from "./pages/public/resources.vue";
import Videos from "./pages/public/timedvideos.vue";

import Chats from "./pages/private/chats.vue";
import Profile from "./pages/private/profile.vue";
import Groups from "./pages/private/studygroup.vue";

const { isAuthenticated } = useAuth;

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/music",
        name: "Music",
        component: Music,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
    {
        path: "/resources",
        name: "Resources",
        component: Resources,
    },
    {
        path: "/videos",
        name: "Videos",
        component: Videos,
    },
    {
        path: "/chats",
        name: "Chats",
        component: Chats,
        beforeEnter: (to, from, next) => {
            console.log(isAuthenticated);
            if (!isAuthenticated.value) {
                next("/login");
            }
            next();
        },
    },
    {
        path: "/Profile",
        name: "Profile",
        component: Profile,
        beforeEnter: (to, from, next) => {
            console.log(isAuthenticated);
            if (!isAuthenticated.value) {
                next("/login");
            }
            next();
        },
    },
    {
        path: "/Groups",
        name: "Groups",
        component: Groups,
        beforeEnter: (to, from, next) => {
            console.log(isAuthenticated);
            if (!isAuthenticated.value) {
                next("/login");
            }
            next();
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;