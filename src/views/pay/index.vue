<template>
  <div class="payIndex">
    <div class="header">
      <router-link :to="'/main/pay/pay-transfer'" class="router-link-class">单笔转账</router-link>
      <router-link :to="'/main/pay/pay-purpose'" class="router-link-class">款项用途维护</router-link>
      <el-dropdown @command="chose">
        <span class="el-dropdown-link cursor-pointer">收款方管理<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown" size="medium">
          <el-dropdown-item command="pay-payee">收款方信息维护</el-dropdown-item>
          <el-dropdown-item command="pay-payee-group">收款方分组管理</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PayIndex',
  methods: {
    chose (command) {
      switch (command) {
        case 'pay-payee':
          this.goRouter('/main/pay/pay-payee')
          break
        case 'pay-payee-group':
          this.goRouter('/main/pay/pay-payee-group')
          break
      }
    },
    goRouter (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
  .payIndex {
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
