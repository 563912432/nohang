<template>
  <div class="accountMingXi">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：账户</el-breadcrumb-item>
        <el-breadcrumb-item>账户明细查询</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：{{ userInfo.number }}</span>
      </div>
    </div>
    <div v-if="active === 1" class="position-relative">
      <img src="../../assets/mingxi.png" alt="">
      <div class="account-name">{{ companyInfo.number }} {{ companyInfo.name }}</div>
      <div class="account-info">人民币基本存款账户</div>
      <!--查询按钮-->
      <div class="position-relative search">
        <el-button type="warning" size="medium" @click="active = 2">确定</el-button>
      </div>
      <img src="../../assets/mingxi-help.png" alt="">
    </div>
    <div v-else-if="active === 2" class="position-relative">
      <img src="../../assets/mingxi-search.png" alt="">
      <div class="account-search">{{ companyInfo.number }}</div>
      <div style="max-height: 500px;overflow-y: auto">
        <el-table :data="list" border highlight-current-row fit size="mini">
          <el-table-column label="交易时间" prop="created_at" align="center"></el-table-column>
          <el-table-column label="收入金额" prop="income" align="center">
            <template>\</template>
          </el-table-column>
          <el-table-column label="支出金额" prop="money" align="center"></el-table-column>
          <el-table-column label="账户余额" prop="yue" align="center">
            <template>***,***.***</template>
          </el-table-column>
          <el-table-column label="交易行名" prop="payeeBank" align="center"></el-table-column>
          <el-table-column label="对方省市" prop="province" align="center">
            <template>\</template>
          </el-table-column>
          <el-table-column label="对方账号" prop="payeeAccountNum" align="center"></el-table-column>
          <el-table-column label="对方户名" prop="payeeAccountName" align="center"></el-table-column>
          <el-table-column label="交易用途" prop="purpose" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{ row }">
              <el-button type="text" size="min" @click="detail(row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="position-relative text-center mt-20 mb-20">
        <el-button type="info" size="medium" @click="active = 1">返回</el-button>
        <el-button type="info" size="medium" @click="$router.push('/main/index')">关闭</el-button>
      </div>
    </div>
    <HuiDanDetail v-else-if="active = 3" @back="active = 2" :account-data="detailData" />
  </div>
</template>

<script>
import HuiDanDetail from '@/components/HuiDanDetail'
export default {
  name: 'AccountMingXi',
  components: { HuiDanDetail },
  data () {
    return {
      active: 1,
      detailData: null,
      list: []
    }
  },
  computed: {
    companyInfo () {
      return this.$store.state.companyInfo
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    payTransferInfo () {
      return this.$store.state.payTransferInfo
    },
    checkResultInfo () {
      return this.$store.state.checkResultInfo
    }
  },
  watch: {
    payTransferInfo () {
      this.initData()
    },
    checkResultInfo () {
      this.initData()
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.list = this.payTransferInfo.concat(this.checkResultInfo)
    },
    detail (row) {
      this.detailData = row
      this.active = 3
    }
  }
}
</script>

<style lang="scss" scoped>
  .accountMingXi {
    font-size: 14px;
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
    .account-search {
      position: absolute;
      top: 128px;
      left: 45px;
      width: 300px;
      height: 20px;
      font-size: 14px;
      color: #A5A5A5;
    }
  }
</style>
