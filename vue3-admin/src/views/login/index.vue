<template>
  <div class="container-login flex-center-full">
    <div class="login-form-container">
      <div class="login-header">
        <div class="form-language">
          <LanguageSelect :icon-style="{ fontSize: 25, color: '#fff' }"></LanguageSelect>
        </div>
        <div class="form-title">{{ t('login.title') }}</div>
      </div>
      <div>
        <el-form
          ref="loginFormRef"
          class="login-form"
          :model="loginForm"
          :rules="rules"
          label-position="left"
        >
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-user"
              v-model="loginForm.loginName"
              class="input-item"
              :placeholder="t('login.usernamePlaceholder')"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="loginForm.password"
              class="input-item"
              type="password"
              :placeholder="t('login.passwordPlaceholder')"
              @keyup.enter="onCommit"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="form-button" type="primary" @click="onCommit">
              {{ t('login.button') }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { UserActions } from '@/store/user/consts'
  import type { Login } from '@/model/user'
  import { useTypeStore } from '@/store'
  import { useT } from '@/locals'
  import LanguageSelect from '@/layout/header/components/language-select/index.vue'

  const store = useTypeStore()
  const router = useRouter()
  const t = useT()

  // 表单数据, 使用泛型约束数据
  const loginForm = reactive<Login>({
    loginType: 'user_name_login',
    loginName: 'admin',
    password: '123456'
  })

  const rules = {
    loginName: [
      { required: true, message: t('login.usernamePlaceholder'), trigger: 'blur' },
      {
        min: 3,
        max: 8,
        message: t('login.usernameLengthError'),
        trigger: 'blur'
      }
    ],
    password: [
      { required: true, message: t('login.passwordPlaceholder'), trigger: 'change' },
      {
        min: 5,
        max: 18,
        message: t('login.passwordLengthError'),
        trigger: 'change'
      }
    ]
  }
  // 表单提交
  const loginFormRef = ref()
  const onCommit = () => {
    loginFormRef.value.validate().then(() => {
      store.dispatch(UserActions.LOGIN, loginForm).then(() => {
        router.push({ path: '/' })
      })
    })
  }
</script>

<style lang="scss">
  .container-login {
    background-image: url('../../assets/images/background/login.svg');
    background-size: cover;
    background-repeat: no-repeat;

    .login-form-container {
      width: 450px;
      .login-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        .form-title {
          color: #eee;
          font-size: 26px;
          font-weight: 700;
          text-align: center;
        }
        .form-language {
          margin-right: 20px;
          align-self: flex-end;
        }
      }

      .login-form {
        .input-item {
          font-size: 18px;
          input {
            border: 1px solid #ffffff1a;
            border-radius: 5px;
            color: #eee;
            background: transparent;
          }
        }
        .form-button {
          font-size: 16px;
          width: 100%;
        }
      }
    }
  }
</style>
