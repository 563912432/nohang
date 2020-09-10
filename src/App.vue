<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.initData()
  },
  methods: {
    initData () {
      // 设置角色
      this.$store.commit('setRole', 1)
      // 角色关联的用户信息
      const userInfo = {
        number: '001',
        name: '出纳',
        password: '12345678'
      }
      this.$store.commit('setUserInfo', userInfo)
      // 内置企业信息
      const companyInfo = {
        name: '山东问云机械有限公司',
        number: '100100100100101010',
        bank: '中国农业银行股份有限公司淄博德胜路支行'
      }
      this.$store.commit('setCompanyInfo', companyInfo)
    }
  }
}
</script>
<style lang="scss">
</style>
