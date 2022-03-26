<template lang="">
    <div class="login container-fluid imgbackground">
        <div class="container-fluid vh-100" style="margin-top:300px">
            <div class="" style="margin-top:200px">
                <div class="d-flex justify-content-center">
                    <div class="col-xs-12 col-sm-10 col-md-5 col-lg-4  shadow-lg p-5 bg-light formulario rounded-3">
                        
                        <div class="text-center mb-4">
                            <img src="../assets/img/Icon/user.png" class="img-fluid" alt="">
                            <h1 class="text-dark">Login</h1>
                        </div>
                        <form action="" v-on:submit.prevent="login">
                            <div class="text-center">
                                
                                <div class="input-group mb-4">
                                    <span class="input-group-text"><i class="uil uil-user"></i></span>
                                    <input type="text" class="form-control" placeholder="Usuario" id="txtuser"
                                            v-model="signin.username">
                                </div>
                                <div class="input-group mb-4">
                                    <span class="input-group-text"><i class="uil uil-key-skeleton"></i></span>
                                    <input type="password" class="form-control" placeholder="Contraseña"
                                        id="txtpass" v-model="signin.password">
                                </div>
                                
                                <button class="btn btn-outline-secondary mt-2" type="submit" v-show="!loading">
                                    Iniciar Sesión
                                </button>
                                <div class="spinner-border" role="status" v-show="loading">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                
                                <p class="text-center text-primary">¿Olvidaste tu contraseña?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'Login',
    data(){
        return {
            signin:{
                username:null,
                password:null
            },
            loading:false
        }
    },
    methods:{
        showAlert() {
          // Use sweetalert2
          this.$swal({
              position: 'top-center',
              icon: 'warning',
              title: 'Usuario o contraseña incorrectos',
              showConfirmButton: false,
              timer: 1500
        });
        },
        setUserLocalStorage(user){
            const usuario = JSON.stringify(user);
            localStorage.setItem('user', usuario);
        },
        login(){ 
            this.loading=true;
            this.axios.post('/users/login', this.signin).then(({data, status})=>{
                if(status===200){
                    window.location.href="/bolsa";
                    this.setUserLocalStorage(data);
                }
            }).catch((error)=>this.showAlert()); 
            
            this.loading=false;
         
        }
    }
}
</script>
<style scoped>
    body {
        margin: 0;
        padding: 0;
    }
    .imgbackground{
        background-image: url("../assets/img/backgrounds/FONDO_PARTE_ARRIBA.png");
        margin-top: -25em;
    }

    .formulario{
        margin-top: 15em;
    }

    /* MEDIAQUERYS */
    @media (max-width: 600px) {
        .imgbackground{
            background-image: url('../assets/img/backgrounds/FONDO_PARTE_ARRIBA.png');
            margin-top: -38em;
                height: 125vh;

        }

        .formulario{
            margin-top: 20em;
        }
    }
</style>