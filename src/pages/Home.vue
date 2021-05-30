<template>
  <div class="home">
    <VideoEmbedder src="https://www.youtube.com/embed/g99nKpefMfA" :customRatio="43" />
    <HomeAbout />
    <BandMembers />
    <ContactFooter />
  </div>
</template>
<script>
  import VideoEmbedder from '../components/VideoEmbedder'
  import HomeAbout from '../components/HomeAbout'
  import BandMembers from '../components/BandMembers'
  import ContactFooter from '../components/ContactFooter'

  export default {
    name: 'Home',
    components: {
      VideoEmbedder,
      HomeAbout,
      BandMembers,
      ContactFooter
    }
  }
</script>
<style lang="scss" scoped>
  .home {
    @media (max-width: 1000px) {
      margin-top: 2rem;
    }
  }
</style>