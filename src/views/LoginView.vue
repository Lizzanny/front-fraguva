<template lang="">
    <div>
        <form>
            <input type="text" id="txtuser"  v-model="signin.username">
            <input type="password" id="txtpass" v-model="signin.password">

            <button type="button" @click ="iniciar">
                iniciar sesion
            </button>
        </form>
    </div>
</template>
<script>

export default {
    data(){
        return {
            signin:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        iniciar(){
            console.log('iniciar sesion');
            this.axios.post('/users/login', this.signin).then((resp)=>{
                console.log(resp);
            });
           /*  this.axios.get('/key').then((resp)=>{
                console.log(resp);
            });  */
        }
    }
}
</script>
<style lang="">
    
</style>