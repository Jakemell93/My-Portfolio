<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style>
/* Global styles can go here, or import them in main.js */
</style>

