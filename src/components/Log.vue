<template>
    <!-- <p> HI </p> -->
<!--    <p>{{hi}}</p>-->

    <input type="text" v-model="message">
<!--    <p v-text="message"></p>-->
</template>


<script>
export default {
    name: "Log",
    data: () => ({
        hi: 'sayFUCK',
        message:'',
    })   
}
</script>