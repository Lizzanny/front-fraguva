<template>
  <div class="container-fluid">
        <div class="row" id="servicios-top">
            <div class="col-2 col-sm-3 col-md-4 col-lg-5 col-xl-5"></div>
            <div class="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-7 servicios" >
                <h1 class="titulo-servicio">SERVICIOS</h1>
                <ul class="medios-bordes font-item" id="list-services">
                    <li class="list-servicio">ADMINISTRACIÓN DE CONTRATOS PETROLEROS</li>
                    <li class="list-servicio">PLANEACIÓN ESTRATÉGICA DE EMPRESAS</li>
                    <li class="list-servicio">ADMINISTRACIÓN Y MEJORA DE PROCESOS</li>
                    <li class="list-servicio">APOYO PARA LA EMISIÓN DE OPINIONES TÉCNICAS EN MATERIA PETROLERA</li>
                    <li class="list-servicio">SEGUIMIENTO DE LAS ACTIVIDADES PETROLERAS</li>
                    <li class="list-servicio">EVALUACIÓN DEL CUMPLIMIENTO CONTRACTUAL</li>
                    <li class="list-servicio">CREACIÓN DE OPORTUNIDADES ESTRATÉGICAS PARA LA MEJORA DE NEGOCIOS</li>
                    <li class="list-servicio">SOPORTE PARA LA ATENCIÓN AL CUMPLIMIENTO TÉCNICO-REGULATORIO DE EXPLORACIÓN Y EXTRACCIÓN</li>
                    <li class="list-servicio">CUMPLIMIENTO EN LA ENTREGA DE INFORMACIÓN AL CNIH</li>
                    <li class="list-servicio">CAPACITACIÓN DEL PERSONAL DE LAS EMPRESAS</li>
                </ul>
            </div>
        </div>
        
        <div class="row justify-content-center box">
            <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"  style="background: #fff;">
                <div class="row d-flex justify-content-center text-center">
                    <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 puntos" id="elaboracion">
                        <h4 class="puntos-text"><strong class="puntos-title">ELABORACIÓN y acompañamiento de la modificación del plan de desarrollo</strong></h4>
                    </div>
                    <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 puntos" id="evaluacion">
                        <h4 class="puntos-text"><strong class="puntos-title">7 EVALUACIONES de cumplimiento contractual</strong></h4>
                    </div>
                    <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 puntos" id="asesoria">
                        <h4 class="puntos-text"><strong class="puntos-title">ASESORÍA en diversos temas estratégicos y regulatorios</strong></h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center footer" id="servicios-bottom" >
            <div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 text-center experiencia">
                <h2 class="titulo">NUESTRA EXPERIENCIA</h2>
                <p class="texto">Contamos con la experiencia en la elaboración y acompañamiento en la modificación del plan de desarrollo, así como la asesoría en diversos temas estratégicos y regulatorios.</p>
            </div>
    
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 clientes">
                <!-- Set up your HTML -->
                <div class="row" >
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3"> 
                        <img src="../assets/img/imagenes/cliente1.png" alt="">    
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3"> 
                        <img src="../assets/img/imagenes/cliente2.png" alt="">    
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <img src="../assets/img/imagenes/cliente3.png" alt="">    
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3"> 
                        <img src="../assets/img/imagenes/cliente4.png" alt="">    
                    </div>
                </div>
                <!--https://owlcarousel2.github.io/OwlCarousel2/-->
            </div>
        
            <div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 resumen">
                <p class="texto-r text-center">
                    Apoyo en el Servicio Integral para Acompañamiento y Prospectiva en el Proceso de Fusión de las Empresas Públicas PETROAMAZONAS y PETROECUADOR; en el Ámbito Organizacional Estratégico.
                </p>
            </div>
        
            <div class=" col-11 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center clientes">
                <div>
                    <img src="../assets/img/imagenes/cliente5.png" alt="">
                </div>
                <div >
                    <img src="../assets/img/imagenes/cliente6.png" alt="">
                </div>
            </div>
        </div>     
    </div>
    
</template>

<script>
export default {
  methods:{
    
  }
}
</script>

<style scoped>
body {
        margin: 0;
        padding: 0;
    }
#servicios-top{
    background-image: url("../assets/img/backgrounds/top.png");
    background-size:cover;
    background-repeat: no-repeat;
    margin-top: -6em;
}

