<template>

    <v-app id="sandbox">
        <v-navigation-drawer
                v-model="primaryDrawer.model"
                :clipped="true"
                :permanent="true"
                app
                overflow
        ></v-navigation-drawer>

        <v-app-bar
                :clipped-left="primaryDrawer.clipped"
                app
        >
            <v-toolbar-title>Система логирования и восстановления данных</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container fluid>
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col cols="10">
                        <v-card>
                            <v-card-text>

                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-footer
                :inset="true"
                app
        >
            <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>


    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawers: ['Default (no property)', 'Permanent', 'Temporary'],
            primaryDrawer: {
                model: null,
                type: 'default (no property)',
                clipped: true,
                mini: false,
            },
            footer: {
                inset: false,
            },
        }),
    }
</script>
