<template>
  <div class="footer-contact-container">
    <div class="footer-contact"><!-- TODO use underscore like this everywhere instad of dashes -->
      <p>
        По вопросам <router-link to="/contact" class="inline-link">организации выступлений</router-link> можно позвонить или написать Евгению:
      </p>
      <div>
        <a href="tel:+79200059911" class="icon-link icon-link--phone">
          <span>+7 (920) 005-99-11</span>
        </a>
      </div>
      <div class="icon-link-group">
        <a href="https://vk.com/vsetruba" class="icon-link icon-link--vk">
          <img src="../assets/icons/contact_vk.png" alt="vk" class="icon-link__icon">
          <span>ВКонтакте</span>
        </a>
        <a href="https://wa.me/79200059911" class="icon-link icon-link--whatsapp">
          <img src="../assets/icons/contact_whatsapp.png" alt="whatsapp" class="icon-link__icon">
          <span>WhatsApp</span>
        </a>
        <a href="https://teleg.run/vsetruba" class="icon-link icon-link--telegram">
          <img src="../assets/icons/contact_telegram.png" alt="telegram" class="icon-link__icon">
          <span>Telegram</span><!-- TODO _T() -->
        </a>
      </div>      
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FooterContact'
  }
</script>
<style lang="scss" scoped>
  .footer-contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-contact {
    max-width: 1600px;
    text-align: center;
    font-size: 15pt;
    color: white;
  }
</style>