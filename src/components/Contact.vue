<template>
    <div class="contact">
        <div class="contact-top">
            <div class="contact-top-right">
                <p class="about__text">Группа Maple&nbsp;Season выступает на&nbsp;публичных, корпоративных и частных мероприятиях: фестивали, презентации, церемонии открытия и награждения, музыкальные вечера в&nbsp;публичных заведениях, свадьбы, корпоративные вечеринки, дни рождения и юбилеи.</p>
                <p class="about__text">Техническое обеспечение выступления осуществляется согласно райдеру группы. Артисты могут подготовить и исполнить одну или несколько композиций по&nbsp;предварительной договоренности с&nbsp;заказчиком.</p>
                <div class="icon-link-group">
                    <a href="https://drive.google.com/open?id=1qRhVtTwJ0JsbtEum-Lt3kZbqHsb1QT_O" class="icon-link icon-link--telegram">
                        <img src="../assets/icons/download.png" alt="download" class="icon-link__icon icon-link__icon--small">
                        <span>Тех.&nbsp;райдер</span>
                    </a>
                    <a href="https://drive.google.com/open?id=17lgN37QmDM5MUzRnrxNOnFIU10H9GvN6" class="icon-link icon-link--whatsapp">
                        <img src="../assets/icons/download.png" alt="download" class="icon-link__icon icon-link__icon--small">
                        <span>Бытовой&nbsp;райдер</span>
                    </a>
                    <a href="https://drive.google.com/open?id=1vycwEOIRNxAyVxBXVwKMGAgj2weNK8q0" class="icon-link icon-link--phone">
                        <img src="../assets/icons/download.png" alt="download" class="icon-link__icon icon-link__icon--small">
                        <span>Репертуар</span>
                    </a>
                </div>
                <p class="about__text">Для организации выступления группы нужно связаться с&nbsp;Евгением любым удобным способом:</p>
                <div class="icon-link-group">
                    <a href="https://vk.com/vsetruba" class="icon-link icon-link--vk">
                        <img src="../assets/icons/contact_vk.png" alt="vk" class="icon-link__icon icon-link__icon--small">
                        <span>ВКонтакте</span>
                    </a>
                    <a href="https://wa.me/79200059911" class="icon-link icon-link--whatsapp">
                        <img src="../assets/icons/contact_whatsapp.png" alt="whatsapp" class="icon-link__icon icon-link__icon--small">
                        <span>WhatsApp</span>
                    </a>
                    <a href="https://teleg.run/vsetruba" class="icon-link icon-link--telegram">
                        <img src="../assets/icons/contact_telegram.png" alt="telegram" class="icon-link__icon icon-link__icon--small">
                        <span>Telegram</span><!-- TODO _T() -->
                    </a>
                </div>
                <div class="icon-link-group">
                <a href="tel:+79200059911" class="icon-link icon-link--phone">
                    <span>+7 (920) 005-99-11</span>
                </a>
              </div>
            </div>
        </div>
        <div class="contact-text-block">
            <p>
                На&nbsp;мероприятиях небольшого масштаба группа может работать со&nbsp;своим комплектом сценического оборудования (кроме акустической системы).
                В помещениях, не&nbsp;подходящих для&nbsp;размещения акустической барабанной установки (например, небольшое кафе или частный дом), группа использует цифровой перкуссионный модуль (электронные барабаны).
            </p>
        </div>
        <div class="contact-pictures">
            <div class="contact-pictures__image-container">
                <img src="../assets/photos/contact_1.jpg" alt="1д)" class="contact-pictures__image">
            </div>
            <div class="contact-pictures__image-container">
                <img src="../assets/photos/contact_2.jpg" alt="Выступление на катке Сп3овгород)" class="contact-pictures__image">
            </div>
            <div class="contact-pictures__image-container">
                <img src="../assets/photos/contact_3.jpg" alt="Выступление на катке Спорт Порт (стадион Нижний Новгород)" class="contact-pictures__image">
            </div>
        </div>
        <div class="contact-text-block">
            <p>
                Maple Season принимают пожелания по&nbsp;дресс-коду и репертуару.
            </p>
        </div>
<!--    <div>-->
<!--      <img src="../assets/photos/contact1.jpg" alt="Корпоратив в Milo Concert Hall (г. Нижний Новгород)">-->
<!--    </div>-->
<!--    <div class=""></div>-->
<!--    <div class="">-->
<!--      <img src="../assets/photos/contact2.jpg" alt="Выступление на катке Спорт Порт (стадион Нижний Новгород)">-->
<!--    </div>-->
<!--    <div class=""></div>-->
    </div>
</template>
<script>
  export default {
    name: 'Contact',
  }
</script>
<style lang="scss" scoped>
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-top {
        background-image: url('../assets/photos/contact_parallax.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        display: flex;
        flex-direction: row-reverse;
        //background-position: -70px -150px;
        width: 100%;
        max-width: 1600px;
    }

    .contact-top-right { // TODO maybe connect with bottom left
        font-size: 15pt;
        max-width: 35rem;
        margin: 5rem 7rem;
    }

    .about__text { // TODO this ALMOST is a copy from About
        margin-block-start: 1rem;
        margin-block-end: 1rem;
        text-align: center;
        font-size: 15pt;
        color: white;
    }

    .contact-text-block {
        margin: 2rem;
        font-size: 15pt;
        max-width: 1000px;
        text-align: center;
    }

    .contact-pictures {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;
        max-width: 1600px;
        padding: 0 2rem;
    }

    .contact-pictures__image {
        max-width: 100%;
        max-height: 100%;
    }
</style>