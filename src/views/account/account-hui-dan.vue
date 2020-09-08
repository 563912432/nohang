<template>
  <div class="accountHuiDan">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：账户</el-breadcrumb-item>
        <el-breadcrumb-item>电子回单</el-breadcrumb-item>
        <el-breadcrumb-item>电子回单打印</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：001</span>
      </div>
    </div>
    <div v-if="active === 1" class="position-relative">
      <img src="../../assets/huidan.png" alt="">
      <div class="account-name">51599999999999 山东问云机械有限公司</div>
      <div class="account-info">人民币基本存款账户</div>
      <!--查询按钮-->
      <div class="position-relative search">
        <el-button type="warning" size="medium" @click="active = 2">查询</el-button>
      </div>
      <img src="../../assets/huidan-help.png" alt="">
    </div>
    <div v-else-if="active === 2" class="position-relative">
      <div class="huidan-header">回单信息</div>
      <div class="mt-20">
        <el-table :data="detailData" border highlight-current-row fit size="mini">
          <el-table-column label="交易时间" prop="payTime" align="center"></el-table-column>
          <el-table-column label="付款账号" prop="payAccountNum" align="center"></el-table-column>
          <el-table-column label="付款户名" prop="payAccountName" align="center"></el-table-column>
          <el-table-column label="收款账号" prop="payeeAccountNum" align="center"></el-table-column>
          <el-table-column label="收款户名" prop="payeeAccountName" align="center"></el-table-column>
          <el-table-column label="交易金额" prop="money" align="center"></el-table-column>
          <el-table-column label="回单" align="center">
            <template>
              <el-button type="text" size="mini" @click="active = 3">回单</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="text-center">
        <el-button size="medium" class="mt-20 mb-20" type="info" @click="active = 1">返回</el-button>
      </div>
    </div>
    <HuiDanDetail v-else-if="active === 3" @back="active = 2"  :account-data="{}"/>
  </div>
</template>

<script>
import HuiDanDetail from '@/components/HuiDanDetail'
export default {
  name: 'AccountHuiDan',
  components: { HuiDanDetail },
  data () {
    return {
      active: 1,
      detailData: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.detailData = [
        { payTime: '20**09-02 09:02', payAccountNum: '58600552223001240', payAccountName: '义乌远发商贸有限公司', payeeAccountNum: '5159889499889556', payeeAccountName: '山东问云机械有限公司', money: '70000.00' },
        { payTime: '20**09-02 09:02', payAccountNum: '58600552223001240', payAccountName: '义乌远发商贸有限公司', payeeAccountNum: '5159889499889556', payeeAccountName: '山东问云机械有限公司', money: '70000.00' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .accountHuiDan {
    .header {
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .account-name {
      position: absolute;
      top: 88px;
      left: 448px;
      width: 295px;
      height: 26px;
      line-height: 26px;
      text-align: left;
      font-size: 14px;
    }
    .account-info {
      position: absolute;
      top: 128px;
      left: 448px;
      width: 295px;
      height: 26px;
      line-height: 26px;
      text-align: left;
      font-size: 14px;
    }
    .search {
      width: 100%;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .huidan-header {
      background-color: #F7F7F6;
      padding: 5px 10px;
    }
  }
</style>
