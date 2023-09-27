const { ERROR, OFF } = require('./constant');

module.exports = {
  // 数组的方法除了 forEach 之外，回调函数必须有返回值
  'array-callback-return': [
    ERROR,
    {
      // 禁止用 return 语句隐式返回 undefined
      allowImplicit: false,
      // 检查 forEach 不能有返回值
      checkForEach: true,
    },
  ],

  // constructor 中必须有 super
  'constructor-super': ERROR,

  // 禁止方向错误的 for 循环
  'for-direction': ERROR,

  //  getter 必须有返回值，并且禁止用 return 语句隐式返回 undefined
  'getter-return': [ERROR, { allowImplicit: false }],

  // 禁止将 async 函数做为 new Promise 的回调函数
  // @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
  'no-async-promise-executor': ERROR,

  // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
  // @reason 要求太严格了，有时需要在循环中写 await
  // 推荐使用Promise.all
  'no-await-in-loop': ERROR,

  // 禁止对已定义的 class 重新赋值
  'no-class-assign': ERROR,

  // 禁止与负零进行比较
  'no-compare-neg-zero': ERROR,

  // 禁止在测试表达式中使用赋值语句
  'no-cond-assign': [ERROR, 'always'],

  // 禁止对使用 const 定义的常量重新赋值
  'no-const-assign': ERROR,

  // 禁止出现不影响值的表达式
  'no-constant-binary-expression': ERROR,

  // 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
  'no-constant-condition': [ERROR, { checkLoops: false }],

  // 禁止在构造函数中返回值
  'no-constructor-return': ERROR,

  // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
  // @reason 几乎不会遇到这种场景
  'no-control-regex': OFF,

  // 禁止使用 debugger
  'no-debugger': ERROR,

  // 禁止在函数参数中出现重复名称的参数
  // @reason 编译阶段就会报错了
  'no-dupe-args': ERROR,

  // 禁止重复定义类的成员
  'no-dupe-class-members': ERROR,

  // 禁止 if else 的条件判断中出现重复的条件
  'no-dupe-else-if': ERROR,

  // 禁止在对象字面量中出现重复的键名
  'no-dupe-keys': ERROR,

  // 禁止在 switch 语句中出现重复测试表达式的 case
  'no-duplicate-case': ERROR,

  // 禁止重复导入模块
  'no-duplicate-imports': ERROR,

  // 禁止在正则表达式中使用空的字符集 []
  'no-empty-character-class': ERROR,

  // 禁止解构赋值中出现空 {} 或 []
  'no-empty-pattern': ERROR,

  // 禁止将 catch 的第一个参数 error 重新赋值
  'no-ex-assign': ERROR,

  // switch 的 case 内必须有 break, return 或 throw，空的 case 除外
  'no-fallthrough': ERROR,

  // 禁止将一个函数声明重新赋值
  'no-func-assign': ERROR,

  // 禁止对导入的模块进行赋值
  'no-import-assign': ERROR,

  // 禁止在 if 代码块内出现函数声明
  'no-inner-declarations': [ERROR, 'both'],

  // 禁止在 RegExp 构造函数中出现非法的正则表达式
  'no-invalid-regexp': ERROR,

  // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
  'no-irregular-whitespace': [
    ERROR,
    {
      skipStrings: true,
      skipComments: false,
      skipRegExps: true,
      skipTemplates: true,
    },
  ],

  // 禁止使用超出 js 精度范围的数字
  'no-loss-of-precision': ERROR,

  // 禁止正则表达式中使用肉眼无法区分的特殊字符
  // @reason 某些特殊字符很难看出差异，最好不要在正则中使用
  'no-misleading-character-class': ERROR,

  // 不允许使用全局非构造函数的 new 操作符
  'no-new-native-nonconstructor': ERROR,

  // 禁止使用 new 来生成 Symbol
  'no-new-symbol': ERROR,

  // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
  'no-obj-calls': ERROR,

  // 禁止在 Promise 的回调函数中直接 return
  'no-promise-executor-return': ERROR,

  // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
  'no-prototype-builtins': ERROR,

  // 禁止将自己赋值给自己
  'no-self-assign': ERROR,

  // 禁止将自己与自己比较
  'no-self-compare': ERROR,

  // 禁止 setter 有返回值
  'no-setter-return': ERROR,

  // 禁止在数组中出现连续的逗号(稀疏数组)
  'no-sparse-arrays': ERROR,

  // 禁止在普通字符串中出现模版字符串里的变量形式
  'no-template-curly-in-string': OFF,

  // 禁止在 super 被调用之前使用 this 或 super
  'no-this-before-super': ERROR,

  // 禁止使用未定义的变量
  'no-undef': ERROR,

  // 禁止混淆多行表达式
  'no-unexpected-multiline': ERROR,

  // 循环内必须对循环条件中的变量有修改
  'no-unmodified-loop-condition': ERROR,

  // 禁止在 return, throw, break 或 continue 之后还有代码
  'no-unreachable': ERROR,

  // 禁止在第一轮循环时就一定会退出循环的情况出现
  'no-unreachable-loop': ERROR,

  //  禁止在 finally 中出现 return, throw, break 或 continue
  //  @reason finally 中的语句会在 try 之前执行
  'no-unsafe-finally': ERROR,

  // 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
  'no-unsafe-negation': ERROR,

  // 禁止使用不安全的 optional chaining
  'no-unsafe-optional-chaining': ERROR,

  // 禁止类出现未使用的私有成员
  'no-unused-private-class-members': ERROR,

  // 已定义的变量必须使用
  'no-unused-vars': [
    ERROR,
    {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: false,
      caughtErrors: 'none',
    },
  ],

  // 禁止在定义变量之前就使用它
  'no-use-before-define': [
    ERROR,
    {
      variables: false,
      functions: true,
      classes: true,
      allowNamedExports: false,
    },
  ],

  // 禁止正则表达式中出现无用的回溯引用
  // @reason 某些回溯引用语法上没问题，但是会永远匹配到空字符串
  'no-useless-backreference': ERROR,

  // 禁止将 await 或 yield 的结果做为运算符的后面项
  // @reason 这样会导致不符合预期的结果
  'require-atomic-updates': ERROR,

  // 必须使用 isNaN(foo) 而不是 foo === NaN
  'use-isnan': ERROR,

  // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
  'valid-typeof': [ERROR, { requireStringLiterals: true }],
};
