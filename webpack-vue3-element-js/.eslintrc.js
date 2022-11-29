module.exports = {
    // 配置文件使用范围,在不同的目录中使用不同的 .eslintrc
    root: true,
    // 代码运行的环境，不同环境的全局变量、使用语法不一样
    env: {
        node: true,
        // 设置环境，防止definePropsdefineEmitsno-undef等警告
        'vue/setup-compiler-macros': true
    },
    // 扩展的eslint规范
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    // 解析器
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    // 全局变量
    globals: {},
    // 启用额外的规则或覆盖默认的规则
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 只允许单引号
        'quotes': ['error', 'single'],
        // 不允许结尾带分号
        'semi': ['error', 'never'],
        // 指定vue文件中script标签内缩进两格
        'vue/script-indent': ['error', 2, {'baseIndent': 1}],
        // 关闭对组件名为单个单词的检查
        'vue/multi-word-component-names': 'off',
        // 箭头函数中的参数是否加括号
        'arrow-parens': ['error', 'always'],
        // 数组，对象行尾是否加逗号
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never'
        }],
        // 逗号的空格
        'comma-spacing': ['error', {'after': true}],
        // 去除多余的空格
        'no-trailing-spaces': 'error',
        // 不允许多个空行, 设置最大空行为1
        'no-multiple-empty-lines': ['error', {'max': 1}],
        // 大括号和中括号的空格
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        // 函数括号前必须带空格
        'space-before-function-paren': ['error', 'never'],
        // 禁止未使用过的变量
        'no-unused-vars': ['error', {'vars': 'all', 'args': 'none', 'ignoreRestSiblings': false}]
    }
}

