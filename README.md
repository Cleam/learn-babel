# learn-babel

learn babel-handbook

## 开发

```bash
# 编译
npm run build

# 运行插件
npm run test-plugins

# 运行测试
npm run test
```

## 预设 @babel/preset-env

- [`targets`](https://babeljs.io/docs/en/next/babel-preset-env.html#targets)
  1. 如果[不指定`targets`](https://babeljs.io/docs/en/next/babel-preset-env.html#no-targets)，默认预设将转换所有`ES2015-ES2020`代码到`ES5`。
- [`useBuiltIns`](https://babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins)
  1. [`usage`](https://babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-usage)【推荐】：根据实际使用语法来自动匹配 `polyfill`，需要指定 `corejs` 版本并安装`npm install core-js@3 --save`，默认 `corejs@2`
  2. [`entry`](https://babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-entry)：在入口文件`import "@babel/polyfill";`（等同于`import "core-js";`和`import "regenerator-runtime/runtime";`）
  3. [false](https://babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-false)【默认】：不自动`polyfill`

## 插件顺序（[Plugin Ordering](https://babeljs.io/docs/en/plugins#plugin-ordering)）

- 插件先于预设运行（Plugins run before Presets.）
- 插件按顺序运行（Plugin ordering is first to last.）
- 预设按反序运行（Preset ordering is reversed (last to first).）

一个简单的反转名称（reverses names）的插件

```js
export default function () {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('');
      },
    },
  };
}
```

## plugins

- p1：往 function 中插入时间计算代码（console.time console.timeEnd）
- p2 p3 p4 p5：代码操作（往源码插入、删除、替换代码等）
- p6：作用域（scope）
- p7：函数声明转换成函数表达式（变量声明+函数表达式）
- p8：插件参数（Plugin Options）
