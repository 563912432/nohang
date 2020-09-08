<template>
  <div class="payTransfer">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：付款</el-breadcrumb-item>
        <el-breadcrumb-item>单笔转账</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：001</span>
      </div>
    </div>
    <el-form ref="form" :model="addForm" :rules="rule" label-width="200px">
      <div class="pay-transfer-header mb-20">付款方信息</div>
      <el-form-item label="账户类型：" prop="type">
        <el-radio-group v-model="addForm.type">
          <el-radio :label="1">本单位注册账户</el-radio>
          <el-radio :label="2" disabled>授权账户</el-radio>
          <el-radio :label="3" disabled>单位结算卡</el-radio>
          <el-radio :label="4" disabled>账簿</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="付款方账号：" prop="payAccountNum">
        <el-select v-model="addForm.payAccountNum" placeholder="请选择付款方账号" class="w-400">
          <el-option label="区域一" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <span>山东问云机械有限公司人民币基本存款账户</span>
        <span class="ml-20">用户余额：<span style="color: #FFA900">***,***.**元</span></span>
      </el-form-item>
      <div class="pay-transfer-header mb-20">收款方信息</div>
      <el-form-item label="收款方分组：" prop="payeeGroup">
        <el-select v-model="addForm.payeeGroup" placeholder="请选择收款方分组" class="w-400">
          <el-option label="区域一" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收款方账号：" prop="payeeAccountNum">
        <el-select v-model="addForm.payeeAccountNum" placeholder="请选择收款方账号" class="w-400">
          <el-option label="区域一" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收款方户名全称：" required>
        <el-select v-model="addForm.payeeAccountName" disabled class="w-400">
          <el-option label="区域一" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收款方银行：" required>
        <el-select v-model="addForm.payeeBank" disabled class="w-400">
          <el-option label="区域一" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <div class="pay-transfer-header mb-20 mt-15">付款信息</div>
      <el-form-item label="金额：" prop="money">
        <el-select v-model="addForm.money" class="w-400">
          <el-option label="区域一" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用途：" prop="purpose">
        <el-input v-model="addForm.purpose" class="w-400"></el-input>
      </el-form-item>
      <div class="pay-transfer-header mb-20 mt-15" style="color: #33C2B5">附加信息 <i class="el-icon-arrow-up"></i></div>
      <el-form-item label="企业自制凭证号：">
        <el-input v-model="addForm.pzNum" class="w-400"></el-input>
      </el-form-item>
      <el-form-item label="支付方式：" prop="payType">
        <el-radio-group v-model="addForm.payType">
          <el-radio :label="1">实时转账</el-radio>
          <el-radio :label="2" disabled>普通转账（录入2小时后转出）</el-radio>
          <el-radio :label="3" disabled>次日转账（录入24小时后转出） </el-radio>
          <el-radio :label="4" disabled>预约付款</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="checked" disabled>保存至常用模板</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" size="medium" @click="dialogVisible = true">确定</el-button>
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
        <div class="payNumber">5159889499889556</div>
        <div class="payeeNumber">123123123</div>
        <div class="payeeBank">济南文苑支行</div>
        <div class="payeeName">123123123</div>
        <div class="payeeMoney">123123123</div>
        <div class="payeePurpose">123123123</div>
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
        <el-input v-model="pwd" class="password-input"></el-input>
        <div class="password-button" @click="passwordVisible = false"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
export default {
  name: 'PayTransfer',
  directives: { elDragDialog },
  data () {
    return {
      checked: false,
      addForm: {
        type: 1,
        payAccountNum: null,
        payeeGroup: null,
        payeeAccountNum: null,
        payeeAccountName: null,
        payeeBank: null,
        money: null,
        purpose: null,
        pzNum: null,
        payType: 1
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
      pwd: ''
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
  }
</style>
