<template>
  <div class="video">
    <template v-for="(video, index) in videos">
      <VideoEmbedder
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
  import VideoEmbedder from '../components/VideoEmbedder'
  import { debounce } from 'debounce'

  export default {
    name: 'Video',
    components: {
      VideoEmbedder
    },
    data() {
      return {
        pageBottomPositionMax: 0,
        videoDisplayCount: 2,
        videos: [
          {
            title: 'The Weeknd — Blinding Lights',
            src: 'https://www.youtube.com/embed/3xqy-yas5Dc',
            ratio: 56.3 // TODO specify ratios for every video and pass it as props
          },
          {
            title: 'Сюрприз на 35 лет',
            src: 'https://www.youtube.com/embed/6ki32XAn6as'
          },
          {
            title: 'Noize MC — Вояджер 1',
            src: 'https://www.youtube.com/embed/PFvavy6C9BQ'
          },
          {
            title: 'Bruno Mars — Locked Out of Heaven',
            src: 'https://www.youtube.com/embed/LLgqPXH7tHY'
          },
          {
            title: 'Lewis Capaldi — Someone You Loved',
            src: 'https://vk.com/video_ext.php?oid=-70412264&id=456239080&hash=230ddedcc3c744d7&hd=2'
          },
          {
            title: 'Hi-Fi — Седьмой лепесток',
            src: 'https://www.youtube.com/embed/8PCXjMfusOY'
          },
          {
            title: 'ДДТ — Это всё',
            src: 'https://www.youtube.com/embed/F74Wr3jmAY8'
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
            title: 'Амега — Лететь',
            src: 'https://www.youtube.com/embed/HjYx0uF0SFA'
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
        debounce(() => {
          let pageBottomPosition = window.scrollY + window.screen.height
          if (pageBottomPosition > this.pageBottomPositionMax + 50) {
            let videos = document.getElementsByClassName('embedded-video')
            let lastLoadedVideoPosition = videos[videos.length - 1].offsetTop
            if (pageBottomPosition > lastLoadedVideoPosition) this.videoDisplayCount += 2
            this.pageBottomPositionMax = pageBottomPosition
          }
        }, 500)()
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style lang="scss" scoped>
  .video {
    width: 100%;
    @media (max-width: 1000px) {
      margin-top: 1rem;
    }
  }
</style>