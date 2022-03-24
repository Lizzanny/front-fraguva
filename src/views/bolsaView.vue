<template lang="">
    <div class="inicial">
    </div>
</template>
<script>
export default {
    beforeCreate() {
       let usuario = JSON.parse(localStorage.getItem("user"));
        if(usuario==null){
            console.log('no logueado');
            window.location.href="/";
        }else{
               console.log(' logueado');
        }
    },
}
</script>
<style scoped>
    .inicial{
        height: 100vh;
    }
    .inicial{
        background-color: black;
        margin-top: -18em;
    }
</style>