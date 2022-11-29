module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    // 添加 prettier 插件
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  // 定义全局变量，当未定义时，eslint不会报错
  globals: {
    defineEmits: false,
    defineProps: false
  },
  rules: {
    // import的导入无法解析是否报错。 由于项目采用setup编写，关闭此选项
    'import/no-unresolved': 'off',
    // 只有一个导出时，是否检查更正为默认导出。由于有些时候只是暂时只有一个导出，之后还会有更多的
    'import/prefer-default-export': 'off',
    // 防止在template中使用setup中的变量，而此变量被标记为未使用状态 eg:<script setup>const a = ref(0)</script>
    'vue/script-setup-uses-vars': 'off',
    // 是否允许在template上设置v-for的key， 在vue3中需要关闭，否则和vue/no-v-for-template-key-on-child冲突
    'vue/no-v-for-template-key': 'off',
    // 关闭未使用变量的提醒，TODO 待vue官方的插件规则更新后，替换此规则为只检查vue文件
    'no-unused-vars': 'off',
    // 关闭检测不到的导入模块，例如导入的图标组件等
    'import/no-extraneous-dependencies': 'off',
    // 忽略导入必须带后缀
    'import/extensions': 'off',
    // 忽略必须对 symbol进行描述
    'symbol-description': 'off',
    // 下面两个关闭ellint的noshadow参数覆盖，开启ts的参数覆盖检查
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // 允许对参数重新赋值   (state) => {state.status = !state.status}
    'no-param-reassign': 'off',
    // 关闭每个文件至多允许一个class的限制
    'max-classes-per-file': 'off',
    // 位运算检测
    'no-bitwise': 'off',
    // vue3中允许多个节点
    'vue/no-multiple-template-root': 'off',
    // 逗号结尾的功能
    'comma-dangle': ['error', 'never'],
    // v-model的后缀绑定
    'vue/no-v-model-argument': 'off'
  }
}
