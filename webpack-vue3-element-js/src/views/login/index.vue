<template>
  <div class="container-login full">
    <div class="notes">
      <h4>{{ title }}</h4>
      <p>{{ desc }}</p>
    </div>
    <div class="form">
      <el-form
          ref="loginFormRef"
          :model="loginData"
          :rules="rules"
          size="large"
      >
        <el-form-item prop="username">
          <el-input
              v-model="loginData.username"
              type="text"
              placeholder="请输入用户名"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="loginData.password"
              type="password"
              placeholder="请输入密码"
              @keyup.enter="submit"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">
            登 录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
  import {reactive, ref} from 'vue'
  import {useStore} from 'vuex'
  import {login} from '@/apis/login'
  import {useRouter} from 'vue-router'
  import {ElNotification} from 'element-plus'
  import storage from '@/utils/storage'

  const store = useStore()
  const router = useRouter()
  // 基础信息
  const {title, desc} = store.state.info

  // 登录逻辑
  const loginFormRef = ref()
  const loginData = reactive({
    username: '',
    password: ''
  })
  const rules = {
    username: [
      {required: true, message: '请输入用户名', trigger: 'blur'}
    ],
    password: [
      {required: true, message: '请输入密码', trigger: 'change'},
      {
        min: 6,
        max: 18,
        message: '密码长度不正确[6-18]',
        trigger: 'change'
      }
    ]
  }
  const submit = () => {
    // 表单校验
    loginFormRef.value.validate().then(() => {
      // 登录
      login(loginData).then(((res) => {
        // 保存用户信息
        storage.setItem('user', {token:res.token, username: loginData.username})
        // 跳转主页
        router.push({path: '/home'})
        ElNotification.success('登录成功')
      })).catch((err) => {
        ElNotification.error('登录失败')
      })
    })
  }
</script>

<!--这里不加scoped 是为了input框的同名效果，scoped会导致其失效-->
<style lang="scss">
.container-login {
  background: url('../../assets/login.png') left top no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .notes {
    color: #fff !important;
    width: 350px;

    h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 34px;
      height: 34px;
      font-size: 28px;
      margin-bottom: 24px;
    }

    p {
      line-height: 34px;
      overflow-y: auto;
      letter-spacing: 1px;
    }
  }

  .form {
    width: 350px;
    // 普通状态的样式
    .el-textarea__inner, .el-input__inner {
      color: #ffffff;
      background: transparent !important;
    }
    // 填充后的样式
    input:-webkit-autofill {
      // 不支持rgba和透明色
      -webkit-box-shadow: 0 0 1000px #2d34a1 inset !important;
      -webkit-text-fill-color: #fff !important;
    }

    .el-button {
      font-size: 16px;
      width: 100%;
    }
  }
}
</style>