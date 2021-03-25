<template>
  <div>
    <h1 class="heading">Видео</h1>
    <YTEmbeddedVideo 
      v-for="video in videos"
      :key="'yt-embedded-video' + video.title"    
      :src="video.src"
      :title="video.title"
    />
  </div>
</template>
<script>
  import YTEmbeddedVideo from './YTEmbeddedVideo'

  export default {
    name: 'Video',
    components: {// TODO set components globally?
      YTEmbeddedVideo
    },
    data() {
      return {
        videos: [
          {
            title: 'Live со свадьбы в ресторане NOVO',
            src: 'https://www.youtube.com/embed/X5CzkMD_qJQ'
          },
          {
            title: 'В. Меладзе и Виа Гра — Океан и три реки (Live Cover)',
            src: 'https://www.youtube.com/embed/k14NCbwJIGg'            
          },
          {
            title: 'Промо',
            src: 'https://www.youtube.com/embed/g99nKpefMfA'
          },
          {
            title: 'Амега — Лететь (Live Cover)',
            src: 'https://www.youtube.com/embed/Fi0-8HWjYlk'
          },
          {
            title: 'Ed Sheeran — Perfect (Live Cover)',
            src: 'https://www.youtube.com/embed/gZVSFS6oAY4'
          },
          {
            title: 'Ed Sheeran feat. Justin Bieber — I Don’t Care (Live Cover)',
            src: 'https://www.youtube.com/embed/s2H-LCME8d0'
          },
          {
            title: 'Базиль — Ай-яй-я (Live Cover)',
            src: 'https://www.youtube.com/embed/vy98ctei2JQ'
          }          
        ]
      }
    }
  }
</script>