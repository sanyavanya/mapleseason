<template>
  <div>
    <template v-for="(video, index) in videos">
      <EmbeddedVideo
        class="embedded-video"
        v-if="index < videoDisplayCount"
        :key="'yt-embedded-video' + video.title"
        :src="video.src"
        :title="video.title"
      />
    </template>
  </div>
</template>
<script>
  import EmbeddedVideo from './EmbeddedVideo'
  import { debounce } from 'debounce'

  export default {
    name: 'Video',
    components: {
      EmbeddedVideo
    },
    data() {
      return {
        pageBottomPositionMax: 0,
        videoDisplayCount: 2,
        videos: [
          {
            title: 'Сюрприз на 35 лет',
            src: 'https://www.youtube.com/embed/6ki32XAn6as'
          },
          {
            title: 'Lewis Capaldi — Someone You Loved',
            src: 'https://vk.com/video_ext.php?oid=-70412264&id=456239080&hash=230ddedcc3c744d7&hd=2'
          },
          {
            title: 'TUMANOV – До конца | Art Music Park',
            src: 'https://vk.com/video_ext.php?oid=-188578502&id=456239058&hash=d7f1c367cf9cc9a1&hd=2'
          },
          {
            title: 'TUMANOV – Город',
            src: 'https://vk.com/video_ext.php?oid=-188578502&id=456239055&hash=6a5cab99ff136a5d&hd=2'
          },
          {
            title: 'All Star | Can’t Stop | Californication',
            src: 'https://vk.com/video_ext.php?oid=-188578502&id=456239056&hash=4cee27ddab20c23b&hd=2'
          },
          {
            title: 'The Weeknd – Blinding Lights (карантинный кавер)',
            src: 'https://vk.com/video_ext.php?oid=-70412264&id=456239055&hash=63d9a14e189b74e6&hd=2'
          },
          {
            title: 'Rihanna – Umbrella',
            src: 'https://vk.com/video_ext.php?oid=-70412264&id=456239054&hash=8d4dd9763428728d&hd=2'
          },
          {
            title: 'Live на фестивале «Высота»',
            src: 'https://vk.com/video_ext.php?oid=-70412264&id=456239036&hash=13f3d64958892580'
          },
          {
            title: 'TUMANOV – Кто ты | Онлайн-выпускной 2020',
            src: 'https://vk.com/video_ext.php?oid=-188578502&id=456239044&hash=0fce68d5e32fa570&hd=2'
          },
          {
            title: 'TUMANOV — Пой мне | Спорт Порт 15.03.2020',
            src: 'https://vk.com/video_ext.php?oid=-188578502&id=456239041&hash=b790c65e7ec31d5c&hd=2'
          },
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
    },
    methods: {
      handleScroll() {
        let pageBottomPosition = window.scrollY + window.screen.height
        if (pageBottomPosition > this.pageBottomPositionMax + 50) {
          let videos = document.getElementsByClassName('embedded-video')
          let lastLoadedVideoPosition = videos[videos.length - 1].offsetTop
          if (pageBottomPosition > lastLoadedVideoPosition) this.videoDisplayCount += 2
          this.pageBottomPositionMax = pageBottomPosition
        }
      }
    },
    created() {
      window.addEventListener('scroll', debounce(this.handleScroll, 500))
    },
    destroyed() {
      window.addEventListener('scroll', debounce(this.handleScroll, 500))
    }
  }
</script>

<style lang="scss" scoped>
</style>