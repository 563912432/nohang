<template>
  <div class="huidanDetail position-relative">
    <img src="../assets/mingxi-search-paper.png" alt="">
    <div class="pay-account-num">{{ companyInfo.number }}</div>
    <div class="payee-account-num">{{ accountData.payeeAccountNum }}</div>
    <div class="pay-account-name">{{ companyInfo.name }}</div>
    <div class="payee-account-name">{{ accountData.payeeAccountName }}</div>
    <div class="pay-bank">{{ companyInfo.bank }}</div>
    <div class="payee-bank">{{ accountData.payeeBank }}</div>
    <div class="jin-e-one">
      {{ parseFloat(accountData.money) | numberToUpperCase }}</div>
    <div class="jin-e-two">{{ parseFloat(accountData.money).toFixed(2) }}</div>
    <div class="pay-time">{{ accountData.created_at }}</div>
    <div class="account-time">20******</div>
    <img src="../assets/mingxi-search-help.png" alt="">
    <div class="text-center">
      <el-button size="medium" class="mt-20 mb-20" type="info" @click="back">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HuiDanDetail',
  props: {
    accountData: {
      type: Object,
      required: true,
      defaults: null
    }
  },
  computed: {
    companyInfo () {
      return this.$store.state.companyInfo
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
  .huidanDetail {
    font-size: 14px;
    .pay-account-num {
      position: absolute;
      top: 104px;
      left: 237px;
      width: 290px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    .payee-account-num {
      position: absolute;
      top: 104px;
      left: 874px;
      width: 274px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    .pay-account-name {
      position: absolute;
      top: 135px;
      left: 237px;
      width: 290px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    .payee-account-name {
      position: absolute;
      top: 135px;
      left: 874px;
      width: 274px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    .pay-bank {
      position: absolute;
      top: 165px;
      left: 237px;
      width: 290px;
      height: 49px;
      text-align: center;
      line-height: 49px;
    }
    .payee-bank {
      position: absolute;
      top: 165px;
      left: 874px;
      width: 274px;
      height: 49px;
      text-align: center;
      line-height: 49px;
    }
    .jin-e-one {
      position: absolute;
      top: 215px;
      left: 237px;
      width: 290px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    .jin-e-two {
      position: absolute;
      top: 215px;
      left: 874px;
      width: 274px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    .pay-time {
      position: absolute;
      top: 276px;
      left: 70px;
      width: 457px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    .account-time {
      position: absolute;
      top: 276px;
      left: 718px;
      width: 431px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
  }
</style>
