<template lang="">
    <div class="container-fluid">
        <footer>
            <div class="row justify-content-center align-items-center" id="aviso">
                <div class="col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-4 text-center">
                    <button class="aviso" data-bs-toggle="modal" data-bs-target="#myModal">AVISO DE PRIVACIDAD</button>
                </div>
            </div>
            <div class="row py-3 justify-content-center align-items-center" id="footer">
                <div class="col-xs-10 col-sm-8 col-md-8 col-lg-4 col-xl-4">
                    <h4 class="copy text-center mb-0">COPYRIGHT © 2022 | FRAGUVA ENERGY</h4>
                </div>
            </div>
        </footer>
        <Modal/>
    </div>
</template>
<script>
import Modal from './Modal.vue'
export default {
    components:{
        Modal
    }
}
</script>
<style scoped>
    #aviso{
        font-size: 18px;
        background-color: #0e6b6c;
        color: white;
        height: 40px;
    }
    .aviso{
        background: rgb(0, 0, 0);
        background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(19, 24, 30, 0) 88%, rgba(255, 255, 255, 0.7231267507002801) 100%);
        padding:2px 60px;
        color: white;
        text-decoration: solid;
            border: none;
    }
    #footer{
        font-size: 10pt;
        color: white;
        height: 50px;
        background-color: black;
    }
    .footer{
        background-color: transparent;
        position: relative;
        z-index: -1;
    }
    .copy{
        font-size:1.2em;
    }
    

    /* MEDIA QUERYS MOBILE */

@media (max-width: 600px) {
    #aviso{
        font-size: 18px;
        background-color: #0e6b6c;
        color: white;
        height: 5.3vh;
    }

    .aviso {
        font-size: 15px;
        font-weight: 500;
        padding: 4px 50px;
    }

    .copy {
        font-size: 16px;
    }

    #footer{
        font-size: 10pt;
        color: white;
        height: 5.5vh;
        background-color: black;
    }
}

@media (min-width: 767px) and (max-width: 973px) {
    .aviso {
        padding: 2px 30px 
    }
}



</style>