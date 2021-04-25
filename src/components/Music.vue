<template>
  <div class="music">
    <div class="songs-container">
      <div class="songs">
        <AudioPlayer :playlist="songs" />
<!--        <div class="song" v-for="song in songs" :key="song.artist + song.title">-->
<!--          <audio :src="song.src" controls>Ошибка: ваш браузер не поддерживает аудио.</audio>-->
<!--          <br>-->
<!--          <div class="song__title">{{song.title}}</div>-->
<!--          <div class="song__artist">{{song.artist}}</div>-->
<!--        </div>-->
      </div>
    </div>
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
            title: 'Blinding Lights',
            artist: 'TUMANOV'
          },
          {
            src: 'tumanov_-_poy_mne.mp3',
            title: 'Blinding Lights',
            artist: 'TUMANOV'
          },
          {
            src: 'tumanov_-_muza.mp3',
            title: 'Blinding Lights',
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
  }
  .songs-container {
    max-width: 1600px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    background-image: url("../assets/photos/music.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 70% 55%;
  }

  .songs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .song {
    border: 1.5px solid white;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.6);
    margin:20px;
    width: 304px;
    text-align: center;
    font-weight: 300;
  }

  .song__title {
    // margin-top: -4px;
    color: white;
    font-size: 15pt;
    font-weight: 400;
  }

  .song__artist {
    // margin-top: -4px;
    margin-bottom: 5px;
    color: #d5d0be;
    font-size: 11pt;
    font-weight: 400;
  }
</style>