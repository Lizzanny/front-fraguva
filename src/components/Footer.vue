<template lang="">
    <div>
        <footer>
            <div class="row justify-content-center" style="background-color: #008182;">
                <div class="col-10 col-sm-5 col-md-4 col-lg-4 col-xl-4 text-center">
                    <button class="aviso" data-bs-toggle="modal" data-bs-target="#myModal">AVISO DE PRIVACIDAD</button>
                </div>
            </div>
            <div class="row justify-content-center" style="background-color: #000; color: #fff;">
                <div class="col-10 col-sm-5 col-md-4 col-lg-4 col-xl-4 text-center">
                    <h4 class="copy">COPYRIGHT © 2022 | FRAGUVA ENERGY</h4>
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
    .aviso{
        font-size: 12pt;
        color: #fff;
        font-weight: 500;
        border: none;
        padding: 5px 55px 5px 55px;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0) 95%, rgba(255,255,255,1) 100%);
        margin: 7px;
    }
    .footer{
        background-color: transparent;
        position: relative;
        z-index: -1;
        
    }
    .copy{
        font-size: 10pt;
    }
</style>