<template>
  <div class="audio-player" :style="'max-width: ' + maxWidth">
    <div class="audio-player__now-playing">
      <div class="audio-player__meta">
        <div class="audio-player__title">{{ playlist[selectedSongIndex].title }}</div>
        <div class="audio-player__artist">{{ playlist[selectedSongIndex].artist }}</div>
      </div>
      <div class="audio-player__progress">
        <div
          class="audio-player__position-container"
          ref="positionContainer"
          @mousedown="trackMouse"
          @mouseup="jumpToClickPos"
          v-touch:start="trackTouch"
        >
          <div class="audio-player__position-track"></div>
          <div class="audio-player__position-played" :style="progressWidth">
            <div class="audio-player__position-handle"></div>
            <!-- TODO what's up with indentation -->
          </div>
        </div>
        <div class="audio-player__time-container">
          <span class="audio-player__time audio-player__time--current">{{
            timeCurrent | time
          }}</span>
          <span class="audio-player__time audio-player__time--duration">{{
            timeDuration | time
          }}</span>
        </div>
      </div>
      <div class="audio-player__control">
        <button class="audio-player__control-button">
          <img
            src="../assets/images/icons/prev.png"
            class="audio-player__play-icon"
            @click="changeSong(selectedSongIndex - 1)"
          />
        </button>
        <button class="audio-player__control-button" @click="playPause" ref="playButton">
          <img
            src="../assets/images/icons/loading.png"
            class="audio-player__play-icon audio-player__play-icon--loading"
            v-if="loading"
          />
          <img
            src="../assets/images/icons/pause.png"
            class="audio-player__play-icon"
            v-else-if="playing"
          />
          <img src="../assets/images/icons/play.png" class="audio-player__play-icon" v-else />
        </button>
        <button class="audio-player__control-button">
          <img
            src="../assets/images/icons/next.png"
            class="audio-player__play-icon"
            @click="changeSong(selectedSongIndex + 1)"
          />
        </button>
      </div>
      <audio
        controls
        :src="getSongSrc(playlist[selectedSongIndex].src)"
        class="audio-player__hidden-default"
        ref="audio"
      ></audio>
    </div>
    <div class="audio-player__playlist">
      <div
        class="audio-player__songs-container"
        :class="{'audio-player__songs-container--smooth-scroll': smoothScroll}"
        ref="playlistContainer"
      >
        <div
          class="audio-player__song"
          :class="{'audio-player__song--current': index === selectedSongIndex}"
          v-for="(song, index) in playlist"
          :key="song.title"
          @click="changeSong(index)"
        >
          <div class="audio-player__song-title">{{ song.title }}</div>
          <div class="audio-player__song-artist">{{ song.artist }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicPlayer',
  props: ['playlist', 'maxWidth'],
  data() {
    return {
      loading: true,
      playing: false,
      selectedSongIndex: 0,
      movedFraction: undefined,
      releasePosition: 0,
      timeCurrent: 0,
      timeDuration: 0,
      playButtonFocused: false,
      smoothScroll: true,
    };
  },
  computed: {
    progressWidth() {
      return (
        'width: ' +
        (this.movedFraction === undefined ? this.playedFraction : this.movedFraction) * 100 +
        '%'
      );
    },
    playedFraction() {
      return (this.timeCurrent / this.timeDuration).toFixed(2);
    },
  },
  methods: {
    changeSong(index) {
      if (index < -1 || index > this.playlist.length) return;
      if (index === -1) index = this.playlist.length - 1;
      if (index === this.playlist.length) index = 0;
      const player = this.$refs.audio;
      if (this.selectedSongIndex === index) {
        player.currentTime = 0;
        player.play();
        this.playing = true;
        return;
      }
      this.playPause();
      player.currentTime = 0;
      this.loading = true;
      this.selectedSongIndex = index;
      player.onloadeddata = () => {
        this.finishLoadingAndSetDuration();
        this.startPlaying();
        player.onloadeddata = null;
      };
      player.onprogress = () => {
        this.finishLoadingAndSetDuration();
        this.startPlaying();
        player.onprogress = null;
      };
    },
    getSongSrc(song) {
      return require('../assets/audio/' + song);
    },
    finishLoadingAndSetDuration() {
      this.loading = false;
      this.timeDuration = this.$refs.audio.duration;
    },
    startPlaying() {
      this.$refs.audio.play();
      this.playing = true;
    },
    playPause() {
      const player = this.$refs.audio;
      if (player.paused) {
        player.play();
        this.playing = true;
      } else {
        player.pause();
        this.playing = false;
      }
    },
    trackTouch(event) {
      this.movedFraction = this.calculateMovedFraction(event);
      if (!document.ontouchmove) {
        document.ontouchmove = event => {
          this.movedFraction = this.calculateMovedFraction(event);
          document.ontouchend = () => {
            this.$refs.audio.currentTime = this.movedFraction * this.$refs.audio.duration;
            setTimeout(() => (this.movedFraction = undefined), 500);
            document.ontouchmove = null;
            document.ontouchend = null;
          };
        };
      }
    },
    trackMouse(event) {
      this.movedFraction = this.calculateMovedFraction(event);
      if (!document.onmousemove) {
        document.onmousemove = event => {
          this.movedFraction = this.calculateMovedFraction(event);
          document.onmouseup = () => {
            this.$refs.audio.currentTime = this.movedFraction * this.$refs.audio.duration;
            setTimeout(() => (this.movedFraction = undefined), 500);
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    },
    jumpToClickPos(event) {
      document.onmousemove = null;
      this.movedFraction = this.calculateMovedFraction(event);
      this.$refs.audio.currentTime = this.movedFraction * this.timeDuration;
      setTimeout(() => (this.movedFraction = undefined), 500);
    },
    calculateMovedFraction(event) {
      let trackWidth = this.$refs.positionContainer.clientWidth;
      let trackLeft = this.$refs.positionContainer.getBoundingClientRect().left;
      let pageX = event.pageX || event.touches[0].pageX;
      let position = (pageX - trackLeft) / trackWidth;
      if (position < 0) position = 0;
      if (position > 1) position = 1;
      return position;
    },
  },
  mounted() {
    let player = this.$refs.audio;
    player.onloadeddata = () => {
      this.finishLoadingAndSetDuration();
      player.onloadeddata = null;
    };
    player.onprogress = () => {
      this.finishLoadingAndSetDuration();
      player.onprogress = null;
    };
    player.ontimeupdate = event => {
      this.timeCurrent = event.target.currentTime;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
    this.$refs.playButton.onfocus = () => {
      this.playButtonFocused = true;
    };
    this.$refs.playButton.onblur = () => {
      this.playButtonFocused = false;
    };
    document.onkeypress = event => {
      if (!this.playButtonFocused && event.code === 'Space') this.playPause();
    };
    window.onkeypress = event => {
      if (event.code === 'Space' && event.target == document.body) {
        event.preventDefault();
      }
    };
  },
  beforeDestroy() {
    let player = this.$refs.audio;
    player.onloadeddata = null;
    player.onprogress = null;
    player.ontimeupdate = null;
    this.$refs.playButton.onfocus = null;
    this.$refs.playButton.onblur = null;
  },
  destroyed() {
    document.onmouseup = null;
    document.onkeypress = null;
    window.onkeypress = null;
  },
};
</script>
<style lang="scss" scoped>
.audio-player__hidden-default {
  display: none;
}

.audio-player {
  margin: 2rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  width: 100%;
}

.audio-player__now-playing {
  padding: 1.5rem 1rem;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.audio-player__control {
}

.audio-player__control-button {
  margin: 0 0.5rem;
  opacity: 0.8;
  background-color: transparent;
  border: none;
  outline: none;
  transition-duration: 80ms;
  &:hover {
    opacity: 1;
    transition-duration: 20ms;
  }
}

.audio-player__meta {
  text-align: center;
  margin-bottom: 1rem;
}

.audio-player__title {
  font-size: 1.6rem;
}

.audio-player__artist {
  font-size: 1.1em;
}

.audio-player__progress {
  width: 100%;
  /*max-width: 400px;*/
}

.audio-player__play-icon {
  width: 40px;
  &:hover {
    cursor: pointer;
  }
}

.audio-player__play-icon--loading {
  animation: rotating 1.5s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.audio-player__time-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
}

.audio-player__time {
  font-size: 0.9em;
}

.audio-player__position-container {
  opacity: 0.8;
  display: flex;
  position: relative;
  padding: 7px 0;
  transition-duration: 80ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transition-duration: 20ms;
  }
}

.audio-player__position-track {
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.6);
}

.audio-player__position-played {
  background-color: white;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
  height: 3px;
  border-radius: 2px;
  position: absolute;
}

.audio-player__position-handle {
  width: 7px;
  height: 7px;
  background-color: white;
  transform: translateX(3px) translateY(-2px);
  border-radius: 50%;
  position: absolute;
  right: 0;
}

.audio-player__playlist {
}

.audio-player__songs-container {
  border-top: 2px solid rgba(255, 255, 255, 0.6);
  max-height: 300px;
  overflow: scroll;
}

.audio-player__songs-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.audio-player__songs-container--smooth-scroll {
  scroll-behavior: smooth;
}

.audio-player__song {
  padding: 0.3em 0.5em;
  text-align: center;
  transition-duration: 50ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition-duration: 20ms;
  }
}

.audio-player__song--current {
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 0.7);
}

.audio-player__song-title {
}

.audio-player__song-artist {
  font-size: 0.75em;
}
</style>
