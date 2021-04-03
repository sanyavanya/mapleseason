<template>
  <div>
    <h2 class="heading" v-if="title">{{title}}</h2><!-- TODO style headings -->
    <div class="embedded_video-container-2">
      <div class="embedded_video-container" :style="{paddingBottom: paddingBottom}">
        <iframe
          :src="src"
          frameborder="0"
          allowfullscreen="true"
          class="embedded_video"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmbeddedVideo',
  props: {
    src: {type: String, required: true},
    title: String,
    customRatio: Number
  },
  computed: {
    paddingBottom() {
      let ratio = this.customRatio ? this.customRatio : 56.25
      return `calc(${ratio}%)`
    }
  }
}
</script>

<style lang="scss" scoped>
  .embedded_video-container-2 {
    padding: 0 4rem;
    margin: 0 auto 4rem auto;
    max-width: 1200px; // TODO prolly should be adaptive to screens
  }
  .embedded_video-container {
    background-color: "#f0f0f0"; // TODO do you need this?
    height: 0;
    margin: 1rem 0;
    position: relative;
    width: 100%;
  }
  .embedded_video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>