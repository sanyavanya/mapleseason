<template>
  <div class="music">
      <MusicPlayer :playlist="songs" maxWidth="400px" />
  </div>
</template>
<script>
  import MusicPlayer from "../components/MusicPlayer"

  export default {
    name: 'Music',
    components: {
      MusicPlayer
    },
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
          // {
          //   src: 'maple_season_-_fix_you.mp3',
          //   title: 'Fix You',
          //   artist: 'Coldplay'
          // },
          {
            src: 'tumanov_-_do_kontsa.mp3',
            title: 'До конца',
            artist: 'TUMANOV'
          },
          {
            src: 'tumanov_-_gorod.mp3',
            title: 'Город',
            artist: 'TUMANOV'
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
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .music {
    max-width: 1600px;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    background-image: url("../assets/images/photos/music.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 90% 50%;
  }
</style>