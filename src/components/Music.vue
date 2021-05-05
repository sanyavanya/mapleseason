<template>
  <div class="music">
    <AudioPlayer :playlist="songs" />
  </div>
</template>
<script>
  import AudioPlayer from "./AudioPlayer"

  export default {
    name: 'Music',
    components: { AudioPlayer },
    data() {
      return {
        songs: [
          {
            src: 'maple_season_-_blinding_lights.mp3',
            title: 'Blinding Lights',
            artist: 'The Weeknd'
          },
          {
            src: 'maple_season_-_okean_i_tri_reki.mp3',
            title: 'Океан и три реки',
            artist: 'Валерий Меладзе и гр. Виа Гра'
          },
          {
            src: 'maple_season_-_aeroplan.mp3',
            title: 'Аэроплан',
            artist: 'Братья Грим'
          },
          {
            src: 'maple_season_-_vesna.mp3',
            title: 'Весна',
            artist: '5’Nizza'
          },
          {
            src: 'maple_season_-_letet.mp3',
            title: 'Лететь',
            artist: 'Амега'
          },
          {
            src: 'maple_season_-_californication.mp3',
            title: 'Californication',
            artist: 'Red Hot Chili Peppers'
          },
          {
            src: 'maple_season_-_fix_you.mp3',
            title: 'Fix You',
            artist: 'Coldplay'
          },
          {
            src: 'tumanov_-_kto_ty.mp3',
            title: 'Кто ты',
            artist: 'TUMANOV'
          },
          {
            src: 'tumanov_-_poy_mne.mp3',
            title: 'Пой мне',
            artist: 'TUMANOV'
          },
          {
            src: 'tumanov_-_muza.mp3',
            title: 'Муза',
            artist: 'TUMANOV'
          }
          // TODO add the rest of the songs
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .music {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    background-image: url("../assets/photos/music.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 70% 55%;
  }
</style>