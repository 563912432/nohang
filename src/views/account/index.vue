<template>
  <div class="accountIndex">
    <div class="header">
      <router-link :to="'/main/account/account-yue'" class="router-link-class">账户余额查询</router-link>
      <router-link :to="'/main/account/account-mingxi'" class="router-link-class">账户明细查询</router-link>
      <router-link :to="'/main/account/account-huidan'" class="router-link-class">电子回单</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AccountIndex'
}
</script>

<style lang="scss" scoped>
  .accountIndex {
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
