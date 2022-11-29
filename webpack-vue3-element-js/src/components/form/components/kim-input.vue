<template>
  <el-input>
    <template v-if="prefix" #prepend>{{ prefix }}</template>
    <template v-if="suffix" #append>{{ suffix }}</template>
  </el-input>
</template>
<script setup>

  defineProps({
    prefix: String, // 输入框头部内容，只对 type="text" 有效
    suffix: String // 输入框尾部内容，只对 type="text" 有效

    // showPassword: Boolean, // 是否显示切换密码图标
    // maxlength: Number, // 最大长度
    // showWordLimit: Boolean, // 是否展示限制数
    // type: String, // text，textarea 和其他原生 input 的 type 值
    // placeholder: String, // 输入框占位文本
    // clearable: Boolean, // 是否可清空
    // disabled: Boolean, // 是否禁用
    // rows: Number, // 输入框行数，只对 type="textarea" 有效
    // autosize: Boolean // textarea高度是否自适应，只在 type="textarea" 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }
  })
</script>
