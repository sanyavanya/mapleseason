<template>
  <div class="navbar-container">
    <div class="navbar">
      <router-link to="/" exact tag="div" class="navbar__link" active-class="navbar__link--active">
        <img src="../assets/logo.png" alt="logo" class="navbar__logo" :class="minimized ? 'navbar__logo--small' : 'navbar__logo--large'">
      </router-link>
      <router-link
        v-for="link in links"
        :to="'/' + link.to"
        tag="div"
        class="navbar__link"
        active-class="navbar__link--active"
        :key="'navbar__' + link.to"
      >
        {{link.caption}}
      </router-link>
      <div class="navbar__link"><a href="tel:+79200059911" class="navbar__phone">+7 (920) 005-99-11</a></div>
      <div v-for="social in socials" :key="'navbar__' + social.name"><!-- TODO replace with SocialButtons component -->
        <a :href="social.href">
          <div class="navbar__social-container">
            <img :src="getImgUrl(social.iconWhite)" :alt="social.name" class="navbar__social">
            <img :src="getImgUrl(social.iconColored)" :alt="social.name" class="navbar__social--colored">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'Navbar',
    data() {
      return {
        links: [
          {
            caption: 'Фото', // TODO _T()
            to: 'photo'
          },
          {
            caption: 'Видео',
            to: 'video'
          },
          {
            caption: 'Музыка',
            to: 'music'
          },
          {
            caption: 'Репертуар',
            to: 'repertoire'
          },
          {
            caption: 'Организация выступлений',
            to: 'contact'
          }
        ],
        minimized: false,
        breakpointMinimize: 20,
        breakpointMaximize: 100,
        socials: [
          {
            name: 'vk',
            href: 'https://vk.com/mapleseason',
            iconWhite: 'button_vk_white.png',
            iconColored: 'button_vk_colored.png'
          },
          {
            name: 'instagram',
            href: 'https://instagram.com/mapleseason_band',
            iconWhite: 'button_instagram_white.png',
            iconColored: 'button_instagram_colored.png'
          },
          {
            name: 'youtube',
            href: 'https://youtube.com/channel/UClXQ5ALVlfEMJ-PyUM3ISmA',
            iconWhite: 'button_youtube_white.png',
            iconColored: 'button_youtube_colored.png'
          }
        ]
      }
    },
    methods: {
      getImgUrl(pic) {
        return require('../assets/icons/' + pic)
      },
      setMinified() {  
        let breakpoint = this.minimized ? this.breakpointMinimize : this.breakpointMaximize
        this.minimized = window.scrollY >= breakpoint
      }
    },
    mounted() {
      this.setMinified()
      window.addEventListener('scroll', this.setMinified)
    }
  }
</script>
<style lang="scss" scoped>
//TODO read BEM on whether nesting classes is considered OK
//TODO and generally what am I supposed to do if there are several similar elements that share some styles and differ in other ones?
//TODO responsive
.navbar-container {
  display: flex;
  justify-content: center;
  position: sticky;
	top: 0;
	z-index: 1;
	background-color: black; //TODO scss constants: $background_color
  .navbar {
    display: flex;
    align-items: center;
    .navbar__logo { // TODO can be just '&__logo'!
      transition: width 400ms, opacity 100ms;
    }
    .navbar__logo--small {
      width: 5rem;
    }
    .navbar__logo--large {
      width: 10rem;
    }
    .navbar__link {
      opacity: .7;
      transition: opacity 150ms;
      white-space: nowrap;
      margin: 0 .5rem;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    .navbar__link--active {
      opacity: 1 !important;
    }
    .navbar__phone {
      color: white; //TODO scss variables
      text-decoration: none;
      &:hover {
        opacity: .8;
      }
    }
    .navbar__social-container { //TODO how to name containers
      margin: 0 .5rem; // TODO same as in navbar__link
      position: relative;
      .navbar__social {
        width: 2rem;
      }
      .navbar__social--colored {
        width: 2rem;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: opacity 150ms;
        &:hover {
          opacity: 1;          
        }
      }
    }    
  }
}  
</style>