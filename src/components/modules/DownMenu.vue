<template>
    <v-footer
            :inset="true"
            app
    >
        <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

</template>

<script>
    export default {
        name: "DownMenu"
    }
</script>

<style scoped>

</style>
