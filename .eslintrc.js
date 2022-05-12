/*
 * @Author: haoxiaojun
 * @Date: 2022-05-11 15:49:22
 * @Details: 初版eslint规则，主要配置eslint和prettier的冲突适配问题，有不合适的可具体情况具体修改
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-05-12 15:30:00
 */
module.exports = {
  // 设置我们的运行环境为浏览器 + es2021 + node ,否则eslint在遇到 Promise，window等全局对象时会报错
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 开启setup语法糖环境
    'vue/setup-compiler-macros': true,
  },

  // 继承eslint推荐的规则集，vue基本的规则集，typescript的规则集
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'standard', // 格式化规范
    'plugin:prettier/recommended', // 新增，必须放在最后面,prettier规则覆盖与eslint冲突的规则
    'prettier', // 避免vue 与 prettier冲突
    'eslint:recommended',
  ],

  // 定义ESLint的解析器
  parser: 'vue-eslint-parser',

  // 支持ts的最新语法
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  // 添加vue和@typescript-eslint插件，增强eslint的能力
  plugins: ['vue', '@typescript-eslint', 'prettier'],

  rules: {
    // "off"或者0    //关闭规则关闭
    // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
    // "error"或者2    //把规则作为一个错误（退出代码触发时为1）

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 解析vue模板错误规则
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false,
        'missing-semicolon-after-character-reference': false,
      },
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
    'no-param-reassign': ['error', { props: false }], // 函数形参可修改
    'vue/multi-word-component-names': 'off', // eslint-plugin-vue @8版本中新增了不少的规则，第一条就是 **‘vue/multi-word-component-names’: ‘error’,**所有index.vue 会报错，解决方法:
    'no-new-object': 'off', // 关闭不可以new对象的规则
    'no-explicit-any': 'off', // 可以使用any，但请尽量不使用any
    '@typescript-eslint/no-explicit-any': 'off', // ts可以使用any
    'vue/v-on-event-hyphenation': 'off', // 关闭事件命名样式需要用连字符
    // 'prettier/prettier': [
    //   'error',
    //   {},
    //   {
    //     fileInfoOptions: {
    //       withNodeModules: true,
    //     },
    //   },
    // ],
  },
};
