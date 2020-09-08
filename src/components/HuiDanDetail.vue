<template>
  <div class="huidanDetail position-relative">
    <img src="../assets/mingxi-search-paper.png" alt="">
    <div class="pay-account-num">58600552223001240</div>
    <div class="payee-account-num">5159889499889556</div>
    <div class="pay-account-name">义乌远发商贸有限公司</div>
    <div class="payee-account-name">山东问云机械有限公司</div>
    <div class="pay-bank">中国银行股份有限公司义乌分行</div>
    <div class="payee-bank">中国农业银行股份有限公司淄博德胜路支行</div>
    <div class="jin-e-one">柒万元整</div>
    <div class="jin-e-two">70000.00</div>
    <div class="pay-time">20**-09-02 09:02</div>
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