#servicios-bottom{
    background-image: url("../assets/img/backgrounds/bottom.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/*/ `xs` returns only a ruleset and no media query*/
@include media-breakpoint-only(xs){
    .img-logo{
        max-width: 200px;
    width: 24vw;
    }
    .medios-bordes {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        padding-left: 0;
    }
    .servicios {
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(10,134,135,1) 100%);
        margin-bottom: 22em;
        margin-top: 7em;
    }
    #list-services::before {/*icono para movil sm*/
        content: "";
        display: block;
        background: url(../assets/img/imagenes/arrow-down-sm.png) no-repeat;
        width: 30px;
        height: 30px;
        float: left;
        margin-left: -2em;
    }


    .font-item{
        color: #fff;
        list-style:none;
    } 
    .list-servicio {/*letras de los servicios*/
        padding: 4px 4px;
        font-size: 8pt;
        font-weight: 500;
    }
    .titulo-servicio {/*Titulo del servicio*/
        color: #fff;
        font-size: 18pt;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .puntos {
        padding: 1em;
        height: 16vh;
        margin: 1em;
        background: linear-gradient(90deg, rgba(159,208,208,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(159,208,208,1) 100%);
        width: 33vw;
    }
    .puntos-title {
        font-size: 0.5em;
    }
    .puntos-text{
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 0.7;
    }
    .experiencia {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 2em 1em 2em 1em;
        margin: 15em 0 2em 0;
    }
    .titulo {
        color: #fff;
        font-size: 20pt;
        font-weight: 600;
    }
    .texto {
        color: #fff;
        font-size: 12pt;
        font-weight: 500;
    }

    .resumen {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 1em;
        margin: 1em 0 1em 0;
    }
    .texto-r {
        color: #fff;
        font-size: 9pt;
        font-weight: 500;
    }
    img{
        width: 100%;
    }
    .box {
        margin-top: -10em;
    z-index: 1;
    margin-bottom: -11em;
    }

    .clientes{
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,0) 100%);
    padding: 3em;
    }
 }
/*/ `sm` applies to x-small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) { 
    .img-logo{
        max-width: 200px;
    width: 24vw;
    }
    .medios-bordes {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        padding-left: 0;
    }
    .servicios {
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(10,134,135,1) 100%);
        margin-bottom: 22em;
        margin-top: 7em;
    }
    #list-services::before {/*icono para movil sm*/
        content: "";
        display: block;
        background: url(../assets/img/imagenes/arrow-down-sm.png) no-repeat;
        width: 30px;
        height: 30px;
        float: left;
        margin-left: -2em;
    }


    .font-item{
        color: #fff;
        list-style:none;
    } 
    .list-servicio {/*letras de los servicios*/
        padding: 4px 4px;
        font-size: 8pt;
        font-weight: 500;
    }
    .titulo-servicio {/*Titulo del servicio*/
        color: #fff;
        font-size: 18pt;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .puntos {
        padding: 1em;
        height: 16vh;
        margin: 1em;
        background: linear-gradient(90deg, rgba(159,208,208,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(159,208,208,1) 100%);
        width: 33vw;
    }
    .puntos-title {
        font-size: 0.5em;
    }
    .puntos-text{
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 0.7;
    }
    .experiencia {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 2em 1em 2em 1em;
        margin: 15em 0 2em 0;
    }
    .titulo {
        color: #fff;
        font-size: 20pt;
        font-weight: 600;
    }
    .texto {
        color: #fff;
        font-size: 12pt;
        font-weight: 500;
    }

    .resumen {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 1em;
        margin: 1em 0 1em 0;
    }
    .texto-r {
        color: #fff;
        font-size: 9pt;
        font-weight: 500;
    }
    img{
        width: 100%;
    }
    .box {
        margin-top: -10em;
    z-index: 1;
    margin-bottom: -11em;
    }

    .clientes{
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,0) 100%);
    padding: 3em;
    }
 }

/*/ `md` applies to small devices (landscape phones, less than 768px)*/
@media (max-width: 767.98px) { 
    .img-logo{
        max-width: 200px;
        width: 12vw;
    }
    
    .titulo-servicio {/*Titulo del servicio*/
        color: #fff;
        font-size: 22pt;
        font-weight: 600;
        margin-bottom: 10px;
    }
    
    .list-servicio {/*letras de los servicios*/
        padding: 4px 4px;
        font-size: 11pt;
        font-weight: 500;
    }

    #list-services::before {/*icono para movil sm*/
        content: "";
        display: block;
        background: url(../assets/img/imagenes/arrow-down-sm.png) no-repeat;
        width: 30px;
        height: 30px;
        float: left;
        margin-left: -3em;
    }

    .medios-bordes {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        padding-left: 0;
    }

    .servicios {
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(10,134,135,1) 100%);
        margin-bottom: 15em;
        margin-top: 7em;
    }


    .puntos-title {
        font-size: 13pt;
        line-height: 16pt;
    }
    
    .puntos {
        padding: 1em;
        height: 16vh;
        margin: 1em;
        background: linear-gradient(90deg, rgba(159,208,208,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(159,208,208,1) 100%);
        width: 33vw;
    }

    .experiencia {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 2em 1em 2em 1em;
        margin: 15em 0 2em 0;
    }

    .titulo {
        color: #fff;
        font-size: 22pt;
        font-weight: 600;
    }

    .texto {
        color: #fff;
        font-size: 15pt;
        font-weight: 500;
    }


    .font-item{
        color: #fff;
        list-style:none;
    } 
    .puntos-text{
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 0.7;
    }

    .resumen {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 1em 2em 1em 2em;
        margin: 1em 0 1em 0;
    }
    .texto-r {
        color: #fff;
        font-size: 16pt;
        font-weight: 600;
    }
    img{
        width: 100%;
    }
    .box {
        margin-top: -10em;
    z-index: 1;
    margin-bottom: -11em;
    }

    .clientes{
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,0) 100%);
    padding: 3em;
    }
 }

