<template lang="">
<Navbar/>
  <div class="home">
    <div id="container1" class="container-fluid pb-5">
        <div class="">
            <div class="row justify-content-md-center justify-content-lg-center">
                <div class="col-md-11">
                    <img src="../assets/img/imagenes/SLOGAN.png" id="imgslogan">
                </div>
            </div>
        </div>
        <div class="container-fluid pb-5 pt-3">
            <div class="row justify-content-md-center justify-content-lg-center">
                <div class="col d-none d-sm-block">
                    <img src="../assets/img/imagenes/NOSOTROS_COMPLETO.png" class="img-fluid" id="imgcenter" alt="">
                </div>
                <div class="col d-block d-sm-none pt-4">
                    <img src="../assets/img/imagenes/nosotrosmobile.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid pt-5" id="container2">
        <div class="row">
            <div class="col pt-3 d-none d-sm-block">
                <img src="../assets/img/imagenes/CLEINTES.png" class="img-fluid" id="imgcenter" alt="">
            </div>
            <div class="col d-block d-sm-none pt-4">
                <img src="../assets/img/imagenes/clientesmobile.png" class="img-fluid" alt="">
            </div>
        </div>
        <div class="row" id="Vision">
            <div class="col">
                <p id="titulovision">NUESTRA VISIÓN</p>
                <p id="visionspan">Ser una firma recoconocida por la capacidad de generar las
                    oportunidades de negocios de las empresas dedicadas a la exporación y extracción de
                    hidrocarburos.</p>
            </div>
        </div>
        <br>
        <div class="row" id="Mision">
            <div class="col">
                <p id="titulomision">NUESTRA MISIÓN</p>
                <p id="misionspan">Proporcionar confianza y certeza a nuestros clientes, para que
                    realicen las actividades petroleras dentro del marco regulatorio vigente, con
                    el fin de maximizar el valor del negocio.</p><br>
            </div>
        </div>
    </div>
    <div class="container-fluid d-flex justify-content-center text-center align-items-center" id="container3">
        <div class="row">
            <div class="col-sm contacto" style=" align-items: center;">
                <span style="color: #1CDDE1;">SI NECESITA PONERSE EN COMUNICACIÓN CON NOSOTROS:</span><br>
                <span style="color: white;">contacto@fraguvaenergy.com</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

    import Navbar from '../components/Navbar.vue'
export default {
  name: 'HomeView',
  components: {
        Navbar,
    },
}
</script>
<style scoped>
    

    body {
    margin: 0;
    padding: 0;
    }


    #container1 {
        background-image: url("../assets/img/backgrounds/FONDO_PARTE_ARRIBA.png");
        background-size:cover;
        background-repeat: no-repeat;
        margin-top: -13em;
    }

    #imgcenter {
        max-width: 90%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    #imgslogan {
        margin-top: 30em;
        max-width: 60%;
    }


    .style {
        background: rgb(0, 0, 0);
        background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(19, 24, 30, 0) 71%, rgba(255, 255, 255, 0.7231267507002801) 100%);
    }

    #container2 {
        background-image: url("../assets/img/backgrounds/FONDO_PARTE_ABAJO.png");
        padding-bottom: 10vh;
        background-size:cover;
        background-repeat: no-repeat;
    }

    #titulovision {
        font-size: 50px;
        margin-left: 21px;

    }

    #Vision {
        color: white;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        margin: 30px;
        width: 80%;
    }

    #visionspan {
        font-size: 28px;
        margin-left: 21px;

    }

    #titulomision {
        font-size: 50px;
        margin-left: 21px;

        max-width: 500px;
    }

    #Mision {
        color: white;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        margin: 30px;
        width: 80%;
    }

    #misionspan {
        font-size: 28px;
        margin-left: 21px;
        max-width: 1200px;
    }

    #container3 {
        background-color: #000B28;
        display: flex;
        height: 15vh;
    }

    .contacto {
        font-size: 24px;
    }



/* MEDIA QUERYS MOBILE */

@media (max-width: 600px) {
    #container1 {
            background-image: url("../assets/img/backgrounds/FONDO_PARTE_ARRIBA.png");
            background-size:cover;
            background-repeat: no-repeat;
            margin-top: -23em;
    }

    #imgslogan {
        max-width: 100%;
    }
    
    .contacto {
        font-size: 16px;
    }

    #titulomision {
        font-size: 30px;
    }

    #mision {
        width: auto;
    }

    #vision {
        width: auto;
    }

    #misionspan {
        font-size: 16px;
        text-align: left;
    }

    #titulovision {
        font-size: 30px;
    }

    #visionspan {
        font-size: 16px;
        text-align: left;
    }
}
</style>