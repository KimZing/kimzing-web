<template>
  <div class="container-lock flex-center-full">
    <div class="lock-user flex-center">
      <el-avatar :size="70">{{ user.realname.substring(0, 1) }}</el-avatar>
      {{ user.realname }}
    </div>
    <div class="lock-content">
      <div class="lock-input">
        <el-input
          v-model="lockPassword"
          type="password"
          :placeholder="t('lock.lockPlaceholder')"
          @keyup.enter="unlock"
        ></el-input>
      </div>
      <div class="lock-icon flex-center">
        <i class="iconfont icon-unlock icon-item" @click="unlock"></i>
        <i class="iconfont icon-tuichu icon-item" @click="toLogin"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { UserActions } from '@/store/user/consts'
  import { LayoutMutations } from '@/store/layout/consts'
  import notice from '@/utils/notice'
  import { encodeMd5 } from '@/utils/cipher'
  import { useTypeStore } from '@/store'
  import { useT } from '@/locals'

  const store = useTypeStore()
  const router = useRouter()
  const t = useT()

  // 用户信息
  const user = computed(() => store.state.user.user)
  // 解锁
  const lockPassword = ref('')
  const unlock = async () => {
    const lockInfo = computed(() => store.state.layout.lockInfo)
    if (lockInfo.value.lockPassword === encodeMd5(lockPassword.value)) {
      store.commit(LayoutMutations.UNLOCK)
      notice(t('lock.success'))

      // 如果进行了刷新，则动态路由会消息，此处重新加载动态路由，否则将由于没有动态路由而报错无法跳转
      await store.dispatch(UserActions.GET_PERMISSIONS)
      router.push({ name: 'home' })
    } else {
      notice(t('lock.error'), t('lock.errorInfo'), 'error')
    }
  }

  const toLogin = () => {
    store.commit(LayoutMutations.UNLOCK)
    store.dispatch(UserActions.LOGOUT)
  }
</script>

<style lang="scss">
  .container-lock {
    flex-direction: column;
    background-image: url('../../assets/images/background/lock.svg');
    background-size: cover;
    background-repeat: no-repeat;

    .lock-user {
      flex-direction: column;
      color: #eee;
      margin-bottom: 10px;
      :first-child {
        margin-bottom: 10px;
      }
    }

    .lock-content {
      display: flex;
      .lock-input {
        input {
          border: 0;
          border-radius: 5px 0 0 5px;
        }
      }
      .lock-icon {
        background-color: #eee;
        border-radius: 0 5px 5px 0;
        .icon-item {
          font-size: 18px;
          font-weight: 600;
          color: #409eff;
          margin: 0 8px;
        }
      }
    }
  }
</style>
