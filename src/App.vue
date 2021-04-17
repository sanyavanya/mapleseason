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
  margin: 0;
}

.heading {
  text-align: center;
}

.heading--2 {
  margin-bottom: .5rem;
}

.component {// TODO every component should probably have the same margin so that they naturally space out evenly wherever you put them
  margin-bottom: 1rem;
}

.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.inline-link {
	color: #4692c2; //TODO const
	text-decoration: underline;
}

.inline-link:hover {
	color: #f56a35; //TODO const
}

.icon-link-group {
  display: flex;
  justify-content: center;
}

.icon-link {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem;
  white-space: nowrap;
}

.icon-link__icon {
  height: 2rem;
  margin-right: .1rem;
}

.icon-link__icon--small {
  height: 1.7rem;
}

.icon-link--vk:hover {
  color: #4680c2;
  text-decoration-color: #4680c2;
}

.icon-link--instagram:hover {
  color: #f56a35;
  text-decoration-color: #f56a35;
}

.icon-link--youtube:hover {
  color: #ff0000;
  text-decoration-color: #ff0000;
}

.icon-link--twitter:hover {
  color: #1da1f2;
  text-decoration-color: #1da1f2;
}

.icon-link--viber:hover {
  color: #7360f2;
  text-decoration-color: #7360f2;
}

.icon-link--whatsapp:hover {
  color: #46c756;
  text-decoration-color: #46c756;
}

.icon-link--telegram:hover {
  color: #2eb6e5;
  text-decoration-color: #2eb6e5;
}

.icon-link--phone:hover {
  color: #f9bc66;
  text-decoration-color: #f9bc66;
}
</style>
