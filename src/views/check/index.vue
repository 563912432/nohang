<template>
  <div class="checkIndex">
    <div class="header">
      <router-link :to="'/main/check/check-transfer'" class="router-link-class">交易复核</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'CheckIndex'
}
</script>

<style lang="scss" scoped>
  .checkIndex {
    .router-link-active {
      position: relative;
      color: #63D1C7;
    }
    .header {
      width: 100%;
      height: 40px;
      background-color: #F1FBFC;
      padding: 0 35px;
      font-size: 14px;
      color: #666666;
      display: flex;
      align-items: center;
      .router-link-class {
        font-size: 15px;
      }
    }
  }
</style>
