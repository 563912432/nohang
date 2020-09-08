<template>
  <div class="layout">
    <div class="header">
      <div class="line-one">
        <div class="toFirst" @click="$router.push('/')"></div>
        <div class="back" @click="$router.push('/')"></div>
      </div>
      <div class="line-two">
        <div class="line-two-content">
          <router-link :to="'/main/account'" class="router-link-class">账户</router-link>
          <router-link :to="'/main/pay'" class="router-link-class">付款</router-link>
          <span class="router-link-class">存款</span>
          <span class="router-link-class">投资</span>
          <span class="router-link-class">现金管理</span>
          <span class="router-link-class">收款</span>
          <router-link :to="'/main/check'" class="router-link-class">复核发送</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
  .layout {
    width: 1150px;
    margin: 0 auto;
    height: auto;
    .router-link-active {
      position: relative;
      color: #333333;
    }
    .router-link-active:after {
      position: absolute;
      bottom: -10px;
      width: 100%;
      left: 0;
      height: 4px;
      content: '';
      background-color: #27bfb1;
    }
    .header {
      background: url("../../assets/bank-main-01.jpg") no-repeat center;
      height: 110px;
      position: relative;
      .line-one {
        width: 100%;
        height: 35px;
        background-color: transparent;
        .toFirst {
          position: absolute;
          left: 0;
          top: 5px;
          width: 90px;
          height: 30px;
          cursor: pointer;
        }
        .back {
          position: absolute;
          right: 98px;
          top: 5px;
          width: 90px;
          height: 30px;
          cursor: pointer;
        }
      }
      .line-two {
        width: 100%;
        height: 65px;
        background-color: transparent;
        position: relative;
        .line-two-content {
          position: absolute;
          left: 300px;
          top: 30px;
          width: 715px;
        }
      }
    }
  }
</style>
