import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { savePayeeGroup, editPayeeGroup, delPayeeGroup } from '@/utils'

Vue.use(Vuex)
// 前端持久化存储
const vuexLocal = new VuexPersistence({
  key: 'abc_info',
  storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    bank: [
      { key: '中国农业银行', value: '中国农业银行' },
      { key: '中国工商银行', value: '中国工商银行' },
      { key: '中国建设银行', value: '中国建设银行' },
      { key: '中国银行', value: '中国银行' },
      { key: '交通银行', value: '交通银行' },
      { key: '齐鲁银行', value: '齐鲁银行' },
      { key: '青岛银行', value: '青岛银行' }
    ],
    isLogin: 0,
    // 判断是出纳还是主管
    role: 1,
    // 基础信息
    companyInfo: null,
    // 角色信息
    userInfo: null,
    //  分组
    payeeGroupList: [{
      id: 1,
      label: '全部分组'
    }],
    // 收款方信息列表
    payeeInfo: []
  },
  mutations: {
    // 登录状态
    changeLoginState (state, data) {
      state.isLogin = data
    },
    // 角色设置
    setRole (state, data) {
      state.role = data
    },
    // 企业内置信息设置
    setCompanyInfo (state, data) {
      state.companyInfo = data
    },
    // 设置用户信息
    setUserInfo (state, data) {
      state.userInfo = data
    },
    // 新增保存收款方分组
    setPayeeGroup (state, data) {
      savePayeeGroup(state.payeeGroupList, data.parentGroupId, data.lastPayGroupId, data.groupName)
    },
    // 编辑保存收款方分组editPayeeGroup
    editPayeeGroup (state, data) {
      editPayeeGroup(state.payeeGroupList, data.id, data.groupName)
    },
    // 删除保存收款方分组
    delPayeeGroup (state, data) {
      delPayeeGroup(state.payeeGroupList, data)
    },
    // 保存新增收款方信息
    savePayeeInfo (state, data) {
      state.payeeInfo.push(data)
    },
    // 编辑收款方信息
    editPayeeInfo (state, data) {
      if (state.payeeInfo && Array.isArray(state.payeeInfo) && state.payeeInfo.length > 0) {
        state.payeeInfo.forEach((v, i) => {
          if (parseFloat(v.id) === i) {
            delete data.id
            Vue.set(state.payeeInfo, i, data)
          }
        })
      }
    },
    // 删除收款方信息
    delPayee (state, data) {
      if (state.payeeInfo && Array.isArray(state.payeeInfo) && state.payeeInfo.length > 0) {
        state.payeeInfo.forEach((v, i) => {
          if (data.indexOf(v.accountNum) > -1) {
            state.payeeInfo.splice(i, 1)
          }
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
