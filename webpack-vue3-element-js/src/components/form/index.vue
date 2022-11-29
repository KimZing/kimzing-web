<template>
  <el-form :model="state" :disabled='disabled' :inline="inline" :label-position="labelPosition" :label-width="labelWidth" ref="formRef">
    <!--  如果是行内表单则直接使用    -->
    <template v-if="inline">
      <el-form-item  v-for="(schema) in schemas" :key="schema.prop" :label="schema.label" v-show="!schema.hidden" :prop="schema.prop" :rules="schema.rules">
        <slot v-if="schema.slot" :name="schema.slot" :schema="schema" :state="state"></slot>
        <component v-else :is="getComponent(schema.type)" v-bind="schema.options" v-model="state[schema.prop]" />
      </el-form-item>
    </template>
    <!--  如果不是行内表单则使用布局控件    -->
    <template v-else>
      <el-row v-for="(schema) in schemas" :key="schema.prop" :gutter="schema.gutter">
        <el-col :span="schema.span" :offset="schema.offset">
          <el-form-item  :label="schema.label" v-show="!schema.hidden" :prop="schema.prop" :rules="schema.rules">
            <slot v-if="schema.slot" :name="schema.slot" :schema="schema" :state="state"></slot>
            <component v-else :is="getComponent(schema.type)" v-bind="schema.options" v-model="state[schema.prop]" />
          </el-form-item>
        </el-col>
      </el-row>
    </template>
    <!--操作区域-->
    <el-form-item v-if="useOperation">
      <slot name="operation" :state="state" :formRef="formRef">
        <el-button v-if="submit" type="primary" :icon="submit.icon" @click="onSubmit">
          {{submit.text}}
        </el-button>
        <el-button v-if="reset" type="warning" :icon="reset.icon" @click="() => {formRef.resetFields();$emit('reset', state, formRef);}">
          {{reset.text}}
        </el-button>
      </slot>
    </el-form-item>
  </el-form>
</template>
<script setup>
  import {reactive, ref} from 'vue'
  import {getComponent} from './components/register'
  import {ElNotification} from 'element-plus'

  const props = defineProps({
    // 是否禁用
    disabled: {type: Boolean, required: false, default: false},
    // 是否设置为行内表单
    inline: {type: Boolean, required: false, default: false},
    // 标签位置 'right' | 'left' | 'top'
    labelPosition:  {type: String, required: false, default: 'right'},
    // 标签宽度
    labelWidth:  {type: Number, required: false, default: 100},
    // 表单的每一项的定义, Schema包含的key有
    // prop(属性名)label(标签名),hidden(是否隐藏),type(组件类型),default(默认值),
    // gutter(栅格的间隔),span(栅格占据的列数),offset(栅格左侧间隔格数),rules(校验规则),options(组件详细配置，参考官网的具体值)
    // slot(定义槽位，可以提供自定义插槽，类型为String，即为插槽名)
    schemas: {type: Array, required: true},
    // 是否展示操作区域
    useOperation: {type: Boolean, required: false, default: true},
    // 提交配置 text: 文字  icon: 图标
    submit: {type: Object, required: false, default: () =>({text: '提交', icon: 'Check'})},
    // 重置配置 text: 文字  icon: 图标
    reset: {type: Object, required: false, default: () =>({text: '重置', icon: 'RefreshRight'})}
  })

  // 表单数据
  const state = reactive({})
  const formRef= ref()
  const emit = defineEmits(['submit', 'reset'])
  // 赋值表单数据的默认值
  props.schemas.forEach((s) => state[s.prop] = s.default)

  const onSubmit = () => {
    formRef.value.validate().then(() => {
      emit('submit', state, formRef)
    }).catch((err) => {
      console.log(err)
      ElNotification.error('参数校验失败')
    })
  }
</script>
