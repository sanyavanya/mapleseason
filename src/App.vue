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
// TODO check console for warnings

export default {
  name: 'App',//TODO rename?
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
  color: white; // TODO scss constants: $text_color SHOULDN'T BE GLOBAL!
}

.heading {
  text-align: center;
}

.component {// TODO every component should probably have the same margin so that they naturally space out evenly wherever you put them

  margin-bottom: 1rem;
}

.inline-link {
	color: #4692c2; //TODO const
	text-decoration: underline;
}

.inline-link:hover {
	color: #f56a35; //TODO const
}
</style>
