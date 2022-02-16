<template>
  <div class="contact">
    <div class="hero">
      <div class="hero__text">
        <p class="hero__text-block text-with-shadow">
          Группа Maple&nbsp;Season выступает на&nbsp;публичных, корпоративных и частных
          мероприятиях: фестивали, презентации, церемонии открытия и награждения, музыкальные вечера
          в&nbsp;публичных заведениях, свадьбы, корпоративные вечеринки, дни рождения и юбилеи.
        </p>
        <p class="hero__text-block text-with-shadow">
          Техническое обеспечение выступления осуществляется согласно райдеру группы. Артисты могут
          подготовить и исполнить одну или несколько композиций по&nbsp;предварительной
          договоренности с&nbsp;заказчиком.
        </p>
        <div class="icon-link-group">
          <a
            href="https://docs.google.com/document/d/1Wo8Zmiq9tGS09bAmQJlgMPQiAej8Ke6-"
            class="icon-link icon-link--telegram"
            target="_blank"
          >
            <img
              src="../assets/images/icons/download.png"
              alt="download"
              class="app-icon-link__icon app-icon-link__icon--small"
            />
            <span>Тех.&nbsp;райдер</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1RsGRckQL8vcAFSMgWUJKxk7YRH_EGq2X"
            class="icon-link icon-link--whatsapp"
            target="_blank"
          >
            <img
              src="../assets/images/icons/download.png"
              alt="download"
              class="app-icon-link__icon app-icon-link__icon--small"
            />
            <span>Бытовой&nbsp;райдер</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1vycwEOIRNxAyVxBXVwKMGAgj2weNK8q0"
            class="icon-link icon-link--phone"
            target="_blank"
          >
            <img
              src="../assets/images/icons/download.png"
              alt="download"
              class="app-icon-link__icon app-icon-link__icon--small"
            />
            <span>Репертуар</span>
          </a>
        </div>
        <p class="hero__text-block text-with-shadow">
          Для организации выступления группы нужно связаться с&nbsp;Евгением любым удобным способом:
        </p>
        <div class="icon-link-group">
          <a href="https://vk.com/vsetruba" class="icon-link icon-link--vk">
            <img
              src="../assets/images/icons/contact_vk.png"
              alt="vk"
              class="app-icon-link__icon app-icon-link__icon--small"
            />
            <span>ВКонтакте</span>
          </a>
          <a href="https://wa.me/79200059911" class="icon-link icon-link--whatsapp">
            <img
              src="../assets/images/icons/contact_whatsapp.png"
              alt="whatsapp"
              class="app-icon-link__icon app-icon-link__icon--small"
            />
            <span>WhatsApp</span>
          </a>
          <a href="https://teleg.run/vsetruba" class="icon-link icon-link--telegram">
            <img
              src="../assets/images/icons/contact_telegram.png"
              alt="telegram"
              class="app-icon-link__icon app-icon-link__icon--small"
            />
            <span>Telegram</span
            ><!-- TODO _T() -->
          </a>
        </div>
        <div class="icon-link-group">
          <a href="tel:+79200059911" class="icon-link icon-link--phone">
            <span>+7 (920) 005-99-11</span>
          </a>
        </div>
      </div>
    </div>
    <div class="contact__text-block">
      <p>
        На&nbsp;мероприятиях небольшого масштаба группа может работать со&nbsp;своим комплектом
        сценического оборудования (кроме акустической системы). В помещениях, не&nbsp;подходящих
        для&nbsp;размещения акустической барабанной установки (например, небольшое кафе или частный
        дом), группа использует цифровой перкуссионный модуль (электронные барабаны).
      </p>
    </div>
    <div class="contact__photo-row">
      <div class="contact__photo-container contact__photo-container--no-mobile">
        <img
          src="../assets/images/photos/contact_1.jpg"
          alt="Корпоратив в DRKT"
          class="contact__photo"
        />
      </div>
      <div class="contact__photo-container contact__photo-container--no-mobile">
        <img
          src="../assets/images/photos/contact_2.jpg"
          alt="Выступление на катке Спорт Порт (стадион Нижний Новгород)"
          class="contact__photo"
        />
      </div>
      <div class="contact__photo-container">
        <img
          src="../assets/images/photos/contact_3.jpg"
          alt="Выступление на катке Спорт Порт (стадион Нижний Новгород)"
          class="contact__photo"
        />
      </div>
    </div>
    <div class="contact__text-block">
      <p>Maple Season принимают пожелания по&nbsp;дресс-коду и репертуару.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',
};
</script>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.contact__text-block {
  margin: 2rem;
  font-size: 15pt;
  max-width: 1000px;
  text-align: center;
}

.contact__photo-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  max-width: 1600px;
  padding: 0 2rem;
  @media (max-width: 1000px) {
    display: block;
    padding: 0;
  }
}

.contact__photo-container--no-mobile {
  @media (max-width: 1000px) {
    display: none;
  }
}

.contact__photo {
  max-width: 100%;
  max-height: 100%;
}

.hero {
  background-image: url('../assets/images/photos/contact_parallax.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  max-width: 1600px;
  @media (max-width: 1000px) {
    background-position: 10% 20%;
  }
  @media (min-width: 1600px) {
    background-attachment: initial;
    background-position: 0 30%;
  }
}

.hero__text {
  font-size: 15pt;
  max-width: 35rem;
  margin: 5rem 7rem;
  @media (max-width: 1000px) {
    margin: 0;
    padding: 2.4rem;
    max-width: none;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.hero__text-block text-with-shadow {
  // TODO this ALMOST is a copy from HomeAbout
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  text-align: center;
  font-size: 15pt;
  color: white;
}
</style>
