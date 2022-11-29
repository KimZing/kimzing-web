<template>
  <div class="container-form">
    <CollapseCard class="form-wrapper">
      <BaseForm v-bind="activityFormProps" @submit="handleSubmit" @reset="handleReset">
        <!-- activity-name为 activityFormProps中自定义slot的名字-->
        <template #activity-name="{ field, state }">
          <el-input
            type="text"
            v-model="state[field.prop]"
            :show-word-limit="true"
            placeholder="演示通过slot进行插入"
          >
          </el-input>
        </template>
      </BaseForm>
    </CollapseCard>
  </div>
</template>
<script setup lang="ts">
  import CollapseCard from '@/components/collapse-card/index.vue'
  import BaseForm from '@/components/base-form/index.vue'
  import notice from '@/utils/notice'
  import { activityFormProps } from './config'

  const handleSubmit = (data: any, form: any) => {
    form.validate((valid: boolean) => {
      notice('校验结果', `${valid}`)
      notice('当前表单数据', `${JSON.stringify(data)}`)
    })
  }

  const handleReset = () => {
    notice('重置成功')
  }
</script>

<style lang="scss" scoped>
  .container-form {
    display: flex;
    justify-content: flex-start;
    .form-wrapper {
      padding: 15px 0;
    }
  }
</style>
