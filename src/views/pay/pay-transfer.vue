<template>
  <div class="payTransfer">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：付款</el-breadcrumb-item>
        <el-breadcrumb-item>单笔转账</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：{{ userInfo.number }}</span>
      </div>
    </div>
    <el-form ref="form" :model="addForm" :rules="rule" label-width="200px">
      <div class="pay-transfer-header mb-20">付款方信息</div>
      <el-form-item label="账户类型：" prop="type">
        <el-radio-group v-model="addForm.type">
          <el-radio label="本单位注册账户">本单位注册账户</el-radio>
          <el-radio label="授权账户" disabled>授权账户</el-radio>
          <el-radio label="单位结算卡" disabled>单位结算卡</el-radio>
          <el-radio label="账簿" disabled>账簿</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="付款方账号：" prop="payAccountNum">
        <el-select v-model="addForm.payAccountNum" placeholder="请选择付款方账号" class="w-400">
          <el-option :label="addForm.payAccountNum" :value="addForm.payAccountNum"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <span>{{ companyInfo.name }}人民币基本存款账户</span>
        <span class="ml-20">用户余额：<span style="color: #FFA900">***,***.**元</span></span>
      </el-form-item>
      <div class="pay-transfer-header mb-20">收款方信息</div>
      <el-form-item label="收款方分组：" prop="payeeGroup">
        <el-select v-model="addForm.payeeGroup" placeholder="请选择收款方分组" class="w-400" @change="choseGroup">
          <el-option v-for="item in payeeGroupArrayList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收款方账号：" prop="payeeAccountNum">
        <el-select v-model="addForm.payeeAccountNum" placeholder="请选择收款方账号" class="w-400" @change="chosePayeeNum">
          <el-option v-for="item in payeeArrayList" :key="item.accountNum" :label="item.accountNum" :value="item.accountNum"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收款方户名全称：" required>
        <el-select v-model="addForm.payeeAccountName" disabled class="w-400"></el-select>
      </el-form-item>
      <el-form-item label="收款方银行：" required>
        <el-select v-model="addForm.payeeBank" disabled class="w-400"></el-select>
      </el-form-item>
      <div class="pay-transfer-header mb-20 mt-15">付款信息</div>
      <el-form-item label="金额：" prop="money">
        <el-input v-model="addForm.money" type="number" class="w-400"></el-input>
      </el-form-item>
      <el-form-item label="用途：" prop="purpose">
        <el-select v-model="addForm.purpose" class="w-400">
          <el-option v-for="item in purposeList" :key="item.purpose" :label="item.purpose" :value="item.purpose"></el-option>
        </el-select>
      </el-form-item>
      <div class="pay-transfer-header mb-20 mt-15" style="color: #33C2B5">附加信息 <i class="el-icon-arrow-up"></i></div>
      <el-form-item label="企业自制凭证号：">
        <el-input v-model="addForm.pzNum" class="w-400"></el-input>
      </el-form-item>
      <el-form-item label="支付方式：" prop="payType">
        <el-radio-group v-model="addForm.payType">
          <el-radio label="实时转账">实时转账</el-radio>
          <el-radio label="普通转账（录入2小时后转出）" disabled>普通转账（录入2小时后转出）</el-radio>
          <el-radio label="次日转账（录入24小时后转出）" disabled>次日转账（录入24小时后转出）</el-radio>
          <el-radio label="预约付款" disabled>预约付款</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="checked" disabled>保存至常用模板</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" size="medium" @click="confirm">确定</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      v-el-drag-dialog
      title="交易信息确认"
      width="830px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisible">
      <div class="position-relative ">
        <img src="../../assets/pay-confirm.png" alt="">
        <div class="payNumber">{{ addForm.payAccountNum }}</div>
        <div class="payeeNumber">{{ addForm.payeeAccountNum }}</div>
        <div class="payeeBank">{{ addForm.payeeBank }}</div>
        <div class="payeeName">{{ addForm.payeeAccountName }}</div>
        <div class="payeeMoney">{{ addForm.money }}</div>
        <div class="payeePurpose">{{ addForm.purpose }}</div>
        <div class="payeeCharge">5元（以实际扣收为准）</div>
        <div class="text-right p-20">
          <el-button type="primary" size="medium" @click="passwordVisible = true">确定提交</el-button>
        </div>
      </div>
    </el-dialog>
    <!--密码验证-->
    <el-dialog
      v-el-drag-dialog
      title="验证K宝密码"
      width="368px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="passwordVisible">
      <div class="position-relative ">
        <img src="../../assets/password.png" alt="">
        <el-input v-model="pwd" type="password" class="password-input"></el-input>
        <div class="password-button" @click="confirmPwd"></div>
      </div>
    </el-dialog>
    <!--确认-->
    <el-dialog
      v-el-drag-dialog
      title="中国农业银行 - K宝签名确认"
      width="446px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogUKVisible">
      <div class="position-relative ">
        <img src="../../assets/check1.gif" alt="">
        <img src="../../assets/check2.png" alt="">
        <div class="u-cancel" @click="dialogUKVisible = false"></div>
        <div class="u-confirm" @click="save"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog'
