<template>
  <div class="app-navbar">
    <div
      class="mobile-page-title"
      :class="{'mobile-page-title--hidden': mobileMenuOpen || minimized}"
      @click="mobileMenuOpen = !mobileMenuOpen"
    >
      {{ $route.name }}
    </div>
    <div class="menu-button-container" @click="mobileMenuOpen = !mobileMenuOpen">
      <img src="../assets/images/icons/menu.png" class="menu-button" v-if="!mobileMenuOpen" />
      <img src="../assets/images/icons/menu_close.png" class="menu-button" v-else />
    </div>
    <div class="navbar-container">
      <div class="navbar" :class="{'navbar--mobile-open': mobileMenuOpen}">
        <!-- TODO a bit laggy on resizes through 1000px breakpoint -->
        <router-link
          to="/"
          exact
          tag="div"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          <img
            src="../assets/images/icons/logo.png"
            alt="logo"
            class="navbar__logo"
            :class="minimized ? 'navbar__logo--small' : 'navbar__logo--large'"
          />
        </router-link>
        <router-link
          v-for="link in links"
          :to="'/' + link.to"
          :exact="!link.to"
          :class="{'navbar__link--mobile-only': !link.to}"
          tag="div"
          class="navbar__item navbar__link"
          active-class="navbar__link--active"
          :key="'navbar__' + link.to"
        >
          {{ link.caption }}
        </router-link>
        <div class="navbar__item navbar__link">
          <a href="tel:+79200059911" class="navbar__phone">+7 (920) 005-99-11</a>
        </div>
        <div class="navbar__item navbar__socials">
          <div v-for="social in socials" :key="'navbar__' + social.name">
            <!-- TODO replace with AppSocialButtons component -->
            <a :href="social.href">
              <div class="navbar__social-container">
                <img :src="getImgUrl(social.iconWhite)" :alt="social.name" class="navbar__social" />
                <img
                  :src="getImgUrl(social.iconColored)"
                  :alt="social.name"
                  class="navbar__social--colored"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      links: [
        {
          caption: 'Главная',
          to: '',
        },
        {
          caption: 'Фото', // TODO _T()
          to: 'photo',
        },
        {
          caption: 'Видео',
          to: 'video',
        },
        {
          caption: 'Музыка',
          to: 'music',
        },
        {
          caption: 'Репертуар',
          to: 'repertoire',
        },
        {
          caption: 'Организация выступлений',
          to: 'contact',
        },
      ],
      minimized: false,
      breakpointMinimize: 20,
      breakpointMaximize: 100,
      socials: [
        {
          name: 'vk',
          href: 'https://vk.com/mapleseason',
          iconWhite: 'button_vk_white.png',
          iconColored: 'button_vk_colored.png',
        },
        {
          name: 'youtube',
          href: 'https://youtube.com/channel/UClXQ5ALVlfEMJ-PyUM3ISmA',
          iconWhite: 'button_youtube_white.png',
          iconColored: 'button_youtube_colored.png',
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/images/icons/' + pic);
    },
    setMinified() {
      let breakpoint = this.minimized ? this.breakpointMinimize : this.breakpointMaximize;
      this.minimized = window.scrollY >= breakpoint;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
  },
  mounted() {
    this.setMinified();
    window.onscroll = this.setMinified;
    window.onresize = () => {
      if (this.mobileMenuOpen)
        if (document.body.clientWidth >= 1000) {
          this.mobileMenuOpen = false;
        }
    };
    for (let item of document.getElementsByClassName('navbar__item')) {
      item.addEventListener('click', this.closeMobileMenu);
    }
  },
  destroyed() {
    window.onscroll = null;
    window.onresize = null;
    for (let item of document.getElementsByClassName('navbar__item')) {
      item.removeEventListener('click', this.closeMobileMenu);
    }
  },
};
</script>
<style lang="scss" scoped>
.app-navbar {
  position: sticky;
  top: 0;
  z-index: 1;
}
.mobile-page-title {
  transform-origin: bottom right;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: rotate(-90deg);
  position: fixed;
  top: 0.5rem;
  right: 1.33rem;
  z-index: 10;
  opacity: 0.7;
  transition-duration: 150ms;
  padding-right: 1.5rem;
  user-select: none;
  @media (min-width: 1000px) {
    display: none;
  }
}
.mobile-page-title--hidden {
  transform: translateY(-40px) rotate(-90deg);
  opacity: 0;
}
.menu-button-container {
  user-select: none;
  display: flex;
  padding: 0.6rem 0.8rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  @media (min-width: 1000px) {
    display: none;
  }
}
.menu-button {
  width: 30px;
  height: 30px;
  opacity: 0.7;
  transition-duration: 150ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
.navbar-container {
  opacity: 1;
  display: flex;
  justify-content: center;
  background-color: black; //TODO scss constants: $background_color
}
.navbar {
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    // TODO layout breaks when exactly on 1000px
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateY(-100%);
    transition-duration: 200ms;
  }
}
.navbar--mobile-open {
  @media (max-width: 1000px) {
    opacity: 1 !important;
    transform: none !important;
  }
}
.navbar__logo {
  // TODO can be just '&__logo'!
  transition: width 400ms, opacity 100ms;
  @media (max-width: 1000px) {
    display: none;
  }
}
.navbar__logo--small {
  width: 5rem;
}
.navbar__logo--large {
  width: 8rem;
}
.navbar__item {
  @media (max-width: 1000px) {
    padding: 0.2em 0;
    font-size: 6vmin;
  }
}
.navbar__link {
  opacity: 0.7;
  transition: opacity 150ms;
  white-space: nowrap;
  margin: 0 0.5rem;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
}
.navbar__link--mobile-only {
  @media (min-width: 1000px) {
    display: none;
  }
}
.navbar__link--active {
  opacity: 1 !important;
}
.navbar__socials {
  display: flex;
}
.navbar__phone {
  color: white; //TODO scss variables
  text-decoration: none;
}
.navbar__social-container {
  //TODO how to name containers
  margin: 0 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
}
.navbar__social {
  width: 2em;
  opacity: 0.7;
  @media (max-width: 1000px) {
    width: 1.6em;
  }
}
.navbar__social--colored {
  width: 2em;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 150ms;
  @media (max-width: 1000px) {
    width: 1.6em;
  }
  &:hover {
    opacity: 1;
  }
}
</style>
