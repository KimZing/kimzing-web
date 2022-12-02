// 其中有很多格式化规则和prettier是重复的，这里就不做集成了，保证兼容就行
module.exports = {
    env: {
        'browser': true,
        'es2021': true,
        'node': true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    // 做了改写，vue-parser和ts-parser有冲突，参照https://eslint.vuejs.org/user-guide/
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // 避免使用console
        'no-console': 'warn',
        // 使用两个空格
        indent: ['error', 2],
        // 指定vue文件中script标签内缩进两格
        'vue/script-indent': ['error', 2, {'baseIndent': 0}],
        // 使用单引号
        quotes: ['error', 'single'],
        // 不使用分号
        semi: ['error', 'never'],
        // 换行符使用unix
        'linebreak-style': ['error', 'unix'],
        // 既可以使用no-unused-vars检测未使用变量的功能，也可以解决TypeScript接口抛出“ no-unused-vars”报错。
        '@typescript-eslint/no-unused-vars': 'error',
        // 箭头函数中的参数必须加括号
        'arrow-parens': ['error', 'always'],
        // 数组，对象行尾是否加逗号
        'comma-dangle': ['error', {'arrays': 'never', 'objects': 'never'}],
        // 逗号分隔元素之间加空格
        'comma-spacing': ['error', {'after': true}],
        // 去除多余的空格
        'no-trailing-spaces': 'error',
        // 不允许多个空行, 设置最大空行为1
        'no-multiple-empty-lines': ['error', {'max': 1}],
        // 数组头部尾部必须添加空格(prettier不存在), const a = [1, 2]
        // 'array-bracket-spacing': ['error', 'always'],
        // 对象体头部尾部必须添加空格
        'object-curly-spacing': ['error', 'always'],
        // 函数括号前必须带空格(prettier不存在) const a = function b() {}
        // 'space-before-function-paren': ['error', 'always'],
        //  不允许多个空格出现在一起
        'no-multi-spaces': 'error',
        // 要求操作符周围有空格
        'space-infix-ops': 'error',
        // 块元素前面要加空格
        'space-before-blocks': 'error',
        // 箭头函数前后加空格
        'arrow-spacing': 'error',
        // 屏蔽vite.d.ts文件中采用的任意类型问题
        "@typescript-eslint/ban-types": "off",
        // 允许使用any类型
        "@typescript-eslint/no-explicit-any": "off",
        // 允许组件名称命名为单个单词
        "vue/multi-word-component-names": "off",
    }
}
