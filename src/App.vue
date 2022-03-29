<template>
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
  <router-view/>
  <Footer/>
</template>
<script>
import Footer from './components/Footer.vue'
export default {
  components: {
    Footer
  },
}
</script>

<style>

</style>
