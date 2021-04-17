<template>
  <div>
    <!-- TODO should components be kebab-cased? -->
    <EmbeddedVideo src="https://www.youtube.com/embed/g99nKpefMfA" :customRatio="43"/>
    <About />
    <BandMembers />
    <FooterContact />
  </div>
</template>
<script>
  import EmbeddedVideo from './EmbeddedVideo'
  import About from './About'
  import BandMembers from './BandMembers'
  import FooterContact from './FooterContact'

  export default {
    name: 'Home',
    components: {
      EmbeddedVideo,
      About,
      BandMembers,
      FooterContact
    }
  }
</script>

<style lang="scss" scoped>
  
</style>