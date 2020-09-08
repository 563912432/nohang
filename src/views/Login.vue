<template>
  <div class="login">
    <div class="bg">
      <img src="../assets/login.jpg" alt="">
      <div class="button" @click="login"></div>
    </div>
    <!--U盾使用演示-->
    <el-dialog
      v-el-drag-dialog
      title="U盾使用演示"
      width="480px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisible">
      <img src="../assets/udun.gif" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="check">登录</el-button>
      </span>
    </el-dialog>
    <!--windows安全-->
    <el-dialog
      v-el-drag-dialog
      title="windows安全"
      width="430px"
      :modal="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="checkVisible">
      <img src="../assets/bank.png" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button @click="checkVisible = false">取 消</el-button>
        <el-button type="primary" @click="password">确 定</el-button>
      </span>
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
        <img src="../assets/password.png" alt="">
        <el-input v-model="pwd" type="password" class="password-input"></el-input>
        <div class="password-button" @click="start"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
export default {
  name: 'Login',
  directives: { elDragDialog },
  data () {
    return {
      dialogVisible: false,
      checkVisible: false,
      passwordVisible: false,
      pwd: ''
    }
  },
  // 如果已经登录，这就跳转主页
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.isLogin) {
        vm.$router.push('/main/index')
      }
    })
  },
  methods: {
    login () {
      this.dialogVisible = true
    },
    check () {
      this.dialogVisible = false
      this.checkVisible = true
    },
    password () {
      this.checkVisible = false
      this.passwordVisible = true
    },
    start () {
      if (this.pwd.trim() === this.$store.state.userInfo.password) {
        this.$store.commit('changeLoginState', 1)
        this.$router.push('/main')
      } else {
        this.$message.warning('密码错误')
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .login {
    position: relative;
    width: 100%;
    height: auto;
    /deep/ .el-input__inner{
      padding: 0 5px;
    }
    .bg {
      width: 1200px;
      height: auto;
      margin: 0 auto;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }
      .button {
        position: absolute;
        left: 197px;
        top: 278px;
        width: 170px;
        height: 50px;
        cursor: pointer;
        background-color: transparent;
      }
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
