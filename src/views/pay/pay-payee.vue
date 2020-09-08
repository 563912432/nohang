<template>
  <div class="payPee">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：付款</el-breadcrumb-item>
        <el-breadcrumb-item>收款方管理</el-breadcrumb-item>
        <el-breadcrumb-item>收款方信息管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：001</span>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="查询收款方" name="first">
        <div v-if="activeName === 'first'">
          <div class="pay-payee-header">输入查询条件</div>
          <el-form ref="form" :model="form" label-width="200px" style="width: 600px">
            <el-form-item label="收款方所在组：">
              <el-select @click.native="choseGroup" v-model="form.group" placeholder="请选择收款方所在组" disabled style="width: 400px"></el-select>
            </el-form-item>
            <el-form-item label="账号：">
              <el-input v-model="form.accountNum"></el-input>
            </el-form-item>
            <el-form-item label="户名：">
              <el-input v-model="form.accountName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="warning" size="medium">查询</el-button>
              <el-button type="warning" size="medium">重置</el-button>
            </el-form-item>
          </el-form>
          <div style="border: solid 1px #E4E7ED;padding-top: 20px">
            <div class="pay-payee-header">查询结果列表</div>
            <div class="p-20">
              <el-table :data="payeeList" border highlight-current-row fit size="mini" @selection-change="multiSelect">
                <el-table-column type="selection" align="center"></el-table-column>
                <el-table-column label="序号" align="center">
                  <template slot-scope="scope">
                    {{ scope.$index + 1 }}
                  </template>
                </el-table-column>
                <el-table-column label="账号" prop="accountNum" align="center"></el-table-column>
                <el-table-column label="户名" prop="accountName" align="center"></el-table-column>
                <el-table-column label="账户开户行" prop="bank" align="center"></el-table-column>
                <el-table-column label="操作" prop="type" align="center">
                  <template slot-scope="scope">
                    <el-button type="text" size="mini" @click="edit(scope)">修改</el-button>
                    <el-button type="text" size="mini" @click="detail(scope)">详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="text-center mt-15">
                <el-button plain size="medium" icon="el-icon-close" @click="del">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="新增收款方" name="second">
        <div class="pay-payee-header">填写收款方信息</div>
        <el-form ref="form" :model="addForm" :rules="rule" label-width="200px" style="width: 600px">
          <el-form-item label="收款方银行：" prop="bank">
            <el-select v-model="addForm.bank" placeholder="请选择银行" style="width: 400px" @change="choseBank">
              <el-option v-for="item in bankList" :key="item.key" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="收款方账号：" prop="accountNum">
            <el-input v-model="addForm.accountNum"></el-input>
          </el-form-item>
          <el-form-item label="账户名：" prop="accountName">
            <el-input v-model="addForm.accountName"></el-input>
          </el-form-item>
          <el-form-item label="别名：">
            <el-input v-model="addForm.otherName"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox v-model="checked" disabled>特殊账户类型输入</el-checkbox>
            <span class="ml-20 col-9">注：农行特殊类型账户选择录入</span>
          </el-form-item>
          <el-form-item label="收款方所在组：" prop="group">
            <el-select v-model="addForm.group" placeholder="请选择组" style="width: 400px">
              <el-option v-for="item in payeeGroup" :key="item.id" :value="item.label"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="币种：">
            <span>人民币</span>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" size="medium" @click="confirm('form')">确定</el-button>
            <el-button plain size="medium" @click="activeName = 'first'">返回</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      v-el-drag-dialog
      title="选择收款方分组 -- 网页对话框"
      width="600px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisible">
      <div class="position-relative" style="min-height: 400px;padding: 5px">
        <div style="border: solid 1px #E7E9E8;padding: 5px 0">
          <el-tree :default-expand-all="true" style="width: 300px" :data="treeData"></el-tree>
        </div>
        <div class="text-center mt-15">
          <el-button type="warning" size="medium">添加</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-el-drag-dialog
      :title="'您已选择【' + addForm.bank + '】,请继续查询并选择收款方开户行'"
      width="650px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="choseBankVisible">
      <div class="position-relative" style="padding: 10px;height: 450px;overflow-y: auto">
        <div class="flex flex-align-center">
          <el-select v-model="province" placeholder="请选择省" @change="choseCity" style="width: 150px">
            <el-option v-for="item in provinceList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <span style="font-size: 16px;margin-left: 10px;margin-right: 10px">省</span>
          <el-select v-model="city" placeholder="请选择市" style="width: 150px">
            <el-option v-for="item in cityList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <span style="font-size: 16px;margin-left: 10px">市</span>
        </div>
        <div style="margin-top: 10px">
          <el-input v-model="keywords" style="width: 336px" placeholder="请输入关键字(支行名称或大额行号)"></el-input>
          <el-button type="warning" style="margin-left: 10px" @click="search">搜索</el-button>
        </div>
        <div style="margin-top: 10px">
          <el-table :data="searchList" border highlight-current-row fit size="mini">
            <el-table-column label="支行名称" prop="name" align="center"></el-table-column>
            <el-table-column label="大额行号" prop="code" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="{ row }">
                <el-button size="mini" type="text" @click="searchResult(row)">选择</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!--分页-->
          <pagination v-show="total>0" class="text-center" :total="total" :pageSizes="[5, 10, 15, 20]" :page.sync="pageQuery.page" :limit.sync="pageQuery.pagesize" @pagination="search" />
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-el-drag-dialog
      title="消息确认"
      width="450px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogConfirmVisible">
      <div class="position-relative">
        <img src="../../assets/pay-payee-add.png" alt="">
        <div class="number">***********</div>
        <div class="operator">{{ userInfo.number }}</div>
        <div class="accountNum">{{ addForm.accountNum }}</div>
        <div class="accountName">{{ addForm.accountName }}</div>
        <div class="accountBank">{{ addForm.bank }}</div>
        <div class="time">20**年**月**日</div>
        <div class="text-right" style="padding: 10px">
          <el-button type="warning" size="medium" @click="confirmUK">确认</el-button>
          <el-button plain size="medium" @click="dialogConfirmVisible = false">取消</el-button>
        </div>
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
    <!--详情-->
    <el-dialog
      v-el-drag-dialog
      title="详情页面"
      width="500px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogDetailVisible">
      <div class="position-relative" style="padding: 10px">
        <el-table :show-header="false" :data="detailList" border highlight-current-row fit size="mini">
          <el-table-column label="标题" prop="title" align="center"></el-table-column>
          <el-table-column label="名称" prop="value" align="center"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog'
