<template>
  <div>
    <BaseTable v-bind="roleTableConfig">
      <template #user-status="{ row, state }">
        <el-tag size="medium" :type="row.lock === '0' ? 'success' : 'danger'">{{
          row.lock === '0' ? '正常' : '冻结'
        }}</el-tag>
        <el-button
          style="margin-left: 5px"
          size="mini"
          :type="row.lock === '0' ? 'danger' : 'primary'"
          @click="updateUserStatus(row, state)"
          :icon="row.lock === '0' ? 'el-icon-lock' : 'el-icon-unlock'"
        ></el-button>
      </template>
      <template #user-role-operation="{ row }">
        <el-button
          type="warning"
          @click="
            () => {
              state.passwordVisible = true
              updatePasswordFormProp.schemas.forEach((s) => {
                if (s.prop === 'id') {
                  s.defaultValue = row.id
                }
              })
            }
          "
          >更改密码</el-button
        >
      </template>
    </BaseTable>
    <el-dialog title="更新密码" v-model="state.passwordVisible" destroy-on-close :width="600">
      <BaseForm v-bind="updatePasswordFormProp" @submit="changePassword"></BaseForm>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  import { getUserPage, modifyUserPassword, updateUserLock } from '@/apis/user'
  import BaseTable from '@/components/base-table/index.vue'
  import type { TableState } from '@/components/base-table/types/types'
  import type { User } from '@/model/user'
  import notice from '@/utils/notice'
  import roleTableConfig from './config'
  import BaseForm from '@/components/base-form/index.vue'
  import { updatePasswordFormProp } from './props/update-password'

  const updateUserStatus = async (row: User, state: TableState<User>) => {
    await updateUserLock(row.id as number, row.lock === '0' ? '1' : '0')
    // 重新获取列表
    state.loading = true
    getUserPage(state.page, state.search)
      .then((data) => {
        state.list = data.list
        state.loading = false
      })
      .catch((err) => {
        notice('操作失败', err, 'error')
        state.loading = false
      })
  }

  const state = reactive({
    passwordVisible: false
  })

  const changePassword = (data: any) => {
    modifyUserPassword(data).then(() => {
      notice('修改成功')
      state.passwordVisible = false
    })
  }
</script>
