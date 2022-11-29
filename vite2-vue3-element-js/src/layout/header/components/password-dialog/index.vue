<template>
  <el-dialog title="修改密码" v-model="passwordDialogVisible" destroy-on-close :width="600">
    <BaseForm v-bind="updatePasswordFormProp" @submit="changeUserSelfPassword"></BaseForm>
  </el-dialog>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { updatePasswordFormProp } from './update-password'
  import BaseForm from '@/components/base-form/index.vue'
  import { useTypeStore } from '@/store'
  import { LayoutMutations } from '@/store/layout/consts'
import { modifyUserSelfPassword } from '@/apis/user'
import notice from '@/utils/notice'

  const store = useTypeStore()

  // 界面显示
  const passwordDialogVisible = computed({
    get: () => {
      return store.state.layout.passwordDialogVisible
    },
    set: (value) => {
      store.commit(LayoutMutations.CHANGE_PASSWORD_DIALOG_VISIBLE, value)
    }
  })

  const changeUserSelfPassword = (data: any) => {
    modifyUserSelfPassword(data).then(() => {
      notice('修改成功')
    })
  }
</script>
<style lang="scss" scoped></style>
