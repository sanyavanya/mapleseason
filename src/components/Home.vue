<template>
  <div>
    <!-- TODO should components be kebab-cased? -->
    <YTEmbeddedVideo src="https://www.youtube.com/embed/g99nKpefMfA" />
    <h1>Кавер-группа Maple Season</h1><!-- TODO style headers, _T() -->
  </div>
</template>
<script>
  import YTEmbeddedVideo from './YTEmbeddedVideo'

  export default {
    name: 'Home',
    components: {// TODO set components globally?
      YTEmbeddedVideo
    }
  }
</script>