
## 参考
[https://juejin.cn/column/7031914136783028237](https://juejin.cn/column/7031914136783028237)

[Babel配置不要再“复制粘贴”了，带你自己配一个Babel](https://juejin.cn/post/7197666704435920957)

[近万字长文带你理解并掌握 Babel7 如何配置](https://juejin.cn/post/7214831216028631095)

## 最佳实践

### 项目开发
plugin-transform-runtime只使用其移除内联复用的辅助函数的特性，减小打包体积
```js
{
  test: /\.js?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [["@babel/preset-env", { useBuiltIns: 'usage', corejs: { version: 3 } }]]
      plugins: [["@babel/plugin-transform-runtime", { "corejs": false }]]
    }
  }
}
```

### 类库开发
类库开发尽量不使用污染全局环境的polyfill，因此@babel/preset-env只发挥语法转换的功能
polyfill由@babel/plugin-transform-runtime来处理，推荐使用core-js@3

```js
{
  presets: [["@babel/preset-env"]],
  plugins: [["@babel/plugin-transform-runtime", corejs: { version: 3 } }]]
}
```


## 值得关注的信息

> 如果你正在编译 generator 函数或 async 函数为 ES5，并且你正在使用版本低于 7.18.0 的 @babel/helpers（@babel/core 下的子依赖） 或 @babel/plugin-transform-regenerator，那么你必须在入口文件引入 regenerator runtime。
