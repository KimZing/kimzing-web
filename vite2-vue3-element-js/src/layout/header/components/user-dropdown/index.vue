<template>
  <div class="flex-center">
    <el-dropdown @command="clickItem">
      <UserInfo></UserInfo>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="showLockDialog">{{
            t('layout.header.dropdown.lock')
          }}</el-dropdown-item>
          <el-dropdown-item command="modifyPassword">{{
            t('layout.header.dropdown.modifyPassword')
          }}</el-dropdown-item>
          <el-dropdown-item command="logout">{{
            t('layout.header.dropdown.exit')
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <LockDialog></LockDialog>
    <PasswordDialog></PasswordDialog>
  </div>
</template>
<script setup lang="ts">
  import { useTypeStore } from '@/store'
  import { UserActions } from '@/store/user/consts'
  import { LayoutMutations } from '@/store/layout/consts'
  import { useT } from '@/locals'
  import UserInfo from '../user-info/index.vue'
  import LockDialog from '../lock-dialog/index.vue'
  import PasswordDialog from '../password-dialog/index.vue'

  const store = useTypeStore()
  const t = useT()

  const clickItem = (command: string) => {
    if (command === 'logout') {
      store.dispatch(UserActions.LOGOUT)
    }
    if (command === 'showLockDialog') {
      store.commit(LayoutMutations.CHANGE_LOCK_DIALOG_VISIBLE, true)
    }
    if (command === 'modifyPassword') {
      store.commit(LayoutMutations.CHANGE_PASSWORD_DIALOG_VISIBLE, true)
    }
  }
</script>
