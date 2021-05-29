<template>
  <div id="app">
    <AppNavbar />
    <div class="page">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'
// TODO check console for warnings

export default {
  name: 'App',//TODO rename?
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

  #app {
    // TODO scrollbar styling
    /*font-family: Helvetica, Arial, sans-serif; // TODO Add a cool font like Nunito*/
    font-family: 'Nunito', sans-serif;
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

  .page {
    display: flex;
    justify-content: center;
    width: 100%;
    @media (max-width: 1000px) {
      margin-top: 4em;
    }
  }

  .heading {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

  .heading--2 {
    margin-bottom: .5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
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

  .app-icon-link__icon {
    height: 2rem;
    margin-right: .1rem;
  }

  .app-icon-link__icon--small {
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
