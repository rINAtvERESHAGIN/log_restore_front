<template>

    <v-app id="sandbox">
        <TopMenu></TopMenu>
        <LeftMenu></LeftMenu>
        <ContentMain></ContentMain>
        <DownMenu></DownMenu>
    </v-app>

</template>

<script>
    import TopMenu from "./TopMenu";
    import LeftMenu from "./LeftMenu";
    import ContentMain from "./Content/ContentMain";
    import DownMenu from "./DownMenu";
    export default {
        name: "Main",
        components: {
            TopMenu,
            LeftMenu,
            ContentMain,
            DownMenu,

        },
    }
</script>

<style scoped>

</style>
