<template>
  <div>
    <template v-if="title">
      <h2>{{title}}</h2><!-- TODO style headings -->
    </template>
    <div class="yt-embedded-video-container">
      <div class="yt-embedded-video">
        <iframe
          class="yt-iframe"
          youtube-video-id="g99nKpefMfA"
          id="vossen-youtube"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="80%"
          height="100%"
          :src="src + urlParams"
          style="left: 0px;" 
        ></iframe>
      </div>
	</div>
  </div>
</template>
<script>
  export default {
    name: 'YTEmbeddedVideo',
    props: {
      src: {type: String, required: true},
      title: String
    },
    data() {
      return {
        urlParams: '?autoplay=0&amp;controls=1&amp;showinfo=0&amp;loop=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fmapleseason.ru&amp;widgetid=1'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .yt-embedded-video-container { // TODO BEM dash or underscore?
    display: flex;
    justify-content: center;
    .yt-embedded-video {
      position: relative;
      width: 92%;
      height: 49.5%;
      max-width: 1600px;
      max-height: 900px;
      padding-bottom: 32%;
      padding-top: 25px;
      height: 0;
      text-align: center;
      margin-bottom: 1%;
      .yt-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }  
</style>