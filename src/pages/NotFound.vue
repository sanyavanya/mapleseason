<template>
  <div class="not-found">
    <div class="not-found__text">Это не те дроиды, которых ты ищешь.</div>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
};
</script>
<style lang="scss" scoped>
.not-found {
  max-width: 1600px;
  width: 100%;
  height: 60vh;
  position: relative;
  background-image: url('../assets/images/photos/notfound.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding: 2rem;
  @media (max-width: 1000px) {
    height: 100vh;
  }
}
.not-found__text {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-top: -1rem;
}
</style>
