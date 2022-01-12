<template>
  <div>
    <el-form
      :disabled="disabled"
      :hide-required-asterisk="hideRequiredAsterisk"
      :inline="inline"
      :model="state"
      :label-position="labelPosition"
      :label-width="labelWidth"
      ref="baseForm"
    >
      <template v-for="field in schemas" :key="field.prop">
        <el-form-item
          v-show="!field.hidden"
          :label="field.label"
          :prop="field.prop"
          :rules="field.rules"
        >
          <el-row :gutter="field.gutter">
            <el-col :span="inline ? 24 : field.span" :offset="field.offset">
              <slot v-if="field.slot" :name="field.slot" :field="field" :state="state"> </slot>
              <component
                v-else
                :is="getRegisterComponet(field.type)"
                v-bind="field.options"
                v-model="state[field.prop]"
              ></component>
            </el-col>
          </el-row>
        </el-form-item>
      </template>
      <el-form-item v-if="operation?.showOperation === undefined ? true : operation?.showOperation">
        <!-- 如果自定义该槽位，可以通过state和formRef进行操作 -->
        <slot name="operation" :state="state" :formRef="baseForm">
          <div>
            <el-button
              v-if="operation?.showSubmit === undefined ? true : operation.showSubmit"
              type="primary"
              :icon="operation?.submitIcon || 'el-icon-check'"
              @click="$emit('submit', state, baseForm)"
              >{{
                operation?.submitText === undefined
                  ? t('component.form.submit')
                  : operation?.submitText
              }}</el-button
            >
            <el-button
              v-if="operation?.showReset === undefined ? true : operation?.showReset"
              type="warning"
              :icon="operation?.resetIcon || 'el-icon-refresh-right'"
              @click="
                () => {
                  baseForm.resetFields()
                  $emit('reset')
                }
              "
              >{{
                operation?.resetText === undefined ? t('component.form.reset') : operation.resetText
              }}</el-button
            >
          </div>
        </slot>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useT } from '@/locals'
  import { baseFormProps } from './props'
  import { getRegisterComponet } from './register'

  const state = reactive<any>({})
  const props = defineProps(baseFormProps)
  const t = useT()

  defineEmits(['submit', 'reset'])

  // 初始化初始值，例如checkbox的初始值要求必须是[],为空则报错
  props.schemas.forEach((s) => {
    state[s.prop] = s.defaultValue
  })

  // 表单引用
  const baseForm = ref()
</script>
