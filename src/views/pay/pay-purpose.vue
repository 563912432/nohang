<template>
  <div class="payPurpose">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：付款</el-breadcrumb-item>
        <el-breadcrumb-item>款项用途维护</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：001</span>
      </div>
    </div>
    <div class="pay-purpose-header">款项用途列表</div>
    <div v-if="active === 1" style="padding: 20px 0">
      <div>
        <el-table :data="list" border highlight-current-row fit size="mini">
          <el-table-column type="selection" align="center"></el-table-column>
          <el-table-column label="款项用途" prop="purpose" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{row}">
              <el-button type="text" size="mini" @click="change(row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="text-center mt-15">
        <el-button type="warning" size="medium" @click="active = 2">新增</el-button>
        <el-button plain size="medium" icon="el-icon-close">删除</el-button>
      </div>
    </div>
    <div v-else-if="active === 2" class="p-20">
      <el-form ref="form" :model="addForm" label-width="200px" style="width: 600px">
        <el-form-item label="款项用途：">
          <el-input v-model="addForm.purpose" style="width: 200px" @input="calLength"></el-input> <span style="margin-left: 5px">{{ number }} 个字符</span>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" size="medium">确定</el-button>
          <el-button plain size="medium" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <img src="../../assets/purpose-help.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayPurpose',
  data () {
    return {
      active: 1,
      addForm: {
        purpose: null
      },
      number: 0,
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    change (row) {
      this.addForm = row
      this.active = 2
      this.calLength()
    },
    getList () {
      this.list = [
        { id: 1, purpose: '用途测试' }
      ]
    },
    cancel () {
      this.addForm.purpose = null
      this.active = 1
    },
    calLength () {
      let len = 0
      for (let i = 0; i < this.addForm.purpose.length; i++) {
        const c = this.addForm.purpose.charCodeAt(i)
        // 单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
          len++
        } else {
          len += 2
        }
      }
      this.number = len
    }
  }
}
</script>

<style lang="scss" scoped>
  .payPurpose {
    .header {
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .pay-purpose-header {
      background-color: #F8F8F8;
      padding: 5px 10px;
    }
  }
</style>
