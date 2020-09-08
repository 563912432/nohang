<template>
  <div class="payPayeeGroup">
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您现在的位置：付款</el-breadcrumb-item>
        <el-breadcrumb-item>收款方管理</el-breadcrumb-item>
        <el-breadcrumb-item>收款方分组管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <span class="mr-40">客户号： ***********</span>
        <span>操作员号：001</span>
      </div>
    </div>
    <div>
      <div class="pay-payee-header">收款方分组</div>
      <div class="pay-payee-group">
        <el-tree ref="tree" node-key="id" :expand-on-click-node="false" :default-expand-all="true" style="width: 300px" :data="payeeGroupList" @node-click="choseTree"></el-tree>
      </div>
      <div class="text-center mt-15">
        <el-button type="warning" size="medium" @click="add">添加</el-button>
        <el-button type="warning" size="medium" @click="edit">修改</el-button>
        <el-button plain size="medium" icon="el-icon-close" @click="del">删除</el-button>
      </div>
      <div class="pay-payee-header mt-20">[图书商]的收款方列表</div>
      <div class="mt-20">
        <el-table :data="list" border highlight-current-row fit size="mini">
          <el-table-column type="selection" align="center"></el-table-column>
          <el-table-column label="序号" align="center">
            <template slot-scope="scope">
              {{ scope.$index }}
            </template>
          </el-table-column>
          <el-table-column label="账号" prop="accountNum" align="center"></el-table-column>
          <el-table-column label="户名" prop="accountName" align="center"></el-table-column>
          <el-table-column label="开户行别" prop="bank" align="center"></el-table-column>
          <el-table-column label="开户类别" prop="type" align="center"></el-table-column>
        </el-table>
      </div>
      <div class="text-center mt-15">
        <el-button type="warning" size="medium">添加</el-button>
        <el-button plain size="medium" icon="el-icon-close">删除</el-button>
      </div>
    </div>
    <div class="mt-20">
      <img src="../../assets/group-help.png" alt="">
    </div>
    <el-dialog
      v-el-drag-dialog
      title="添加组别"
      width="450px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisible">
      <div class="position-relative p-20">
        <span>组别名称：</span><el-input v-model="form.groupName" class="password-input" style="width: 240px"></el-input>
        <div class="text-center mt-20">
          <el-button type="warning" size="medium" @click="confirmAddGroup">确定</el-button>
          <el-button plain size="medium" icon="el-icon-close" @click="dialogVisible = false">返回</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getGroupIds, resetArray } from '@/utils'
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui

export default {
  name: 'PayPayeeGroup',
  directives: { elDragDialog },
  data () {
    return {
      list: [],
      currentPayGroupId: null,
      lastPayGroupId: null,
      payGroupIds: [],
      dialogVisible: false,
      form: {
        groupName: null
      }
    }
  },
  computed: {
    payeeGroupList () {
      return this.$store.state.payeeGroupList
    }
  },
  methods: {
    add () {
      // 当前分组id
      this.currentPayGroupId = this.$refs.tree.getCurrentKey()
      if (!this.currentPayGroupId) {
        this.$message.warning('请选择父级分组')
        return false
      } else {
        resetArray()
        this.payGroupIds = getGroupIds(this.payeeGroupList)
        this.lastPayGroupId = this.payGroupIds[this.payGroupIds.length - 1]
        this.form.groupName = null // 初始化
        this.dialogVisible = true
      }
    },
    // 编辑
    edit () {
      const data = this.$refs.tree.getCurrentNode()
      if (!data) {
        this.$message.warning('请选择要修改的分组')
        return false
      }
      if (data.id === 1) {
        this.$message.warning('无法修改顶层分组')
        return false
      }
      this.form.id = data.id
      this.form.groupName = data.label
      this.dialogVisible = true
    },
    // 删除
    del () {
      const data = this.$refs.tree.getCurrentNode()
      if (!data) {
        this.$message.warning('请选择要删除的分组')
        return false
      }
      if (data.id === 1) {
        this.$message.warning('无法删除顶层分组')
        return false
      }
      if (data.children && data.children.length > 0) {
        this.$message.warning('该分组下面有子分组，无法删除')
        return false
      }
      this.$confirm('此操作将删除该分组, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('delPayeeGroup', data.id)
      }).catch(() => {
        console.log('cancel')
      })
    },
    // 确认添加
    confirmAddGroup () {
      if (!this.form.groupName) {
        this.$message.warning('请填写分组名称')
        return false
      }
      if (!this.form.id) {
        // 新增
        // 往分组的children里面添条数据
        const data = {
          parentGroupId: this.currentPayGroupId,
          lastPayGroupId: this.lastPayGroupId,
          groupName: this.form.groupName
        }
        this.$store.commit('setPayeeGroup', data)
        this.$message.success('添加成功')
      } else {
        // 编辑
        const data = {
          id: this.form.id,
          groupName: this.form.groupName
        }
        this.$store.commit('editPayeeGroup', data)
        delete this.form.id
        this.$message.success('编辑成功')
      }
      this.dialogVisible = false
    },
    choseTree (data, node, el) {
      console.log(data.id)
      // 从列表中找符合条件的收款方列表
      // this.list = []
    }
  }
}
</script>

<style lang="scss" scoped>
  .payPayeeGroup {
    .header {
      padding: 20px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .pay-payee-header {
      background-color: #F7F7F6;
      padding: 5px 10px;
    }
    .pay-payee-group {
      margin-top: 20px;
      width: 100%;
      padding: 10px;
      border: solid 1px #E7E9E8;
      max-height: 200px;
      overflow-y: auto;
    }
  }
</style>
