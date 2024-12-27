# PINYIN-NEXTJS
## 简介
这是一个使用Next.js框架开发的拼音输入法项目。它提供了一个用户友好的界面，允许用户输入拼音并实时显示对应的汉字。

## 环境
- node版本：v23.2.0
- npm版本：10.9.0
- pnpm版本：9.13.2

注意📢：
这里使用node版本是v23.2.0,在`next.config.js`中添加以下配置,避免打包的时候出现：`Unexpected end of JSON input`。

```
  webpack: (config, { isServer }) => {
    // 确保 Webpack 正确处理 JSON 文件
    config.module.rules.push({
      test: /\.json$/,
      use: 'json-loader',
      type: 'javascript/auto'
    });
    return config;
  },
```
还有就是ts文件导出的数据用json文件替代改写，不然也会报错。

## 安装依赖
```
pnpm install
```
## 运行项目
```
pnpm dev
```
