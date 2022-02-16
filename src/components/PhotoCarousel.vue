<template>
  <div class="photo-carousel-container">
    <div class="photo-carousel">
      <div class="photo-carousel__view" v-touch:swipe="handleSwipe">
        <div
          class="photo-carousel__view-button-container photo-carousel__view-button-container--left"
          @click="changeImage(selectedIndex - 1)"
          v-if="selectedIndex > 0"
        >
          <img src="../assets/images/icons/image_prev.png" class="photo-carousel__view-button" />
        </div>
        <img :src="images[selectedIndex]" class="photo-carousel__view-image" />
        <div
          class="photo-carousel__view-button-container photo-carousel__view-button-container--right"
          @click="changeImage(selectedIndex + 1)"
          v-if="selectedIndex < images.length - 1"
        >
          <img src="../assets/images/icons/image_next.png" class="photo-carousel__view-button" />
        </div>
      </div>
      <div class="photo-carousel__feed" ref="feed">
        <div class="photo-carousel__thumbnail-container">
          <div
            v-for="(image, index) in images"
            :key="image"
            class="photo-carousel__thumbnail"
            :class="{'photo-carousel__thumbnail--active': index === selectedIndex}"
            :style="{'background-image': 'url(' + image + ')'}"
            @click="changeImage(index)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhotoCarousel',
  data() {
    return {
      images: [],
      selectedIndex: 0,
    };
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => this.images.push(r(key))); // TODO do the same for audio
    },
    handleSwipe(event) {
      if (event === 'left') this.changeImage(this.selectedIndex + 1);
      if (event === 'right') this.changeImage(this.selectedIndex - 1);
    },
    changeImage(index) {
      if (index < 0 || index > this.images.length - 1 || index === this.selectedIndex) return;
      let $feed = this.$refs.feed;
      let $photo = document.getElementsByClassName('photo-carousel__thumbnail')[index];
      let feedRect = $feed.getBoundingClientRect();
      let photoRect = $photo.getBoundingClientRect();
      if (photoRect.right > feedRect.right || photoRect.left < feedRect.left) {
        let newPhotoPosition = feedRect.left + $feed.clientWidth / 2 - $photo.clientWidth / 2;
        $feed.scrollLeft += photoRect.left - newPhotoPosition;
      }
      this.selectedIndex = index;
    },
    arrowPress(event) {
      //TODO detect mobile swipe
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        this.changeImage(this.selectedIndex - 1);
      }
      if (event.code === 'ArrowRight') {
        event.preventDefault();
        this.changeImage(this.selectedIndex + 1);
      }
    },
  },
  mounted() {
    this.importAll(require.context('../assets/images/carousel/', true, /\.jpg$/)); // TODO before all of these load, it doesn't work in Safari on iOS
    window.addEventListener('keydown', this.arrowPress);
  },
  destroyed() {
    window.removeEventListener('keydown', this.arrowPress);
  },
};
</script>
<style lang="scss" scoped>
.photo-carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-carousel {
  user-select: none;
  max-width: 60vw;
  @media (max-width: 1000px) {
    margin-top: 0;
    max-width: 100vw;
  }
}
.photo-carousel__view {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vw;
  margin-bottom: 1.4rem;
  @media (max-width: 1000px) {
    height: 70vh;
    margin-bottom: 0.3rem;
  }
}
.photo-carousel__view-image {
  max-width: 100%;
  max-height: 100%;
}
.photo-carousel__view-button-container {
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition-duration: 100ms;
  width: 40%;
}
.photo-carousel__view-button-container:hover {
  cursor: pointer;
  opacity: 0.7;
}
.photo-carousel__view-button-container--left {
  left: 0;
}
.photo-carousel__view-button-container--right {
  justify-content: flex-end;
  right: 0;
}
.photo-carousel__view-button {
  height: 2.5vw;
  @media (max-width: 1000px) {
    height: 30px;
    margin: 0 1.5rem;
  }
}
.photo-carousel__feed {
  overflow-x: scroll;
  scroll-behavior: smooth;
}
.photo-carousel__feed::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.photo-carousel__thumbnail-container {
  width: fit-content;
  display: flex;
}
.photo-carousel__thumbnail {
  margin: 0.1rem;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
  border: 2px solid black;
  transition-duration: 100ms;
}

.photo-carousel__thumbnail:hover {
  border: 2px solid #cccccc;
}

.photo-carousel__thumbnail--active {
  border: 2px solid #dddddd !important;
}
</style>
