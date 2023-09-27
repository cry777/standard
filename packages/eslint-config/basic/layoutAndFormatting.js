const { OFF } = require('./constant');

module.exports = {

  /*
   * @style
   * 在打开数组括号之后和关闭数组括号之前强制换行
   */
  'array-bracket-newline': OFF,

  /*
   * @style
   * 在数组括号内强制保持一致的间距
   */
  'array-bracket-spacing': OFF,

  /*
   * @style
   * 在每个数组元素后强制换行
   */
  'array-element-newline': OFF,

  /*
   * @style
   * 箭头函数参数需要括号
   */
  'arrow-parens': OFF,

  /*
   * @style
   * 在箭头函数中的箭头前后强制保持一致的间距
   */
  'arrow-spacing': OFF,

  /*
   * @style
   * 在打开块之后和关闭块之前禁止或强制块内的空格
   */
  'block-spacing': OFF,

  /*
   * @style
   * 强制使用一致的大括号样式
   */
  'brace-style': OFF,

  /*
   * @style
   * 要求或不允许尾随逗号
   */
  'comma-dangle': OFF,

  /*
   * @style
   * 在逗号前后强制使用空格
   */
  'comma-spacing': OFF,

  /*
   * @style
   * 强制使用一致的逗号样式
   */
  'comma-style': OFF,

  /*
   * @style
   * 在计算的属性括号内强制执行一致的间距
   */
  'computed-property-spacing': OFF,

  /*
   * @style
   * 在点之前和之后强制执行一致的换行符
   */
  'dot-location': OFF,

  /*
   * @style
   * 在文件末尾要求或禁止换行
   */
  'eol-last': OFF,

  /*
   * @style
   * 要求或不允许函数标识符及其调用之间有间距
   */
  'func-call-spacing': OFF,

  /*
   * @style
   * 在函数调用的参数之间强制换行
   */
  'function-call-argument-newline': OFF,

  /*
   * @style
   * 在函数括号内强制执行一致的换行符
   */
  'function-paren-newline': OFF,

  /*
   * @style
   * 在生成器函数中强制 * 运算符周围的间距一致
   */
  'generator-star-spacing': OFF,

  /*
   * @style
   * 强制箭头函数体的位置
   */
  'implicit-arrow-linebreak': OFF,

  /*
   * @style
   * 强制一致的缩进
   */
  indent: OFF,

  /*
   * @style
   * 强制在 JSX 属性中一致地使用双引号或单引号
   */
  'jsx-quotes': OFF,

  /*
   * @style
   * 在对象文字属性中强制键和值之间的间距一致
   */
  'key-spacing': OFF,

  /*
   * @style
   * 在关键字前后强制保持一致的间距
   */
  'keyword-spacing': OFF,

  /*
   * @style
   * 单行注释必须写在上一行
   */
  'line-comment-position': OFF,

  /*
   * @style
   * 使用一致的换行符
   */
  'linebreak-style': OFF,

  /*
   * @style
   * 注释周围需要空行
   */
  'lines-around-comment': OFF,

  // 要求或禁止类成员之间有空行
  'lines-between-class-members': OFF,

  /*
   * @style
   * 强制最大行长
   */
  'max-len': OFF,

  // 强制执行每行允许的最大语句数
  'max-statements-per-line': OFF,

  /*
   * @style
   * 在三元表达式的操作数之间强制换行
   */
  'multiline-ternary': OFF,

  /*
   * @style
   * 在调用不带参数的构造函数时强制或禁止使用括号
   */
  'new-parens': OFF,

  /*
   * @style
   * 在方法链中的每次调用后都需要换行符
   */
  'newline-per-chained-call': OFF,

  /*
   * @style
   * 禁止不必要的括号
   */
  'no-extra-parens': OFF,

  /*
   * @style
   * 不允许使用混合空格和制表符进行缩进
   */
  'no-mixed-spaces-and-tabs': OFF,

  /*
   * @style
   * 禁止多个空格
   */
  'no-multi-spaces': OFF,

  /*
   * @style
   * 禁止多个空行
   */
  'no-multiple-empty-lines': OFF,

  // @style
  'no-tabs': OFF,

  /*
   * @style
   * 不允许在行尾出现尾随空格
   */
  'no-trailing-spaces': OFF,

  /*
   * @style
   * 禁止属性前有空格
   */
  'no-whitespace-before-property': OFF,

  /*
   * @style
   * 强制执行单行语句的位置
   */
  'nonblock-statement-body-position': OFF,

  /*
   * @style
   * 在打开大括号之后和关闭大括号之前强制执行一致的换行符
   */
  'object-curly-newline': OFF,

  /*
   * @style
   * 在大括号内强制保持一致的间距
   */
  'object-curly-spacing': OFF,

  /*
   * @style
   * 强制将对象属性放置在单独的行上
   */
  'object-property-newline': OFF,

  /*
   * @style
   * 为操作符强制执行一致的换行样式
   */
  'operator-linebreak': OFF,

  /*
   * @style
   * 要求或禁止在块内填充
   */
  'padded-blocks': OFF,

  // 要求或禁止语句之间的填充行
  'padding-line-between-statements': OFF,

  /*
   * @style
   * 强制一致地使用反引号、双引号或单引号
   */
  quotes: OFF,

  /*
   * @style
   * 在 rest 和 spread 运算符及其表达式之间强制执行间距
   */
  'rest-spread-spacing': OFF,

  /*
   * @style
   * 要求或禁止使用分号而不是 ASI
   */
  semi: OFF,

  /*
   * @style
   * 在分号前后强制保持一致的间距
   */
  'semi-spacing': OFF,

  /*
   * @style
   * 强制分号的位置
   */
  'semi-style': OFF,

  /*
   * @style
   * 在块之前强制保持一致的间距
   */
  'space-before-blocks': OFF,

  /*
   * @style
   * 在函数定义左括号之前强制执行一致的间距
   */
  'space-before-function-paren': OFF,

  /*
   * @style
   * 在括号内强制保持一致的间距
   */
  'space-in-parens': OFF,

  /*
   * @style
   * 中缀运算符周围需要间距
   */
  'space-infix-ops': OFF,

  /*
   * @style
   * 在一元运算符之前或之后强制执行一致的间距
   */
  'space-unary-ops': OFF,

  /*
   * @style
   * 在 switch 语句的冒号周围强制使用空格
   */
  'switch-colon-spacing': OFF,

  /*
   * @style
   * 要求或禁止模板字符串的嵌入表达式周围有空格
   */
  'template-curly-spacing': OFF,

  /*
   * @style
   * 要求或禁止模板标签及其文字之间的间距
   */
  'template-tag-spacing': OFF,

  /*
   * @style
   * 要求或禁止 Unicode 字节顺序标记 (BOM)
   */
  'unicode-bom': OFF,

  /*
   * @style
   * 立即函数调用周围需要括号
   */
  'wrap-iife': OFF,

  /*
   * @style
   * 需要正则表达式文字周围的括号
   */
  'wrap-regex': OFF,

  /*
   * @style
   * 强制在 yield* 表达式中 * 周围使用空格
   */
  'yield-star-spacing': OFF,
};
