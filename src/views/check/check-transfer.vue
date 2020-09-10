<template>
  <div class="checkTransfer">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：复核发送</el-breadcrumb-item>
        <el-breadcrumb-item>交易复核</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：{{ userInfo.number }}</span>
      </div>
    </div>
    <div v-if="active === 1" class="position-relative">
      <img src="../../assets/check-help.png" alt="">
      <div class="money" @click="detail">{{ number }}</div>
    </div>
    <div v-else-if="active === 2" class="position-relative">
      <img src="../../assets/check-help2.png" alt="">
      <div class="check-transfer-header mt-20">待复核交易列表（本级复核）</div>
      <div class="w-100p mt-20 mb-20" style="max-height: 400px;overflow-y: auto">
        <el-table :data="payTransferInfo" border highlight-current-row fit size="mini">
          <el-table-column label="流水号" prop="number" align="center">
            <template>201****************</template>
          </el-table-column>
          <el-table-column label="付款方账号" prop="payAccountNum" align="center"></el-table-column>
          <el-table-column label="收款方账号" prop="payeeAccountNum" align="center"></el-table-column>
          <el-table-column label="收款方户名" prop="payeeAccountName" align="center"></el-table-column>
          <el-table-column label="预约日期" align="center" width="80">
            <template>预约日期</template>
          </el-table-column>
          <el-table-column label="金额" prop="money" align="center"></el-table-column>
          <el-table-column label="录入员" align="center" width="80">
            <template>{{ userInfo.name }}</template>
          </el-table-column>
          <el-table-column label="通过" align="center" width="50">
            <template slot-scope="{ row }">
              <el-radio v-model="row.pass" :label="1" @change="checkColumn(row)"><span></span></el-radio>
            </template>
          </el-table-column>
          <el-table-column label="拒绝" align="center" width="50">
            <template slot-scope="{ row }">
              <el-radio v-model="row.pass" :label="0" @change="checkColumn(row)"><span></span></el-radio>
            </template>
          </el-table-column>
          <el-table-column label="拒绝原因" align="center">
            <template slot-scope="{ row }">
              <el-input :disabled="!!row.pass" v-model="row.reason" size="mini" @input="checkColumn(row)"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="flex w-100p">
        <div class="table-title flex-1">通过总笔数</div>
        <div class="table-input">{{ passNum }}</div>
        <div class="table-title flex-1">通过总金额</div>
        <div class="table-input">{{ passMoney.toFixed(2) }}</div>
        <div class="table-title flex-1">拒绝总笔数</div>
        <div class="table-input">{{ noPassNum }}</div>
        <div class="table-title flex-1">拒绝总金额</div>
        <div class="table-input" style="border-right: solid 2px #eeeeee">{{ noPassMoney.toFixed(2) }}</div>
      </div>
      <div class="text-center mt-20 mb-20">
        <el-button type="warning" size="medium" @click="active = 3">提交</el-button>
        <el-button plain size="medium" @click="active = 1">返回</el-button>
      </div>
      <img src="../../assets/check-help3.png" alt="">
    </div>
    <div v-else-if="active === 3">
      <img src="../../assets/check-help2.png" alt="">
      <div class="check-transfer-header mt-20">复核交易确认</div>
      <div v-if="resultList[0]['pass']" class="table-head mt-20">复核 通过 交易：共{{ passNum }}笔 总额：{{ passMoney.toFixed(2) }}元</div>
      <div v-else class="table-head mt-20">复核 拒绝 交易：共{{ noPassNum }}笔 总额：{{ noPassMoney.toFixed(2) }}元</div>
      <el-table :data="resultList" border highlight-current-row fit size="mini">
        <el-table-column label="流水号" prop="number" align="center">
          <template>201****************</template>
        </el-table-column>
        <el-table-column label="付款方账号" prop="payAccountNum" align="center"></el-table-column>
        <el-table-column label="收款方账号" prop="payeeAccountNum" align="center"></el-table-column>
        <el-table-column label="收款方户名" prop="payeeAccountName" align="center"></el-table-column>
        <el-table-column label="预约日期" align="center" width="80">
          <template>预约日期</template>
        </el-table-column>
        <el-table-column label="金额" prop="money" align="center"></el-table-column>
        <el-table-column label="录入员" align="center" width="80">
          <template>{{ userInfo.name }}</template>
        </el-table-column>
      </el-table>
      <div class="text-center mt-20 mb-20">
        <el-button type="warning" size="medium" @click="confirm">提交</el-button>
        <el-button plain size="medium" @click="active = 2">返回</el-button>
      </div>
      <div>
        <img src="../../assets/check-help3.png" alt="">
      </div>
    </div>
    <div v-else-if="active === 4">
      <img src="../../assets/check-result.png" alt="">
      <div class="check-transfer-header mt-20 mb-20">已发送交易列表</div>
      <el-table :data="resultList" border highlight-current-row fit size="mini">
        <el-table-column label="流水号" prop="number" align="center">
          <template>201****************</template>
        </el-table-column>
        <el-table-column label="付款方账号" prop="payAccountNum" align="center"></el-table-column>
        <el-table-column label="收款方账号" prop="payeeAccountNum" align="center"></el-table-column>
        <el-table-column label="收款方户名" prop="payeeAccountName" align="center"></el-table-column>
        <el-table-column label="金额" prop="money" align="center"></el-table-column>
        <el-table-column label="记账操作人员" align="center">
          <template>{{ userInfo.name }}</template>
        </el-table-column>
        <el-table-column label="交易状态" align="center">
          <template>操作成功</template>
        </el-table-column>
      </el-table>
      <div class="text-center mt-20">
        <el-button plain size="medium" @click="active = 1">返回</el-button>
      </div>
    </div>
    <!--确认-->
    <el-dialog
      v-el-drag-dialog
      title="中国农业银行 - K宝签名确认"
      width="446px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisible">
      <div class="position-relative ">
        <img src="../../assets/check1.gif" alt="">
        <img src="../../assets/check2.png" alt="">
        <div class="u-cancel" @click="dialogVisible = false"></div>
        <div class="u-confirm" @click="save"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
