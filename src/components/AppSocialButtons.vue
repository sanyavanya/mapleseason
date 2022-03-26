<template>
  <div>
    <div class="social-links">
      <!-- TODO consistent key naming -->
      <template v-for="(href, key) in $props"
        ><!-- TODO v-if below is too complicated, simplify -->
        <div
          v-if="href && key !== 'buttonSize' && key !== 'buttonSizeUnit'"
          :key="'about__social_link_' + key"
          class="social-links__link-container"
        >
          <a :href="href">
            <img
              :src="getImgUrl(icons[key])"
              :alt="key"
              class="social-links__link"
              :style="buttonStyle"
            />
          </a>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppSocialButtons',
  props: {
    //TODO strict type check for all props everywhere
    vk: String,
    yt: String,
    buttonSize: Number,
    buttonSizeUnit: String,
  },
  data() {
    return {
      icons: {
        vk: 'button_vk_filled.png',
        yt: 'button_youtube_colored.png',
      },
    };
  },
  computed: {
    buttonStyle() {
      let width = '2rem',
        margin = '.6rem';
      if (this.buttonSize !== undefined && this.buttonSizeUnit !== undefined) {
        width = this.buttonSize + this.buttonSizeUnit;
        margin = (this.buttonSize / 4).toFixed(1) + this.buttonSizeUnit;
      }
      return {width: width, margin: '0 ' + margin};
    },
  },
  methods: {
    getImgUrl(pic) {
      // TODO mixin??
      return require('../assets/images/icons/' + pic);
    },
  },
};
</script>
<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-links__link-container {
  //TODO fix naming
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-links__link {
  transition-duration: 150ms;
}

.social-links__link:hover {
  transform: scale(1.3);
  transition-duration: 200ms;
}
</style>
