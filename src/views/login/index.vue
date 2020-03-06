<template>
  <div class="container-login">
    <el-card class="loginCard">
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm"  :rules="loginRules" status-icon="">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:238px;margin-right:10px" v-model="loginForm.code" placeholder="请输入验证码"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox :value='true'>我已阅读和同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:100%" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    const checkMobile = (rules, value, callback) => {
      // 效验规则：1开头，第二位3-9之间， 最后9个数字结尾
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号码格式错误'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          // 自定义效验规则
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 先整体效验表单
      this.$refs.loginForm.validate((valid) => {
        // valid=>效验是否成功
        if (valid) {
          // 进行登录
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm).then(res => {
            // 存储用户信息
            store.setUser(res.data.data)
            // 登陆成功
            // res是响应对象
            this.$message.success('登陆成功！')

            this.$router.push('/')
          }).catch(e => {
            // 登录失败
            this.$message.error('手机号或验证码错误')
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-login {
  width: 100%;
  height: 100%;
  background: url(../..//assets/bgc2.jpg) no-repeat;
  background-size: cover;
  //让百分比尺寸基于最大窗口来计算
  position: absolute;
  top: 0;
  left: 0;
}
.loginCard {
  width: 400px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
  img {
    display: block;
    margin: 0 auto 25px;
    width: 200px;
  }
}
</style>