export default {
  name: 'CheckTransfer',
  directives: { elDragDialog },
  data () {
    return {
      active: 1,
      resultList: [],
      dialogVisible: false,
      number: 0,
      multiSelection: [],
      passNum: 0,
      passMoney: 0,
      noPassNum: 0,
      noPassMoney: 0
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    companyInfo () {
      return this.$store.state.companyInfo
    },
    payTransferInfo () {
      return this.$store.state.payTransferInfo
    },
    checkInfo () {
      return this.$store.state.checkInfo
    }
  },
  created () {
    this.initData()
  },
  watch: {
    payTransferInfo (value) {
      this.number = value.length
      this.calStatistic()
    }
  },
  methods: {
    initData () {
      // 判断身份
      if (this.userInfo.number === '001') {
        this.number = this.payTransferInfo.length
        this.calStatistic()
      }
    },
    detail () {
      if (this.number > 0) {
        this.active = 2
      } else {
        this.$message.warning('没有需要复核的内容')
      }
    },
    multiSelect (value) {
      this.multiSelection = value
    },
    checkColumn (row) {
      // 操作复核数据
      if (row.pass) {
        this.$set(row, 'reason', '')
      }
      // 将其他行的pass置为空
      if (this.payTransferInfo.length > 0) {
        this.payTransferInfo.forEach(v => {
          if (v.created_at !== row.created_at) {
            this.$set(v, 'pass', '')
            this.$set(v, 'reason', '')
          }
        })
      }
      this.$store.commit('saveCheckInfo', row)
      // 计算统计数据
      this.resetStatistic()
      this.calStatistic()
    },
    // 保存复核成功信息
    confirm () {
      this.dialogVisible = true
    },
    save () {
      this.$confirm('注：因本系统为模拟系统，所以审核后的信息自动发送，真实系统需手动发送至银行终端来确认。', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('saveCheckResultInfo', this.resultList)
        this.$message.success('提交成功')
        this.$store.commit('clearCheckInfo')
        this.dialogVisible = false
        this.active = 4
      }).catch(() => {
        console.log('cancel')
      })
    },
    calStatistic () {
      this.resultList = []
      if (this.checkInfo.length > 0) {
        this.checkInfo.forEach(v => {
          if (v.pass) {
            this.passNum += 1
            this.passMoney += v.money ? parseFloat(v.money) : 0
            this.resultList.push(v)
          } else {
            this.noPassNum += 1
            this.noPassMoney += v.money ? parseFloat(v.money) : 0
            this.resultList.push(v)
          }
        })
      }
    },
    resetStatistic () {
      this.passNum = 0
      this.passMoney = 0
      this.noPassNum = 0
      this.noPassMoney = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkTransfer {
    .header {
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .check-transfer-header {
      background-color: #F8F8F8;
      padding: 5px 10px;
    }
    .money {
      position: absolute;
      top: 147px;
      left: 140px;
      width: 160px;
      height: 30px;
      line-height: 30px;
      text-align: right;
      color: #27BFB1;
      font-size: 14px;
      padding-right: 15px;
      cursor: pointer;
    }
    .table-title {
      border:solid 2px #eeeeee;
      border-right: none;
      height: 30px;
      line-height: 28px;
      background-color: #DADADA;
      color: #333333;
      text-align: center;
      font-size: 14px;
    }
    .table-input {
      border: solid 2px #eeeeee;
      border-right: none;
      background-color: #ffffff;
      text-align: center;
      height: 30px;
      line-height: 28px;
      font-size: 14px;
      padding: 0 10px;
    }
    .table-head {
      height: 30px;
      line-height: 30px;
      background: linear-gradient(#ffffff, #f5f5f5);
      padding: 0 10px;
      font-size: 14px;
      color: #000;
      border-top: solid 1px #F2F2F2;
      border-left: solid 1px #F2F2F2;
      border-right: solid 1px #F2F2F2;
    }
    .u-cancel {
      position: absolute;
      left: 165px;
      bottom: 53px;
      width: 45px;
      height: 70px;
      border: solid 2px #F56C6C;
      cursor: pointer;
    }
    .u-confirm {
      position: absolute;
      left: 235px;
      bottom: 53px;
      width: 45px;
      height: 70px;
      border: solid 2px #F56C6C;
      cursor: pointer;
    }
  }
</style>
