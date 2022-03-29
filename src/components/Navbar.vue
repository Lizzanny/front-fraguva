<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/img/Logo/fraguva_oscuro.png" class="img-fluid ms-5 img-logo" style="max-width: 200px; width:45%" alt="">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">
                                Inicio
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/servicios" class="nav-link">
                                Servicios
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/bolsa" class="nav-link">
                                Bolsa de trabajo
                            </router-link>
                        </li>
                        <li class="nav-item"  v-if="usuario.name==''">
                            <router-link to="/login" class="nav-link">
                                Log In
                            </router-link>
                        </li>
                        <li class="nav-item dropdown" v-if="!!usuario.name">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               {{usuario.name}}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="#" @click="cerrarSesion">Log Out</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>

</template>
<script>
export default {
    data(){
        return {
            usuario:{
                name:""
            }
        }
    },
    methods:{
        showAlert() {
          // Use sweetalert2
            this.$swal({
                position: 'center',
                icon: 'success',
                title: '¡Hasta pronto!',
                showConfirmButton: false,
                timer: 1500,

            });
        },
        getDataUser(){
          this.usuario = JSON.parse(localStorage.getItem("user"));
          if(this.usuario == null){
              this.usuario= {
                name:""
            };
          }
          /* console.log(this.usuario); */
        },
        cerrarSesion(){
          //vaciar local storage
          this.showAlert();
          localStorage.removeItem('user');
          this.usuario = {
                name:""
            };
          window.location.href="/";

          //this.$router.push('/')
        },
        updStatusNav(datos){
            //console.log(datos);
            this.usuario.name=datos.name;
        }
    },
    
    mounted(){
        this.getDataUser();
    }
}
</script>
<style scoped>
    .fijo{
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
    }
    .navbar {
        background-color: transparent !important;
        margin:0;
        color:#fff;
    }
    .nav-link{
        text-align: center;
        width: 9em;
        margin: 5px;
        color: #fff;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(255,255,255,1) 100%);
    }
    
</style>