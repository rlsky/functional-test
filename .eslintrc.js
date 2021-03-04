module.exports = {
  // 指定 eslint 配置文件
  root: true,
  // 配置继承的js风格
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    '@xes/eslint-config-xes'
  ],
  // 指定javaScript语言类型和风格
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 具体的检查规则  off | 0 关闭规则， warn | 1 警告， error | 2 报错
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [2, 'never'], // 在函数括号之前需要或不允许空格
    eqeqeq: ['off'], // 强制使用使用 === 和 !== ,除了与 null
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true }
    ], // 强制在单独的行上放置对象属性
    'no-case-declarations': 'off', // 禁止在case或default子句中出现词法声明(let,const,function,class)
    camelcase: [0, { properties: 'never' }], // 强制使用驼峰拼写法命名,约定不检查属性名称,
    'no-shadow': 2,
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ]
  }
}
