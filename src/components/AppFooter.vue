<template>
  <div class="footer-container">
    <div class="footer">
      <span class="footer__text">© {{ currentYear }} </span>
      <a href="https://sanyavanya.github.io/sanyavanya.ru/" class="footer__link" targe>Саня Ваня</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  margin: 5rem 0 2rem 0;
  .footer {
    font-size: 9pt;
    .footer__text {
      opacity: 0.7;
    }
    .footer__link {
      color: white;
      opacity: 0.7;
      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
}
</style>
