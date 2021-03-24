<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  // TODO scrollbar styling
  font-family: Helvetica, Arial, sans-serif; // TODO Add a cool font like Nunito
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

body {
  background-color: black; //TODO scss constants: $background_color
  color: white; // TODO scss constants: $text_color
}
</style>
