<template>
  <div>
    <div class="social-links">
      <!-- TODO consistent key naming -->
      <template v-for="(href, key) in $props">
        <div v-if="href && key !== 'buttonSizeCSS'" :key="'about__social_link_' + key" class="social-links__link-container">
          <a :href="href">
            <img :src="getImgUrl(icons[key])" :alt="key" class="social-links__link" :style="{width: buttonSizeCSS || '2rem'}">
          </a>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SocialButtons',
    props: {
      vk: String,
      in: String,
      yt: String,
      buttonSizeCSS: String
    },
    data() {
      return {
        icons: {
          vk: 'button_vk_filled.png',
          in: 'button_instagram_colored.png',
          yt: 'button_youtube_colored.png',
        }
      }
    },
    methods: {
      getImgUrl(pic) { // TODO mixin??
        return require('../assets/icons/' + pic)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-links__link-container { //TODO fix naming
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-links__link {
    margin: 0 .6rem;
    transition-duration: 150ms;
  }

  .social-links__link:hover {
    transform: scale(1.3);
    transition-duration: 200ms;
  }
</style>