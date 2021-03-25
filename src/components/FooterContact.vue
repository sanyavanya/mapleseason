<template>
  <div class="footer_contact-container">
    <div class="footer_contact"><!-- TODO use underscore like this everywhere instad of dashes -->
      По вопросам организации выступлений можно позвонить или написать Евгению:
      <div>
        <a href="tel:+79200059911" class="footer_contact__link footer_contact__link--phone">
          <span>+7 (920) 005-99-11</span>
        </a>
      </div>
      <div class="footer_contact__link_group">
        <a href="https://vk.com/vsetruba" class="footer_contact__link footer_contact__link--vk">
          <img src="../assets/icons/contact_vk.png" class="footer_contact__icon">
          <span>ВКонтакте</span>
        </a>
        <a href="https://wa.me/79200059911" class="footer_contact__link footer_contact__link--whatsapp">
          <img src="../assets/icons/contact_whatsapp.png" class="footer_contact__icon">
          <span>WhatsApp</span>
        </a>
        <a href="https://teleg.run/vsetruba" class="footer_contact__link footer_contact__link--telegram">
          <img src="../assets/icons/contact_telegram.png" class="footer_contact__icon">
          <span>Telegram</span>
        </a>
      </div>      
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FooterContact',
    data() {
      return {
        footer_contact__links: [
          {
            name: '',
            icon: '',
            link: ''
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .footer_contact-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer_contact {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    max-width: 1600px;
    text-align: center;
    font-size: 15pt;
    color: white;
  }

  .footer_contact__icon {
    width: 2rem;
  }

  .footer_contact__link_group {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

   .footer_contact__link {
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: .5rem .5rem 0 .5rem;
   }

  .footer_contact__link--vk:hover {
    color: #4680c2;
    text-decoration-color: #4680c2;
  }

  .footer_contact__link--instagram:hover {
    color: #f56a35;
    text-decoration-color: #f56a35;
  }

  .footer_contact__link--youtube:hover {
    color: #ff0000;
    text-decoration-color: #ff0000;
  }

  .footer_contact__link--twitter:hover {
    color: #1da1f2;
    text-decoration-color: #1da1f2;
  }

  .footer_contact__link--viber:hover {
    color: #7360f2;
    text-decoration-color: #7360f2;
  }

  .footer_contact__link--whatsapp:hover {
    color: #46c756;
    text-decoration-color: #46c756;
  }

  .footer_contact__link--telegram:hover {
    color: #2eb6e5;
    text-decoration-color: #2eb6e5;
  }

  .footer_contact__link--phone:hover {
    color: #f9bc66;
    text-decoration-color: #f9bc66;
  }  
</style>