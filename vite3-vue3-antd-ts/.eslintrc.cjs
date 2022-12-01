module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // 讲道理eslint应该可以自动解析reference选项的，就不用配置两个了
    // 有两个ts的配置，都需要配置，否则在检测vite.config.ts时是无法正确解析的
    // project: ['./tsconfig.json']
  },
  plugins: [
    'vue'
  ],
  rules: {
    // 三条斜线的引入指令
    "@typescript-eslint/triple-slash-reference": "off",
    // 日志打印
    'no-console': 'warn',
    'no-debugger': 'warn',
    // 只允许单引号
    quotes: ['error', 'single'],
    // 不允许结尾带分号
    semi: ['error', 'never'],
    // 箭头函数中的参数是否加括号
    'arrow-parens': ['error', 'always'],
    // 数组，对象行尾是否加逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never'
      }
    ],
    // 是否添加逗号分隔元素之间的空格
    'comma-spacing': ['error', {after: true}],
    // 去除多余的空格
    'no-trailing-spaces': 'error',
    // 不允许多个空行, 设置最大空行为1
    'no-multiple-empty-lines': ['error', {max: 1}],
    // 函数括号前必须带空格
    'space-before-function-paren': ['error', 'never'],
    // 禁止未使用过的变量
    'no-unused-vars': ['error', {vars: 'all', args: 'none', ignoreRestSiblings: false}]
  }
}
