<template>
  <div class="checkTransfer">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：复核发送</el-breadcrumb-item>
        <el-breadcrumb-item>交易复核</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：001</span>
      </div>
    </div>
    <div v-if="active === 1" class="position-relative">
      <img src="../../assets/check-help.png" alt="">
      <div class="money" @click="detail">0</div>
    </div>
    <div v-else-if="active === 2" class="position-relative">
      <img src="../../assets/check-help2.png" alt="">
      <div class="check-transfer-header mt-20">待复核交易列表（本级复核）</div>
      <div class="w-100p mt-20 mb-20">
        <el-table :data="list" border highlight-current-row fit size="mini">
          <el-table-column label="流水号" prop="number" align="center"></el-table-column>
          <el-table-column label="付款方账号" prop="payNum" align="center"></el-table-column>
          <el-table-column label="收款方账号" prop="payeeNum" align="center"></el-table-column>
          <el-table-column label="收款方户名" prop="payeeName" align="center"></el-table-column>
          <el-table-column label="预约日期" prop="time" align="center" width="80"></el-table-column>
          <el-table-column label="金额" prop="money" align="center"></el-table-column>
          <el-table-column label="录入员" align="center" width="80">
            <template>操作员</template>
          </el-table-column>
          <el-table-column label="通过" align="center" width="50">
            <template slot-scope="{ row }">
              <el-radio v-model="row.pass" :label="1"><span></span></el-radio>
            </template>
          </el-table-column>
          <el-table-column label="拒绝" align="center" width="50">
            <template slot-scope="{ row }">
              <el-radio v-model="row.pass" :label="0"><span></span></el-radio>
            </template>
          </el-table-column>
          <el-table-column label="拒绝原因" align="center">
            <template slot-scope="{ row }">
              <el-input :disabled="!!row.pass" size="mini"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="flex w-100p">
        <div class="table-title flex-1">通过总笔数</div>
        <div class="table-input">0</div>
        <div class="table-title flex-1">通过总金额</div>
        <div class="table-input">0.00</div>
        <div class="table-title flex-1">拒绝总笔数</div>
        <div class="table-input">0</div>
        <div class="table-title flex-1">拒绝总金额</div>
        <div class="table-input" style="border-right: solid 2px #eeeeee">0.00</div>
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
      <div class="table-head mt-20">复核 通过 交易：共1笔 总额：1000.00元</div>
      <el-table :data="list" border highlight-current-row fit size="mini">
        <el-table-column label="流水号" prop="number" align="center"></el-table-column>
        <el-table-column label="付款方账号" prop="payNum" align="center"></el-table-column>
        <el-table-column label="收款方账号" prop="payeeNum" align="center"></el-table-column>
        <el-table-column label="收款方户名" prop="payeeName" align="center"></el-table-column>
        <el-table-column label="预约日期" prop="time" align="center" width="80"></el-table-column>
        <el-table-column label="金额" prop="money" align="center"></el-table-column>
        <el-table-column label="录入员" align="center" width="80">
          <template>操作员</template>
        </el-table-column>
      </el-table>
      <div class="text-center mt-20 mb-20">
        <el-button type="warning" size="medium" @click="dialogVisible = true">提交</el-button>
        <el-button plain size="medium" @click="active = 2">返回</el-button>
      </div>
      <div>
        <img src="../../assets/check-help3.png" alt="">
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
        <div class="u-confirm" @click="confirm"></div>
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
      active: 3,
      list: [],
      dialogVisible: true
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.list = [
        { number: '201*12*************', payNum: '5159889499889556', payeeNum: '123123', payeeName: '123123', time: '预约日期', money: '1000.00', pass: 1, reason: '' }
      ]
    },
    detail () {
      this.active = 2
    },
    confirm () {
      this.dialogVisible = false
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
