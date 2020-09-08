<template>
  <div class="accountYue">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：账户</el-breadcrumb-item>
        <el-breadcrumb-item>账户余额查询</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：001</span>
      </div>
    </div>
    <div v-if="active === 1" class="position-relative">
      <img src="../../assets/yue.png" alt="">
      <div class="account-number">51599999999999</div>
      <div class="account-name">山东问云机械有限公司</div>
      <!--查询按钮-->
      <div class="btn-search" @click="active = 2"></div>
    </div>
    <div v-else-if="active === 2" class="position-relative">
      <img src="../../assets/yue-search.png" alt="">
      <div class="account-search-number">51599999999999</div>
      <div class="account-search-name">山东问云机械有限公司</div>
      <div class="account-type">人民币基本存款账户</div>
      <!--返回按钮-->
      <div class="btn-back" @click="active = 1"></div>
      <!--关闭按钮 去登陆后的index-->
      <div class="btn-close" @click="$router.push('/main/index')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountYue',
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .accountYue {
    .header {
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .account-number {
      position: absolute;
      top: 135px;
      left: 170px;
      width: 445px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
    }
    .account-name {
      position: absolute;
      top: 135px;
      left: 615px;
      width: 535px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
    }
    .btn-search {
      position: absolute;
      left: 525px;
      top: 222px;
      width: 108px;
      height: 32px;
      cursor: pointer;
    }
    .account-search-number {
      position: absolute;
      top: 84px;
      left: 105px;
      width: 360px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
    }
    .account-search-name {
      position: absolute;
      top: 84px;
      left: 465px;
      width: 240px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
    }
    .account-type {
      position: absolute;
      top: 84px;
      left: 705px;
      width: 115px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 12px;
    }
    .btn-back {
      position: absolute;
      top: 160px;
      left: 580px;
      width: 105px;
      height: 30px;
      cursor: pointer;
    }
    .btn-close {
      position: absolute;
      top: 160px;
      left: 727px;
      width: 105px;
      height: 30px;
      cursor: pointer;
    }
  }
</style>
