<template lang="">
    <div class="login container-fluid imgbackground">
        
            <div class="container-fluid vh-100 text-center" style=" opacity: 80%;" >
                <div class="" style="margin-top:200px">
                    <div class="rounded d-flex justify-content-center" >
                        <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light" style="border-radius: 20px;">
                            <div class="text-center">
                                <img src="../assets/img/Icon/user.png" class="img-fluid" alt="">
                                <h1 class="text-dark">Login</h1>
                            </div>
                            <form action="">
                                <div class="p-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="uil uil-user"></i></span>
                                        <input type="text" class="form-control" placeholder="Usuario" id="txtuser"
                                            v-model="signin.username">
                                    </div>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="uil uil-key-skeleton"></i></span>
                                        <input type="password" class="form-control" placeholder="Contraseña"
                                            id="txtpass" v-model="signin.password">
                                    </div>
                                    <!-- <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Recuerdame
                                        </label>
                                    </div> -->
                                    <button class="btn btn-outline-secondary text-center mt-2" type="submit" @click="iniciar">
                                        Iniciar Sesión
                                    </button>
                                    <p class="text-center mt-5">¿Tienes problemas? comunicate con el administrador para acceder</p>
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
    }

    /* MEDIAQUERYS */
    @media (max-width: 600px) {

        .copyright {
            font-size: 16px;
        }

        #Fstyle {
            font-size: 14px;
        }
    }
</style>