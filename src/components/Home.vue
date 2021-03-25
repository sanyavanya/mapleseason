<template>
  <div>
    <!-- TODO should components be kebab-cased? -->
    <YTEmbeddedVideo src="https://www.youtube.com/embed/g99nKpefMfA" />
    <About />
    <BandMembers />
    <FooterContact />
  </div>
</template>
<script>
  import YTEmbeddedVideo from './YTEmbeddedVideo'
  import About from './About'
  import BandMembers from './BandMembers'
  import FooterContact from './FooterContact'

  export default {
    name: 'Home',
    components: {// TODO set components globally?
      YTEmbeddedVideo,
      About,
      BandMembers,
      FooterContact
    }
  }
</script>

<style lang="scss" scoped>
  
</style>