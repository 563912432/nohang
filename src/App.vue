<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$nextTick(() => {
      console.log('工商年报系统注册消息成功')
      window.addEventListener('message', this.handleMessage)
    })
  },
  created () {
    // this.initData()
  },
  destroyed () {
    window.removeEventListener('message', this.handleMessage)
  },
  methods: {
    // initData () {
    //   // 设置角色
    //   this.$store.commit('setRole', 1)
    //   // 角色关联的用户信息
    //   const userInfo = {
    //     number: '001',
    //     name: '出纳',
    //     password: '12345678'
    //   }
    //   this.$store.commit('setUserInfo', userInfo)
    //   // 内置企业信息
    //   const companyInfo = {
    //     name: '山东问云机械有限公司',
    //     number: '100100100100101010',
    //     bank: '中国农业银行股份有限公司淄博德胜路支行'
    //   }
    //   this.$store.commit('setCompanyInfo', companyInfo)
    // },
    sendMessage (cmd, params) {
      window.parent.postMessage({ cmd, params }, '*')
    },
    handleMessage (msg) {
      const { data } = msg
      if (data.cmd === 'preset') {
        // 预设的企业信息
        this.$store.commit('setCompanyInfo', {
          name: data.params.company_title, // 企业名称
          number: data.params.tax_id, // 企业统一社会信用代码
          bank: data.params.bank_account_name // 开户行
        })
        // 预设的用户信息
        this.$store.commit('setUserInfo', {
          number: data.params.current_user_tel,
          name: data.params.current_user,
          password: '12345678'
        })
        // 设置角色
        this.$store.commit('setRole', data.params.current_role_type)
      }
      if (data.cmd === 'getAnswer') {
        const answer = this.$store.state.answer
        const keys = Object.keys(answer)
        if (keys.length > 0) {
          this.sendMessage('echo', { business_id: data.params.business_id, answer: answer })
          this.$store.commit('resetAnswer')
        }
      }
    }
  }
}
</script>
<style lang="scss">
</style>
