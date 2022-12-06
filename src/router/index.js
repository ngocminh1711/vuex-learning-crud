import VueRouter from "vue-router";
import Vue from "vue";
import About from "../components/About.vue";
import DataTable from "../components/DataTable.vue"


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "data-table",
        component: DataTable
    },
    {
        path: "/about",
        name: "about-us",
        component: About
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;