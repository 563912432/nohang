<template>
  <div class="main-index">
    <div class="navigation">
      <span>
        <span class="mr-40">您上次登录的时间是：20**-**-** **：**：**</span>
        <span class="mr-40">上次登录IP：***.***.***.***</span>
        <span>登录次数：***次</span>
      </span>
      <span>客户号：***********</span>
    </div>
    <div class="content">
      <img src="../../assets/bank-main-02.jpg" alt="">
      <div class="company-name">
        {{ companyInfo.name }}，{{ userInfo.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainIndex',
  computed: {
    companyInfo () {
      return this.$store.state.companyInfo
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-index {
    .navigation {
      width: 100%;
      height: 40px;
      background-color: #F1FBFC;
      padding: 0 35px;
      font-size: 14px;
      color: #666666;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .content {
      position: relative;
      width: 100%;
      .company-name {
        position: absolute;
        left: 70px;
        top: 158px;
        width: 145px;
        height: 70px;
        font-size: 14px;
      }
    }
  }
</style>
