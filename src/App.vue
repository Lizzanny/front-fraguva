<template>
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
  <Navbar/>
  <router-view/>
  <Footer/>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
}
</script>

<style>

</style>