import { getGroupNames, resetArray, getDatetime } from '@/utils'
export default {
  name: 'PayTransfer',
  directives: { elDragDialog },
  data () {
    return {
      checked: false,
      addForm: {
        type: '本单位注册账户',
        payAccountNum: null,
        payeeGroup: null,
        payeeAccountNum: null,
        payeeAccountName: null,
        payeeBank: null,
        money: null,
        purpose: null,
        pzNum: null,
        payType: '实时转账',
        created_at: null
      },
      rule: {
        type: [{ required: true, message: '请选择账户类型', trigger: 'change' }],
        payAccountNum: [{ required: true, message: '请选择付款方账号', trigger: 'change' }],
        payeeGroup: [{ required: true, message: '请选择收款方分组', trigger: 'change' }],
        payeeAccountNum: [{ required: true, message: '请选择收款方账号', trigger: 'change' }],
        money: [{ required: true, message: '请填写金额', trigger: 'blur' }],
        purpose: [{ required: true, message: '请选择用途', trigger: 'change' }],
        payType: [{ required: true, message: '请选择支付方式', trigger: 'change' }]
      },
      dialogVisible: false,
      passwordVisible: false,
      pwd: '',
      payeeGroupArrayList: [],
      payeeArrayList: [],
      dialogUKVisible: false
    }
  },
  computed: {
    purposeList () {
      return this.$store.state.purposeList
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    companyInfo () {
      return this.$store.state.companyInfo
    },
    payeeGroupList () {
      return this.$store.state.payeeGroupList
    },
    payeeList () {
      return this.$store.state.payeeInfo
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.addForm.payAccountNum = this.companyInfo.number
      // 分组列表
      resetArray()
      this.payeeGroupArrayList = getGroupNames(this.payeeGroupList)
    },
    // 根据分组筛选账号
    choseGroup () {
      if (this.addForm.payeeGroup === '全部分组') {
        this.payeeArrayList = this.payeeList
      } else {
        this.payeeArrayList = this.payeeList.filter(item => item.group === this.addForm.payeeGroup)
      }
    },
    // 根据账号筛选户名和银行
    chosePayeeNum () {
      if (this.payeeArrayList.length > 0) {
        this.payeeArrayList.forEach(v => {
          if (v.accountNum === this.addForm.payeeAccountNum) {
            this.addForm.payeeAccountName = v.accountName
            this.addForm.payeeBank = v.bank
          }
        })
      }
    },
    confirm () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.dialogVisible = true
        }
      })
    },
    // 确认密码
    confirmPwd () {
      if (!this.pwd) {
        this.$message.warning('请输入密码')
        return false
      }
      if (this.pwd !== this.userInfo.password) {
        this.$message.warning('密码错误')
        return false
      }
      this.dialogUKVisible = true
    },
    // 保存信息
    save () {
      this.addForm.created_at = getDatetime()
      const data = { ...this.addForm }
      this.$store.commit('savePayTransferInfo', data)
      this.$message.success('制单成功')
      this.dialogVisible = false
      this.resetForm()
      this.$refs.form.resetFields()
      this.dialogUKVisible = false
      this.passwordVisible = false
    },
    resetForm () {
      this.pwd = ''
      this.addForm = {
        type: '本单位注册账户',
        payAccountNum: this.companyInfo.number,
        payeeGroup: null,
        payeeAccountNum: null,
        payeeAccountName: null,
        payeeBank: null,
        money: null,
        purpose: null,
        pzNum: null,
        payType: '实时转账'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .payTransfer {
    /deep/ .el-input__inner{
      padding: 0 5px;
    }
    .w-400 {
      width: 400px;
    }
    .header {
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .pay-transfer-header {
      background-color: #F8F8F8;
      padding: 5px 10px;
    }
    .payNumber {
      position: absolute;
      top: 62px;
      left: 125px;
      width: 300px;
      height: 25px;
      line-height: 25px;
    }
    .payeeNumber {
      position: absolute;
      top: 142px;
      left: 145px;
      width: 180px;
      height: 25px;
      line-height: 25px;
    }
    .payeeBank {
      position: absolute;
      top: 142px;
      left: 420px;
      width: 300px;
      height: 25px;
      line-height: 25px;
    }
    .payeeName {
      position: absolute;
      top: 182px;
      left: 145px;
      width: 300px;
      height: 25px;
      line-height: 25px;
    }
    .payeeMoney {
      position: absolute;
      top: 263px;
      left: 105px;
      width: 100px;
      height: 25px;
      line-height: 25px;
    }
    .payeePurpose {
      position: absolute;
      top: 263px;
      left: 255px;
      width: 100px;
      height: 25px;
      line-height: 25px;
    }
    .payeeCharge {
      position: absolute;
      top: 263px;
      left: 475px;
      width: 300px;
      height: 25px;
      line-height: 25px;
      color: #F56C6C;
    }
    .password-input {
      position: absolute;
      left: 119px;
      width: 80px;
      top: 5px;
    }
    .password-button {
      position: absolute;
      left: 260px;
      width: 75px;
      height: 25px;
      top: 155px;
      cursor: pointer;
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
