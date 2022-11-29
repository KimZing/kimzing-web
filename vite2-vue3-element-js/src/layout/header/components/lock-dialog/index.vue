<template>
  <div class="container-lock-dialog">
    <el-dialog v-model="lockDialogVisible" width="500px" lock-scroll destroy-on-close>
      <div class="lock-content">
        <div class="content-user">
          <el-avatar :size="50" shape="square" style="background-color: cornflowerblue">{{
            user.realname.substring(0, 1)
          }}</el-avatar>
          <span>{{ user.realname }}</span>
        </div>
        <div class="content-input">
          <el-input
            v-model="lockPassword"
            type="password"
            :placeholder="t('layout.header.lockDialog.placeholder')"
            @keyup.enter="lock"
          ></el-input>
        </div>
      </div>
      <template #title>
        <div class="lock-title">
          <div>{{ t('layout.header.lockDialog.title') }}</div>
        </div>
      </template>
      <template #footer>
        <el-button type="primary" @click="lock" size="medium" style="width: 100%">{{
          t('layout.header.lockDialog.button')
        }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { LayoutMutations } from '@/store/layout/consts'
  import { encodeMd5 } from '@/utils/cipher'
  import { useTypeStore } from '@/store'
  import { useT } from '@/locals'

  const t = useT()
  const store = useTypeStore()
  const router = useRouter()

  // 用户信息
  const user = computed(() => store.state.user.user || { nickname: '游客' })
  // 界面显示
  const lockDialogVisible = computed({
    set: (value) => store.commit(LayoutMutations.CHANGE_LOCK_DIALOG_VISIBLE, value),
    get: () => store.state.layout.lockDialogVisible
  })

  // 锁屏事件
  const lockPassword = ref('')
  const lock = () => {
    store.commit(LayoutMutations.LOCK, {
      isLock: true,
      lockPassword: encodeMd5(lockPassword.value)
    })
    lockDialogVisible.value = false
    router.push({ name: 'lock' })
  }
</script>

<style lang="scss" scoped>
  .container-lock-dialog {
    .lock-content {
      .content-user {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        padding: 10px;
        :first-child {
          margin-bottom: 10px;
        }
      }
      .content-input {
        width: 100%;
      }
    }
    .lock-title {
      display: flex;
      justify-content: flex-start;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }
</style>
