<template>
  <div class="home">
    <div class="bg">
      <img src="../assets/home.jpg" alt="">
      <div class="button" @click="$router.push('/login')"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>
<style scoped lang="scss">
  .home {
    position: relative;
    text-align: center;
    width: 100%;
    height: auto;
    .bg {
      width: 1200px;
      height: auto;
      margin: 0 auto;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }
      .button {
        position: absolute;
        left: 102px;
        top: 198px;
        width: 220px;
        height: 60px;
        cursor: pointer;
        background-color: transparent;
      }
    }
  }
</style>
