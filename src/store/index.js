import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { savePayeeGroup, editPayeeGroup, delPayeeGroup, arrSortByProps } from '@/utils'

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
    payeeInfo: [],
    // 用途列表
    purposeList: [],
    // 转账信息
    payTransferInfo: [],
    // 复核信息
    checkInfo: [],
    // 复核结果信息
    checkResultInfo: [],
    // 用户答案
    answer: {}
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
      // 用户答案
      if (!state.answer.payeeGroupList) {
        state.answer.payeeGroupList = []
      }
      state.answer.payeeGroupList = state.payeeGroupList
    },
    // 编辑保存收款方分组editPayeeGroup
    editPayeeGroup (state, data) {
      editPayeeGroup(state.payeeGroupList, data.id, data.groupName)
      // 用户答案
      if (!state.answer.payeeGroupList) {
        state.answer.payeeGroupList = []
      }
      state.answer.payeeGroupList = state.payeeGroupList
    },
    // 删除保存收款方分组
    delPayeeGroup (state, data) {
      delPayeeGroup(state.payeeGroupList, data)
      // 用户答案
      if (!state.answer.payeeGroupList) {
        state.answer.payeeGroupList = []
      }
      state.answer.payeeGroupList = state.payeeGroupList
    },
    // 保存新增收款方信息
    savePayeeInfo (state, data) {
      state.payeeInfo.push(data)
      state.payeeInfo.sort(arrSortByProps('accountNum'))
      // 用户答案
      if (!state.answer.payeeInfo) {
        state.answer.payeeInfo = []
      }
      state.answer.payeeInfo.push(data)
      state.answer.payeeInfo.sort(arrSortByProps('accountNum'))
    },
    // 编辑收款方信息
    editPayeeInfo (state, data) {
      if (state.payeeInfo && Array.isArray(state.payeeInfo) && state.payeeInfo.length > 0) {
        state.payeeInfo.forEach((v, i) => {
          if (parseFloat(data.id) === i) {
            delete data.id
            // 替换
            state.payeeInfo.splice(i, 1, data)
          }
        })
      }
      // 用户答案
      if (state.answer.payeeInfo && Array.isArray(state.answer.payeeInfo) && state.answer.payeeInfo.length > 0) {
        state.answer.payeeInfo.forEach((v, i) => {
          if (parseFloat(data.id) === i) {
            delete data.id
            // 替换
            state.answer.payeeInfo.splice(i, 1, data)
          }
        })
      }
    },
    // 删除收款方信息
    delPayee (state, data) {
      if (state.payeeInfo && Array.isArray(state.payeeInfo) && state.payeeInfo.length > 0) {
        state.payeeInfo.forEach((v, i) => {
          if (data.indexOf(v.accountNum) > -1) {
            delete state.payeeInfo[i]
            // state.payeeInfo.splice(i, 1)
          }
        })
        state.payeeInfo = state.payeeInfo.filter((val) => {
          return val
        })
      }
      // 用户答案
      if (state.answer.payeeInfo && Array.isArray(state.answer.payeeInfo) && state.answer.payeeInfo.length > 0) {
        state.answer.payeeInfo.forEach((v, i) => {
          if (data.indexOf(v.accountNum) > -1) {
            delete state.answer.payeeInfo[i]
            // state.payeeInfo.splice(i, 1)
          }
        })
        state.answer.payeeInfo = state.answer.payeeInfo.filter((val) => {
          return val
        })
      }
    },
    // 修改收款方的分组信息 changePayeeGroup data里面有分组名和要修改的目标对象
    changePayeeGroup (state, data) {
      if (state.payeeInfo && Array.isArray(state.payeeInfo) && state.payeeInfo.length > 0) {
        state.payeeInfo.forEach((v, i) => {
          if (data.payeeAccountNums.indexOf(v.accountNum) > -1) {
            const item = {
              accountName: v.accountName,
              accountNum: v.accountNum,
              bank: v.bank,
              group: data.group,
              otherName: v.otherName
            }
            // 替换
            state.payeeInfo.splice(i, 1, item)
          }
        })
      }
      // 用户答案
      if (state.answer.payeeInfo && Array.isArray(state.answer.payeeInfo) && state.answer.payeeInfo.length > 0) {
        state.answer.payeeInfo.forEach((v, i) => {
          if (data.payeeAccountNums.indexOf(v.accountNum) > -1) {
            const item = {
              accountName: v.accountName,
              accountNum: v.accountNum,
              bank: v.bank,
              group: data.group,
              otherName: v.otherName
            }
            // 替换
            state.answer.payeeInfo.splice(i, 1, item)
          }
        })
      }
    },
    // 新增用途
    savePurposeInfo (state, data) {
      state.purposeList.push(data)
      state.purposeList.sort(arrSortByProps('purpose'))
      // 用户答案
      if (!state.answer.purposeList) {
        state.answer.purposeList = []
      }
      state.answer.purposeList.push(data)
      state.answer.purposeList.sort(arrSortByProps('purpose'))
    },
    // 编辑保存用途
    editPurposeInfo (state, data) {
      if (state.purposeList && Array.isArray(state.purposeList) && state.purposeList.length > 0) {
        state.purposeList.forEach((v, i) => {
          if (parseFloat(data.id) === i) {
            delete data.id
            // 替换
            state.purposeList.splice(i, 1, data)
          }
        })
      }
      // 用户答案
      if (state.answer.purposeList && Array.isArray(state.answer.purposeList) && state.answer.purposeList.length > 0) {
        state.answer.purposeList.forEach((v, i) => {
          if (parseFloat(data.id) === i) {
            delete data.id
            // 替换
            state.answer.purposeList.splice(i, 1, data)
          }
        })
      }
    },
    // 删除用途
    delPurpose (state, data) {
      if (state.purposeList && Array.isArray(state.purposeList) && state.purposeList.length > 0) {
        state.purposeList.forEach((v, i) => {
          if (data.indexOf(v.purpose) > -1) {
            delete state.purposeList[i]
          }
        })
        state.purposeList = state.purposeList.filter((val) => {
          return val
        })
      }
      // 用户答案
      if (state.answer.purposeList && Array.isArray(state.answer.purposeList) && state.answer.purposeList.length > 0) {
        state.answer.purposeList.forEach((v, i) => {
          if (data.indexOf(v.purpose) > -1) {
            delete state.answer.purposeList[i]
          }
        })
        state.answer.purposeList = state.answer.purposeList.filter((val) => {
          return val
        })
      }
    },
    // 保存付款方信息
    savePayTransferInfo (state, data) {
      state.payTransferInfo.push(data)
      state.payTransferInfo.sort(arrSortByProps('created_at'))
      // 用户答案
      if (!state.answer.payTransferInfo) {
        state.answer.payTransferInfo = []
      }
      state.answer.payTransferInfo.push(data)
      state.answer.payTransferInfo.sort(arrSortByProps('created_at'))
    },
    // 保存审核信息
    saveCheckInfo (state, data) {
      if (state.checkInfo.length > 0) {
        // 检查是否重复，重复的替换，不重复的新增
        const index = state.checkInfo.findIndex(value => value.created_at === data.created_at)
        if (index > -1) {
          state.checkInfo.splice(index, 1, data)
        } else {
          state.checkInfo.push(data)
        }
      } else {
        state.checkInfo.push(data)
      }
      // 用户答案
      if (!state.answer.checkInfo) {
        state.answer.checkInfo = []
      }
      if (state.answer.checkInfo.length > 0) {
        // 检查是否重复，重复的替换，不重复的新增
        const index = state.answer.checkInfo.findIndex(value => value.created_at === data.created_at)
        if (index > -1) {
          state.answer.checkInfo.splice(index, 1, data)
        } else {
          state.answer.checkInfo.push(data)
        }
      } else {
        state.answer.checkInfo.push(data)
      }
    },
    // 清空审核信息
    clearCheckInfo (state) {
      state.checkInfo = []
      // 用户答案
      state.answer.checkInfo = []
    },
    // 保存审核结果信息 saveCheckResultInfo
    saveCheckResultInfo (state, data) {
      const times = []
      if (data.length > 0) {
        data.forEach(v => {
          state.checkResultInfo.push(v)
          // 用户答案
          if (!state.answer.checkResultInfo) {
            state.answer.checkResultInfo = []
          }
          state.answer.checkResultInfo.push(v)
          times.push(v.created_at)
        })
      }
      state.checkResultInfo.sort(arrSortByProps('created_at')) // 排序
      state.answer.checkResultInfo.sort(arrSortByProps('created_at')) // 排序
      // 从转账列表中删除审核结果的信息
      if (state.payTransferInfo.length > 0) {
        state.payTransferInfo.forEach((value, index) => {
          if (times.indexOf(value.created_at) > -1) {
            state.payTransferInfo.splice(index, 1)
          }
        })
      }
      // 用户答案
      if (state.answer.payTransferInfo.length > 0) {
        state.answer.payTransferInfo.forEach((value, index) => {
          if (times.indexOf(value.created_at) > -1) {
            state.answer.payTransferInfo.splice(index, 1)
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
