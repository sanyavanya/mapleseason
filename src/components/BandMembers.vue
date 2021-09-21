<template>
  <div>
    <h2 class="heading">Участники группы</h2>
    <div class="band-members-container">
      <div class="band-members">
        <div class="band-member" v-for="bandMember in bandMembers" :key="'band-member__' + bandMember.vkHandle">
          <img :src="getImgUrl(bandMember.photo)" :alt="bandMember.name" class="band-member__photo">
          <h3 class="heading band-member__name">{{bandMember.name}}</h3>
          <p class="band-member__role">{{bandMember.role}}</p>
          <AppSocialButtons
            :vk="'https://www.vk.com/' + bandMember.vkHandle"
            :in="'https://www.instagram.com/' + bandMember.instagramHandle"
            :buttonSize="1.5"
            buttonSizeUnit="rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppSocialButtons from '../components/AppSocialButtons' // TODO register components like this globally

  export default {
    name: 'BandMembers',
    components: {
      AppSocialButtons
    },
    data() {
      return {
        bandMembers: [
          {
            photo: 'tumanov.jpg',
            name: 'Евгений Туманов',
            role: 'Вокал, гитара',
            vkHandle: 'vsetruba',
            instagramHandle: 'tumanov_music'
          },
          {
            photo: 'kalinin.jpg',
            name: 'Станислав Калинин',
            role: 'Барабаны',
            vkHandle: 'kalinin_drums',
            instagramHandle: 'stanvave'
          },
          {
            photo: 'sodomovsky.jpg',
            name: 'Никита Содомовский',
            role: 'Электрогитара, бэк-вокал',
            vkHandle: 'sodomovskiy',
            instagramHandle: 'sodomovskiy'
          },
          {
            photo: 'pungin.jpg',
            name: 'Александр Пунгин',
            role: 'Бас-гитара',
            vkHandle: 'pungaboy',
            instagramHandle: '_pungaboy_'
          }
        ]
      }
    },
    methods: {
      getImgUrl(pic) { // TODO that's ALMOST! a copy, put it into a mixin
        return require('../assets/images/photos/' + pic)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .band-members-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  .band-members { // TODO should probably be a grid and not show 3 on one line and 1 on the next line
    justify-content: center;
    align-items: center;
    display: grid;
    grid-gap: 2rem;
    @media (min-width: 1210px) and (max-width: 1640px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1640px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      max-width: 1600px;
    }
  }

  .band-member {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .band-member__photo {
    width: 100%;
    max-width: 350px;
    margin: 0 1.5rem;
    @media (max-width: 1000px) {
      max-width: 420px;
      margin: 0;
    }
  }

  .band-member__name {
    margin-bottom: .5rem;
  }

  .band-member__role {
    text-align: center;
    margin-block-start: 0;
    margin-block-end: .5rem;
    color: grey; // TODO fancy color from the palette (the same goes for all mentions of grey in the project)
  }

  // TODO below is almost copypaste
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
    width: 1.8em;
    margin: 0 .5rem;
    transition-duration: 150ms;
  }

  .social-links__link:hover {
    transform: scale(1.3);
    transition-duration: 200ms;
  }
</style>