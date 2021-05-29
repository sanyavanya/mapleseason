<template>
  <div>
    <h1 class="heading">Кавер-группа Maple Season</h1><!-- TODO style headers, _T() -->
    <div class="about parallax">
      <div class="about__text-container">
        <p class="about__text">
          Весной 2014 года Женя и Саша подготовили небольшую концертную программу из&nbsp;популярных песен,
          которые им нравились&nbsp;— так появился кавер-дуэт Maple&nbsp;Season.
          Группа начала играть в&nbsp;уютных заведениях и выступать на&nbsp;Большой Покровской, главной пешеходной улице Нижнего.
          Ребята славились исполнением красивых лирических композиций и&nbsp;тёплой атмосферой на&nbsp;концертах.
        </p>
        <p class="about__text">
          К концу года к&nbsp;группе присоединились барабанщик и басист, и ребята начали качать танцполы.
          Maple&nbsp;Season стали регулярно выступать на&nbsp;корпоративах и&nbsp;свадьбах, на&nbsp;пикниках и&nbsp;теплоходах, на&nbsp;небольших квартирниках и&nbsp;крупных фестивалях.
          <router-link to="/repertoire" class="inline-link">Репертуар</router-link> группы
          состоит из&nbsp;популярных русско- и&nbsp;англоязычных песен XXI&nbsp;века и&nbsp;дюжины бессмертных хитов прошлого столетия.
        </p>
        <p class="about__text">
          В&nbsp;конце 2019 года ребята начали выпускать авторские песни в&nbsp;рамках проекта <a class="inline-link" href="https://vk.com/tumanovband"><!-- TODO keep links in store or mixin or something -->TUMANOV</a>.
        </p>
      </div>
    </div>
    <AppSocialButtons
      vk="https://vk.com/mapleseason"
      in="https://instagram.com/mapleseason_band"
      yt="https://youtube.com/channel/UClXQ5ALVlfEMJ-PyUM3ISmA"
      :buttonSize="3"
      buttonSizeUnit="rem"
    />
  </div>
</template>
<script>
  import AppSocialButtons from './AppSocialButtons'

  export default {
    name: 'HomeAbout',
    components: {
      AppSocialButtons
    },
    data() { // TODO remove all unused data in all components
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
  .about {
    background-image: url("../assets/images/photos/about.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .about__text-container {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about__text {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    max-width: 1600px;
    // width: 96%; // TODO can be easily replaced everywhere with paddings
    text-align: center;
    font-size: 1.2em;
    color: white;
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  .social-links__link-container { //TODO fix naming
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-links__link {
    width: 3rem;
    margin: .6rem;
    transition-duration: 150ms;
  }

  .social-links__link:hover {
    transform: scale(1.3);
    transition-duration: 200ms;
  }
</style>