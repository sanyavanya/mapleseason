<template>
  <div class="audio-player">
    <button class="audio-player__play-button" @click="playPause">
      <img src="../assets/icons/pause.png" class="audio-player__play-icon" v-if="playing">
      <img src="../assets/icons/play.png" class="audio-player__play-icon" v-else>
    </button>
      <span class="audio-player__time audio-player__time--current">0:00</span>
      <span class="audio-player__time audio-player__time--duration">0:00</span>
      <div class="audio-player__position-container" @mousedown="trackMouse" @mouseup="jumpToClickPos">
          <div class="audio-player__position-track">

          </div>
          <div class="audio-player__position-played" :style="progressWidth">
              <div class="audio-player__position-handle"></div><!-- TODO what's up with indentation -->
          </div>
      </div>
      <br>
    <audio controls :src="getSongSrc(selectedSong.src)" class="audio-player__hidden-default" ref="audio">
    </audio>
  </div>
</template>
<script>
  export default {
    name: 'AudioPlayer',
    props: ['playlist'],
    data() {
      return {
        playing: false,
        selectedSong: this.playlist[0],
        playedFraction: 0,
        movedFraction: undefined,
        releasePosition: 0
      }
    },
    computed: {
      progressWidth() {
        return 'width: ' + (((this.movedFraction === undefined) ? this.playedFraction : this.movedFraction) * 100) + '%'
      }
    },
    methods: {
      getSongSrc(song) {
        return require('../assets/audio/' + song)
      },
      playPause() {
        const player = this.$refs.audio
        if (player.paused) {
          player.play()
          this.playing = true
        } else {
          player.pause()
          this.playing = false
        }
      },
      trackMouse(event) { // TODO track space bar hit PLAY/PAUSE
        let trackWidth = event.target.closest('.audio-player__position-container').clientWidth
        let trackLeft = event.target.getBoundingClientRect().left
        if (!document.onmousemove) {
          document.onmousemove = (event) => {
            let mousePos = event.pageX
            let position = (mousePos - trackLeft) / trackWidth
            if (position < 0) position = 0
            if (position > 1) position = 1
            this.movedFraction = position
            document.onmouseup = () => {
              this.$refs.audio.currentTime = this.movedFraction * this.$refs.audio.duration
              this.playedFraction = this.movedFraction
              this.movedFraction = undefined
              document.onmousemove = null
              document.onmouseup = null
            }
          }
        }
      },
      jumpToClickPos(event) { // TODO maybe optimize after you finish trackMouse()
        document.onmousemove = null
        if (event.target.classList.contains('audio-player__position-handle')) return
        let clickPos = event.pageX
        let trackLeft = event.target.getBoundingClientRect().left
        let trackWidth = event.target.closest('.audio-player__position-container').clientWidth
        this.$refs.audio.currentTime = ((clickPos - trackLeft) / trackWidth) * this.$refs.audio.duration
      }
    },
    mounted(){
      this.$refs.audio.addEventListener('timeupdate', (event) => {
        this.playedFraction = (event.target.currentTime / event.target.duration).toFixed(2)
      })
      document.onmouseup = () => {
        document.onmousemove = null
      }
      document.onkeypress = (event) => {
        if (event.code === 'Space') this.playPause()
      }
    },
    destroyed() {
      document.onmouseup = null
      document.onkeypress = null
    }
  }
</script>
<style lang="scss" scoped>
    .audio-player__hidden-default {
        display: none;
    }
  .audio-player {
      user-select: none;
    border: 1px solid white;
    width: 400px;
    height: 100px;
      padding: 0 1rem;
  }
  .audio-player__play-button {
    opacity: .8;
    background-color: transparent;
    border: none;
    outline: none;
      transition-duration: 100ms;
      &:hover {
          opacity: 1;
      }
  }
  .audio-player__play-icon {
    width: 50px;
    &:hover {
      cursor: pointer;
    }
  }
  .audio-player__position-container {
      opacity: .8;
      transition-duration: 100ms;
      display: flex;
      position: relative;

      /*display: flex;*/
      /*justify-content: center;*/
      padding: 7px 0; //TODO add padding for easier click
      &:hover {
          opacity: 1;
          cursor: pointer;
      }
  }
  .audio-player__position-track {
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: white;
  }
    .audio-player__position-played {
        background-color: black;
        height: 2px;
        border-radius: 1px;
        position: absolute;
    }

    .audio-player__position-handle {
        width: 6px;
        height: 6px;
        background-color: black;
        transform: translateX(3px) translateY(-2px);
        border-radius: 3px;
        position: absolute;
        right: 0;
    }
</style>