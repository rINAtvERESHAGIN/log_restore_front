import Vue from 'vue'
import VueRouter from "vue-router";

import DashboardContent from "./components/modules/Content/DashboardContent";
import DownMenu from "./components/modules/DownMenu";
import TopMenu from "./components/modules/TopMenu";
import DynamicTable from "./components/modules/Content/DynamicTable";

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/dashboard',
            component: DashboardContent
        },
        {
            path: '/table',
            component: DynamicTable
        },
        {
            path: '/down',
            component: DownMenu
        },
        {
            path: '/top',
            component: TopMenu
        }

    ]
})