/*/ `lg` applies to medium devices (tablets, less than 992px)*/
@media (max-width: 991.98px) { 
    .img-logo{
        max-width: 200px;
        width: 12vw;
    }
    
    .titulo-servicio {/*Titulo del servicio*/
        color: #fff;
        font-size: 33pt;
        font-weight: 600;
        margin-bottom: 10px;
    }
    
    .list-servicio {/*letras de los servicios*/
        padding: 4px 4px;
        font-size: 14pt;
        font-weight: 500;
    }

    #list-services::before {/*icono para movil sm*/
        content: "";
        display: block;
        background: url(../assets/img/imagenes/arrow-down-sm.png) no-repeat;
        width: 30px;
        height: 30px;
        float: left;
        margin-left: -3em;
    }

    .medios-bordes {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        padding-left: 0;
    }

    .servicios {
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(10,134,135,1) 100%);
        margin-bottom: 15em;
        margin-top: 7em;
    }


    .puntos-title {
        font-size: 13pt;
        line-height: 16pt;
    }
    
    .puntos {
        padding: 2em;
        height: 19vh;
        margin: 1em;
        background: linear-gradient(90deg, rgba(159,208,208,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(159,208,208,1) 100%);
        width: 24vw;
    }

    .experiencia {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 2em 1em 2em 1em;
        margin: 10em 0 2em 0;
    }

    .titulo {
        color: #fff;
        font-size: 25pt;
        font-weight: 600;
    }

    .texto {
        color: #fff;
        font-size: 19pt;
        font-weight: 500;
    }


    .font-item{
        color: #fff;
        list-style:none;
    } 
    .puntos-text{
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 0.7;
    }

    .resumen {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 1em 2em 1em 2em;
        margin: 1em 0 1em 0;
    }
    .texto-r {
        color: #fff;
        font-size: 18pt;
        font-weight: 600;
    }
    img{
        width: 100%;
    }
    .box {
        margin-top: -6em;
        z-index: 1;
        margin-bottom: -6em;
    }

    .clientes{
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,0) 100%);
    padding: 3em;
    }
 }

/*/ `xl` applies to large devices (desktops, less than 1200px)*/
@media (max-width: 1199.98px) { 
    .img-logo{
        max-width: 200px;
        width: 9vw;
    }
    
    .titulo-servicio {/*Titulo del servicio*/
        color: #fff;
        font-size: 35pt;
        font-weight: 600;
        margin-bottom: 10px;
    }
    
    .list-servicio {/*letras de los servicios*/
        padding: 4px 4px;
        font-size: 19pt;
        font-weight: 500;
    }

    #list-services::before {/*icono para movil sm*/
        content: "";
        display: block;
        background: url(../assets/img/imagenes/arrow-down.png) no-repeat;
        width: 50px;
        height: 50px;
        float: left;
        margin-left: -4em;
    }

    .medios-bordes {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        padding-left: 0;
    }

    .servicios {
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(10,134,135,1) 100%);
        margin-bottom: 15em;
        margin-top: 7em;
    }


    .puntos-title {
        font-size: 13pt;
        line-height: 16pt;
    }
    
    .puntos {
        padding: 2em;
        height: 19vh;
        margin: 1em;
        background: linear-gradient(90deg, rgba(159,208,208,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(159,208,208,1) 100%);
        width: 24vw;
    }

    .experiencia {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 2em 1em 2em 1em;
        margin: 10em 0 2em 0;
    }

    .titulo {
        color: #fff;
        font-size: 25pt;
        font-weight: 600;
    }

    .texto {
        color: #fff;
        font-size: 19pt;
        font-weight: 500;
    }


    .font-item{
        color: #fff;
        list-style:none;
    } 
    .puntos-text{
        font-size: 21pt;
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 0.7;
    }

    .resumen {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 1em 2em 1em 2em;
        margin: 1em 0 1em 0;
    }
    .texto-r {
        color: #fff;
        font-size: 18pt;
        font-weight: 600;
    }
    img{
        width: 100%;
    }
    .box {
        margin-top: -6em;
        z-index: 1;
        margin-bottom: -6em;
    }

    .clientes{
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,0) 100%);
    padding: 3em;
    }
 }

