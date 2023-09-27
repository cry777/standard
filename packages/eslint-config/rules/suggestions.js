/* eslint-disable max-lines */
const { ERROR, OFF, WARN } = require('./constant');

module.exports = {
  // setter 必须有对应的 getter，getter 可以没有对应的 setter
  'accessor-pairs': [
    ERROR,
    {
      setWithoutGet: true,
      getWithoutSet: false,
    },
  ],

  /*
   * @style
   * 箭头函数体必须由大括号包裹
   * @reason 代码格式问题，最好由 Prettier 解决
   */
  'arrow-body-style': OFF,

  /*
   * 将 var 定义的变量视为块作用域，禁止在块外使用
   * @reason 已经禁止使用 var 了
   */
  'block-scoped-var': OFF,

  /*
   * 变量名必须是 camelCase 风格的
   * @reason 很多 api 或文件名都不是 camelCase 风格的
   */
  camelcase: OFF,

  // 注释的首字母必须大写
  'capitalized-comments': OFF,

  // 在类的非静态方法中，必须存在对 this 的引用
  'class-methods-use-this': OFF,

  /*
   * 禁止函数的循环复杂度超过 20
   * https://en.wikipedia.org/wiki/Cyclomatic_complexity
   */
  complexity: [
    ERROR,
    {
      max: 20,
    },
  ],

  /*
   * @maybe
   * 禁止函数在不同分支返回不同类型的值
   * @reason 缺少 TypeScript 的支持，类型判断是不准确的
   */
  'consistent-return': OFF,

  // 限制 this 的别名
  'consistent-this': OFF,

  /*
   * @style
   * 对所有控制语句强制使用一致的大括号样式
   */
  curly: OFF,

  // switch 语句必须有 default
  'default-case': OFF,

  // switch 语句中的 default 必须在最后
  'default-case-last': ERROR,

  // 有默认值的参数必须放在函数参数的末尾
  'default-param-last': ERROR,

  // 禁止使用 foo['bar']，必须写成 foo.bar
  'dot-notation': ERROR,

  // 必须使用 === 或 !==，禁止使用 == 或 !=
  eqeqeq: [ERROR, 'always'],

  // 函数赋值给变量的时候，函数名必须与变量名一致
  'func-name-matching': [
    ERROR,
    'always',
    {
      considerPropertyDescriptor: false,
      includeCommonJSModuleExports: false,
    },
  ],

  // 函数必须有名字
  'func-names': OFF,

  // 必须只使用函数声明或只使用函数表达式
  'func-style': OFF,

  // setter 和 getter 必须写在一起
  'grouped-accessor-pairs': ERROR,

  // for in 内部必须有 hasOwnProperty
  'guard-for-in': ERROR,

  // 禁止使用指定的标识符
  'id-denylist': OFF,

  // 限制变量名长度
  'id-length': OFF,

  // 限制变量名必须匹配指定的正则表达式
  'id-match': OFF,

  /*
   * @maybe
   * 变量必须在定义的时候赋值
   */
  'init-declarations': OFF,

  // 使用 a ||= b 替代 a = a || b
  'logical-assignment-operators': OFF,

  // 限制一个文件中类的数量
  'max-classes-per-file': OFF,

  // 代码块嵌套的深度禁止超过 5 层
  'max-depth': [ERROR, 5],

  /*
   * @maybe
   * 限制一个文件最多的行数
   */
  'max-lines': [WARN, { max: 360, skipBlankLines: false, skipComments: false }],

  // 限制函数块中的代码行数
  'max-lines-per-function': [
    WARN,
    {
      max: 100,
      skipBlankLines: false,
      skipComments: false,
      IIFEs: false,
    },
  ],

  // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
  'max-nested-callbacks': [ERROR, 3],

  // 函数的参数禁止超过 3 个
  'max-params': [ERROR, 4],

  // 限制函数块中的语句数量
  'max-statements': [OFF, 50],

  // 约束多行注释的格式
  'multiline-comment-style': OFF,

  // new 后面的类名必须首字母大写
  'new-cap': [
    ERROR,
    {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    },
  ],

  // 禁止使用 alert
  'no-alert': ERROR,

  /*
   * 禁止使用 Array 构造函数时传入的参数超过一个
   * @reason 参数为一个时表示创建一个指定长度的数组，比较常用
   * 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
   */
  'no-array-constructor': ERROR,

  // 禁止使用位运算
  'no-bitwise': OFF,

  /*
   * 禁止使用 caller 或 callee
   * @reason 它们是已废弃的语法
   */
  'no-caller': ERROR,

  // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
  'no-case-declarations': ERROR,

  // 禁止可能与比较混淆的箭头函数
  'no-confusing-arrow': [
    ERROR,
    {
      onlyOneSimpleParam: false,
      allowParens: true,
    },
  ],

  // 禁止使用 console
  'no-console': OFF,

  // 禁止使用 continue
  'no-continue': OFF,

  /*
   * 禁止对一个变量使用 delete
   * @reason 编译阶段就会报错了
   */
  'no-delete-var': OFF,

  /*
   * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
   * @reason 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
   */
  'no-div-regex': OFF,

  // 禁止在 else 内使用 return，必须改为提前结束
  'no-else-return': ERROR,

  // 禁止出现空代码块，允许 catch 为空代码块
  'no-empty': [
    ERROR,
    {
      allowEmptyCatch: true,
    },
  ],

  /*
   * 不允许有空函数
   * @reason 有时需要将一个空函数设置为某个项的默认值
   */
  'no-empty-function': OFF,

  // 不允许有空的 static 块
  'no-empty-static-block': ERROR,

  // 禁止使用 foo == null，必须使用 foo === null
  'no-eq-null': ERROR,

  // 禁止使用 eval
  'no-eval': ERROR,

  /*
   * 禁止修改原生对象
   * @reason 修改原生对象可能会与将来版本的 js 冲突
   */
  'no-extend-native': ERROR,

  // 禁止出现没必要的 bind
  'no-extra-bind': ERROR,

  // 禁止不必要的布尔类型转换
  'no-extra-boolean-cast': ERROR,

  /*
   * 禁止出现没必要的 label
   * @reason 已经禁止使用 label 了
   */
  'no-extra-label': OFF,

  /*
   * @style
   * 禁止不必要的分号
   */
  'no-extra-semi': OFF,

  // 不允许数字文字中的前导或尾随小数点
  'no-floating-decimal': ERROR,

  // 禁止对全局变量赋值
  'no-global-assign': ERROR,

  // 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
  'no-implicit-coercion': [
    ERROR,
    {
      allow: ['!!'],
    },
  ],

  /*
   * 禁止在全局作用域下定义变量或申明函数
   * @reason 模块化之后，不会出现这种在全局作用域下定义变量的情况
   */
  'no-implicit-globals': OFF,

  // 禁止在 setTimeout 或 setInterval 中传入字符串
  'no-implied-eval': ERROR,

  // 禁止在代码后添加单行注释
  'no-inline-comments': OFF,

  /*
   * 禁止在类之外的地方使用 this
   * @reason 只允许在 class 中使用 this
   */
  'no-invalid-this': ERROR,

  /*
   * 禁止使用 __iterator__
   * @reason __iterator__ 是一个已废弃的属性
   * 使用 [Symbol.iterator] 替代它
   */
  'no-iterator': ERROR,

  /*
   * 禁止 label 名称与已定义的变量重复
   * @reason 已经禁止使用 label 了
   */
  'no-label-var': OFF,

  // 禁止使用 label
  'no-labels': ERROR,

  // 禁止使用没必要的 {} 作为代码块
  'no-lone-blocks': ERROR,

  /*
   * 禁止 else 中只有一个单独的 if
   * @reason 单独的 if 可以把逻辑表达的更清楚
   */
  'no-lonely-if': OFF,

  /*
   * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
   * @reason 使用 let 就已经解决了这个问题了
   */
  'no-loop-func': OFF,

  // 禁止使用 magic numbers
  'no-magic-numbers': OFF,

  // 禁止混合二元运算符
  'no-mixed-operators': OFF,

  // 禁止连续赋值，比如 foo = bar = 1
  'no-multi-assign': OFF,

  // 禁止使用 \ 来换行字符串
  'no-multi-str': ERROR,

  /*
   * 禁止 if 里有否定的表达式
   * @reason 否定的表达式可以把逻辑表达的更清楚
   */
  'no-negated-condition': ERROR,

  // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
  'no-nested-ternary': WARN,

  /*
   * 禁止直接 new 一个类而不赋值
   * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
   */
  'no-new': ERROR,

  /*
   * 禁止使用 new Function
   * @reason 这和 eval 是等价的
   */
  'no-new-func': ERROR,

  // 禁止使用 new 来生成 String, Number 或 Boolean
  'no-new-wrappers': ERROR,

  // 禁止在字符串中使用 \8 \9
  'no-nonoctal-decimal-escape': ERROR,

  // 禁止调用不带参数的对象构造函数
  'no-object-constructor': ERROR,

  /*
   * 禁止使用 0 开头的数字表示八进制数
   * @reason 编译阶段就会报错了
   */
  'no-octal': OFF,

  /*
   * 禁止使用八进制的转义符
   * @reason 编译阶段就会报错了
   */
  'no-octal-escape': OFF,

  // 禁止对函数的参数重新赋值
  'no-param-reassign': ERROR,

  'no-plusplus': OFF,

  /*
   * 禁止使用 __proto__
   * @reason __proto__ 是已废弃的语法
   */
  'no-proto': ERROR,

  /*
   * 禁止重复定义变量
   * @reason 禁用 var 之后，编译阶段就会报错了
   */
  'no-redeclare': OFF,

  // 禁止在正则表达式中出现连续的空格
  'no-regex-spaces': ERROR,

  // 禁止导出指定的变量名
  'no-restricted-exports': OFF,

  // 禁止使用指定的全局变量
  'no-restricted-globals': OFF,

  // 禁止导入指定的模块
  'no-restricted-imports': OFF,

  // 禁止使用指定的对象属性
  'no-restricted-properties': OFF,

  // 禁止使用指定的语法
  'no-restricted-syntax': OFF,

  // 禁止在 return 语句里赋值
  'no-return-assign': [ERROR, 'always'],

  /*
   * 禁止出现 location.href = 'javascript:void(0)';
   * @reason 有些场景下还是需要用到这个
   */
  'no-script-url': ERROR,

  // 禁止使用逗号操作符
  'no-sequences': ERROR,

  // 禁止变量名与上层作用域内的已定义的变量重复
  'no-shadow': ERROR,

  // 禁止使用保留字作为变量名
  'no-shadow-restricted-names': ERROR,

  // 禁止使用三元表达式
  'no-ternary': OFF,

  // 禁止 throw 字面量，必须 throw 一个 Error 对象
  'no-throw-literal': ERROR,

  // 禁止将 undefined 赋值给变量
  'no-undef-init': ERROR,

  // 禁止使用 undefined
  'no-undefined': OFF,

  // 禁止变量名出现下划线
  'no-underscore-dangle': OFF,

  /*
   * 必须使用 !a 替代 a ? false : true
   * @reason 后者表达的更清晰
   */
  'no-unneeded-ternary': OFF,

  // 禁止无用的表达式
  'no-unused-expressions': [
    ERROR,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],

  /*
   * 禁止出现没用到的 label
   * @reason 已经禁止使用 label 了
   */
  'no-unused-labels': OFF,

  // 禁止出现没必要的 call 或 apply
  'no-useless-call': ERROR,

  /*
   * 禁止在 catch 中仅仅只是把错误 throw 出去
   * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
   */
  'no-useless-catch': ERROR,

  // 禁止出现没必要的计算键名
  'no-useless-computed-key': ERROR,

  // 禁止出现没必要的字符串连接
  'no-useless-concat': ERROR,

  // 禁止出现没必要的 constructor
  'no-useless-constructor': ERROR,

  /*
   * 禁止出现没必要的转义
   * @reason 转义可以使代码更易懂
   */
  'no-useless-escape': ERROR,

  // 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
  'no-useless-rename': ERROR,

  // 禁止没必要的 return
  'no-useless-return': ERROR,

  'no-var': ERROR,

  'no-void': ERROR,

  // 禁止注释中出现 TODO 和 FIXME
  'no-warning-comments': OFF,

  // 禁止使用 with
  'no-with': ERROR,

  // 必须使用 a = {b} 而不是 a = {b: b}
  'object-shorthand': ERROR,

  // 强制变量在函数中一起或单独声明
  'one-var': [ERROR, 'never'],

  'one-var-declaration-per-line': [ERROR, 'initializations'],

  // 必须使用 x = x + y 而不是 x += y
  'operator-assignment': OFF,

  /*
   * @style
   * 回调函数必须使用箭头函数
   */
  'prefer-arrow-callback': OFF,

  // 申明后不再被修改的变量必须使用 const 来申明
  'prefer-const': ERROR,

  // 必须使用解构赋值
  'prefer-destructuring': OFF,

  // 使用 ES2016 的语法 ** 替代 Math.pow
  'prefer-exponentiation-operator': OFF,

  /*
   * 使用 ES2018 中的正则表达式命名组
   * @reason 正则表达式已经较难理解了，没必要强制加上命名组
   */
  'prefer-named-capture-group': OFF,

  // 禁止 parseInt() 和 Number.parseInt() 支持二进制、八进制和十六进制文字
  'prefer-numeric-literals': OFF,

  // 使用 Object.hasOwn() 而不是 Object.prototype.hasOwnProperty.call()
  'prefer-object-has-own': ERROR,

  // 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
  'prefer-object-spread': ERROR,

  // Promise 的 reject 中必须传入 Error 对象，而不是字面量
  'prefer-promise-reject-errors': ERROR,

  // 优先使用正则表达式字面量，而不是 RegExp 构造函数
  'prefer-regex-literals': ERROR,

  // 必须使用 ...args 而不是 arguments
  'prefer-rest-params': ERROR,

  // 必须使用 ... 而不是 apply，比如 foo(...args)
  'prefer-spread': OFF,

  // 必须使用模版字符串而不是字符串连接
  'prefer-template': OFF,

  // 需要在对象文字属性名称周围加上引号
  'quote-props': [ERROR, 'as-needed'],

  // parseInt 必须传入第二个参数
  radix: ERROR,

  // async 函数中必须存在 await 语句
  'require-await': ERROR,

  // 正则表达式中必须要加上 u 标志
  'require-unicode-regexp': OFF,

  // generator 函数内必须有 yield
  'require-yield': ERROR,

  // 导入必须按规则排序
  'sort-imports': [
    OFF,
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],

  // 对象字面量的键名必须排好序
  'sort-keys': OFF,

  // 变量申明必须排好序
  'sort-vars': OFF,

  // 注释的斜线或 * 后必须有空格
  'spaced-comment': [
    ERROR,
    'always',
    {
      markers: ['/'],
      block: {
        exceptions: ['*'],
        balanced: true,
      },
    },
  ],

  // 禁止使用 'use strict';
  strict: [ERROR, 'never'],

  // 创建 Symbol 时必须传入参数
  'symbol-description': ERROR,

  // var 必须在作用域的最前面
  'vars-on-top': OFF,

  // 必须使用 if (foo === 5) 而不是 if (5 === foo)
  yoda: [
    ERROR,
    'never',
    {
      onlyEquality: true,
    },
  ],
};
