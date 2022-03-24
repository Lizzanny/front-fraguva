<template lang="">
    <div>
        <div class="container-fluid vh-100 text-center imgbackground align-middle" style=" opacity: 90%;" >
            
            <div class="rounded d-flex justify-content-center" >
                <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light formulario" style="border-radius: 20px;">
                    <div class="text-center">
                        <img src="assets/Icon/user.png" class="img-fluid" alt="">
                        <h1 class="text-dark">Login</h1>
                    </div>
                    <form @submit.prevent = "login">
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
                            <button class="btn btn-outline-secondary text-center mt-2" type="submit" v-show="!loading">
                                Iniciar Sesión
                            </button>
                            
                            <div class="spinner-border" role="status" v-show="loading">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                            
                            <p class="text-center mt-5">¿Tienes problemas? comunicate con el administrador para acceder</p>
                        </div>
                    </form>
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
              position: 'top-end',
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
                    window.location.href="/interior";
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
    margin-top:-13em;
}

.contenedor{
    display: grid;
    place-content: center;
}

#bordesLogin{
    border-radius: 20px;
}

#footer {
    font-size: 25px;
    color: white;
    height: 8vh;
    background-color: black;
}

#Aviso {
    font-size: 25px;
    background-color: #0e6b6c;
    color: white;
    width: 100%;
    height: 8vh;
}

#Fstyle {
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(19, 24, 30, 0) 88%, rgba(255, 255, 255, 0.7231267507002801) 100%);
    padding-left: 100px;
    padding-right: 100px;
    border: none;
    color: white;
    text-decoration: solid;
}
.formulario{
        margin-top: 20vh;
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