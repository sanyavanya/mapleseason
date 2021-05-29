<template>
  <div class="footer-container">
    <div class="footer">
      <span class="footer__text">© 2021 </span><a href="https://vk.com/sanyavanya" class="footer__link">Саня Ваня</a>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'AppFooter'
  }
</script>
<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  margin: 5rem 0 2rem 0;
  .footer {
    font-size: 9pt;
    .footer__text {
      opacity: .7;
    }
    .footer__link {
      color: white;
      opacity: .7;
      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
}
</style>