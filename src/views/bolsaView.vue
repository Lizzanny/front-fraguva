<template lang="">
<Navbar/>

    <div class="inicial">
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar,
    },
    /* beforeCreate() {
        let usuario = JSON.parse(localStorage.getItem("user"));
        if(usuario==null){
            console.log('no logueado');
            this.$router.push('/')
        }else{
            console.log(' logueado');
            //console.log(usuario );
        }
        
    }, */
}
</script>
<style scoped>
    .inicial{
        height: 100vh;
    }
    .inicial{
        background-color: black;
        margin-top: -23em;
    }
</style>