/*/ `xxl` applies to x-large devices (large desktops, less than 1400px)*/
@media (max-width: 1399.98px) { 
    .img-logo{
        max-width: 200px;
        width: 9vw;
    }
    
    .titulo-servicio {/*Titulo del servicio*/
        color: #fff;
        font-size: 35pt;
        font-weight: 600;
        margin-bottom: 10px;
    }
    
    .list-servicio {/*letras de los servicios*/
        padding: 4px 4px;
        font-size: 19pt;
        font-weight: 500;
    }

    #list-services::before {/*icono para movil sm*/
        content: "";
        display: block;
        background: url(../assets/img/imagenes/arrow-down.png) no-repeat;
        width: 50px;
        height: 50px;
        float: left;
        margin-left: -4em;
    }

    .medios-bordes {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        padding-left: 0;
    }

    .servicios {
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(10,134,135,1) 100%);
        margin-bottom: 15em;
        margin-top: 7em;
    }


    .puntos-title {
        font-size: 13pt;
        line-height: 16pt;
    }
    
    .puntos {
        padding: 2em;
        height: 19vh;
        margin: 1em;
        background: linear-gradient(90deg, rgba(159,208,208,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(159,208,208,1) 100%);
        width: 24vw;
    }

    .experiencia {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 2em 1em 2em 1em;
        margin: 10em 0 2em 0;
    }

    .titulo {
        color: #fff;
        font-size: 25pt;
        font-weight: 600;
    }

    .texto {
        color: #fff;
        font-size: 19pt;
        font-weight: 500;
    }


    .font-item{
        color: #fff;
        list-style:none;
    } 
    .puntos-text{
        font-size: 21pt;
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 0.7;
    }

    .resumen {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 1em 2em 1em 2em;
        margin: 1em 0 1em 0;
    }
    .texto-r {
        color: #fff;
        font-size: 18pt;
        font-weight: 600;
    }
    img{
        width: 100%;
    }
    .box {
        margin-top: -6em;
        z-index: 1;
        margin-bottom: -6em;
    }

    .clientes{
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,0) 100%);
    padding: 3em;
    }
 }

 @media (min-width: 1399.99px) { 
    .img-logo{
        max-width: 200px;
        width: 6vw;
    }
    
    .titulo-servicio {/*Titulo del servicio*/
        color: #fff;
        font-size: 35pt;
        font-weight: 600;
        margin-bottom: 10px;
    }
    
    .list-servicio {/*letras de los servicios*/
        padding: 4px 4px;
        font-size: 19pt;
        font-weight: 500;
    }

    #list-services::before {/*icono para movil sm*/
        content: "";
        display: block;
        background: url(../assets/img/imagenes/arrow-down.png) no-repeat;
        width: 50px;
        height: 50px;
        float: left;
        margin-left: -4em;
    }

    .medios-bordes {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        padding-left: 0;
    }

    .servicios {
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(10,134,135,1) 100%);
        margin-bottom: 15em;
        margin-top: 7em;
    }


    .puntos-title {
        font-size: 13pt;
        line-height: 16pt;
    }
    
    .puntos {
        padding: 3em;
    height: 15vh;
    margin: 2em;
    background: linear-gradient(90deg, rgba(159,208,208,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(159,208,208,1) 100%);
    width: 23vw;
    }

    .experiencia {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 2em 1em 2em 1em;
        margin: 10em 0 2em 0;
    }

    .titulo {
        color: #fff;
        font-size: 25pt;
        font-weight: 600;
    }

    .texto {
        color: #fff;
        font-size: 19pt;
        font-weight: 500;
    }


    .font-item{
        color: #fff;
        list-style:none;
    } 
    .puntos-text{
        font-size: 21pt;
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 0.7;
    }

    .resumen {
        background: linear-gradient(90deg, rgba(0,129,130,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,129,130,1) 100%);
        padding: 1em 2em 1em 2em;
        margin: 1em 0 1em 0;
    }
    .texto-r {
        color: #fff;
        font-size: 18pt;
        font-weight: 600;
    }
    img{
        width: 100%;
    }
    .box {
        margin-top: -7em;
        z-index: 1;
        margin-bottom: -7em;
    }

    .clientes{
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,0) 100%);
    padding: 3em;
    }
  }
</style>