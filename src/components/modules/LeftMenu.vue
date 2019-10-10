<template>
    <div>
        <v-navigation-drawer
                dark
                :clipped="true"
                :permanent="true"
                app
                overflow
        >

            <v-list>

                <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        link
                        :to="item.route"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
            </v-navigation-drawer>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "LeftMenu",
        // data: () => ({
        //     items: [
        //         ['mdi-view-dashboard', 'Dashboard', 'this$'],
        //         ['mdi-table', 'Dynamic Table'],
        //     ],
        // }),
        data: function () {
            return{
                items: [
                    {
                        icon: 'mdi-view-dashboard',
                        name: 'Dashboard',
                        route:'/dashboard'
                    },
                    {
                        icon: 'mdi-table',
                        name: 'Dynamic Table',
                        route:'/table'
                    }
                ]
            }
    }

    }
</script>

<style scoped>

</style>