import { getProvince, getCity, getBank, resetOneArray, treeToOneArray } from '@/utils'
import Pagination from '@/components/Pagination'
export default {
  name: 'PayPayee',
  directives: { elDragDialog },
  components: { Pagination },
  computed: {
    bankList () {
      return this.$store.state.bank
    },
    payeeGroupList () {
      return this.$store.state.payeeGroupList
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    payeeList () {
      return this.$store.state.payeeInfo
    }
  },
  data () {
    return {
      activeName: 'first',
      checked: null,
      form: {
        group: null,
        accountNum: null,
        accountName: null
      },
      addForm: {
        bank: null,
        group: null,
        accountNum: null,
        accountName: null,
        otherName: null
      },
      rule: {
        bank: [
          { required: true, message: '请选择银行', trigger: 'change' }
        ],
        group: [
          { required: true, message: '请选择分组', trigger: 'change' }
        ],
        accountNum: [
          { required: true, message: '请填写账号', trigger: 'blur' }
        ],
        accountName: [
          { required: true, message: '请填写账户名', trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      treeData: [],
      choseBankVisible: false,
      provinceList: [],
      province: null,
      city: null,
      cityList: [],
      keywords: null,
      searchList: [],
      pageQuery: {
        page: 1,
        pagesize: 5
      },
      total: 0,
      payeeGroup: [],
      dialogConfirmVisible: false,
      dialogUKVisible: false,
      dialogDetailVisible: false,
      detailList: [],
      multiSelection: []
    }
  },
  created () {
    this.resetPayeeGroupList()
  },
  methods: {
    multiSelect (values) {
      this.multiSelection = values
    },
    del () {
      if (this.multiSelection.length <= 0) {
        this.$message.warning('请选择要删除的收款方')
      } else {
        this.$confirm('此操作将删除收款方, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const data = []
          this.multiSelection.forEach(v => {
            data.push(v.accountNum)
          })
          this.$store.commit('delPayee', data)
        }).catch(() => {
          console.log('cancel')
        })
      }
    },
    detail (scope) {
      this.detailList = [
        { title: '收款方银行', value: scope.row.bank },
        { title: '收款方账号', value: scope.row.accountNum },
        { title: '收款方户名', value: scope.row.accountName },
        { title: '账户别名', value: scope.row.otherName },
        { title: '电子邮箱', value: '' },
        { title: '联系人', value: '' },
        { title: '联系电话', value: '' }
      ]
      this.dialogDetailVisible = true
    },
    edit (scope) {
      this.activeName = 'second'
      this.addForm = scope.row
      this.addForm.id = scope.$index
    },
    // 树状转一维数组
    resetPayeeGroupList () {
      resetOneArray()
      this.payeeGroup = treeToOneArray(this.payeeGroupList)
    },
    choseGroup () {
      this.dialogVisible = true
    },
    // 选择银行
    choseBank () {
      this.choseBankVisible = true
      this.$nextTick(() => {
        this.province = null
        this.city = null
        this.searchList = []
        this.total = 0
        this.provinceList = getProvince(this.addForm.bank)
      })
    },
    // 根据省获取市
    choseCity () {
      this.cityList = getCity(this.addForm.bank, this.province)
      if (this.cityList.length > 0) {
        this.city = this.cityList[0]
      }
    },
    // 搜索
    search () {
      const data = getBank(this.addForm.bank, this.province, this.city, this.keywords)
      this.total = data.length
      this.searchList = data.filter((item, index) => index < this.pageQuery.pagesize * this.pageQuery.page && index >= this.pageQuery.pagesize * (this.pageQuery.page - 1))
    },
    // 选择银行
    searchResult (row) {
      this.addForm.bank = row.name
      this.choseBankVisible = false
    },
    // 确认
    confirm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogConfirmVisible = true
        }
      })
    },
    confirmUK () {
      this.dialogUKVisible = true
    },
    save () {
      const data = { ...this.addForm }
      if (data.id) {
        // 编辑
        this.$store.commit('editPayeeInfo', data)
        this.$message.success('编辑成功')
      } else {
        // 新增
        this.$store.commit('savePayeeInfo', data)
        this.$message.success('新增成功')
      }
      this.dialogConfirmVisible = false
      this.dialogUKVisible = false
      delete this.addForm.id
      this.resetAddForm()
      this.$refs.form.resetFields()
    },
    resetAddForm () {
      this.addForm = {
        bank: null,
        group: null,
        accountNum: null,
        accountName: null,
        otherName: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .payPee {
    .header {
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .pay-payee-header {
      background-color: #F3F6F9;
      padding: 5px 10px;
      margin: 0 20px 10px;
    }
    .number {
      position: absolute;
      top: 33px;
      left: 185px;
      height: 20px;
      line-height: 20px;
      width: 170px;
    }
    .operator {
      position: absolute;
      top: 55px;
      left: 200px;
      height: 20px;
      line-height: 20px;
      width: 170px;
    }
    .accountNum {
      position: absolute;
      top: 75px;
      left: 170px;
      height: 20px;
      line-height: 20px;
      width: 170px;
    }
    .accountName {
      position: absolute;
      top: 95px;
      left: 185px;
      height: 20px;
      line-height: 20px;
      width: 170px;
    }
    .accountBank {
      position: absolute;
      top: 113px;
      left: 215px;
      height: 20px;
      line-height: 20px;
      width: 170px;
    }
    .time {
      position: absolute;
      top: 133px;
      left: 170px;
      height: 20px;
      line-height: 20px;
      width: 170px;
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
    .edit {
      border: solid 1px red;
    }
  }
</style>
