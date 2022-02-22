# vite2-vue3-h5-template
> 基于 Vite2、Vue3.x、Vue Router 4.x、Typescript、Eslint、Prettier 等库，是一个开箱即用得Vue3 项目脚手架，助您快速开发 vue项目

### 功能列表

- [x] vw视口适配
- [x] pinia
- [x] vue router
- [x] axios 请求封装
- [x] eslint+prettier 代码检查
- [x] husky+lint-staged+cz...提交代码检查
- [x] stylelint css 样式风格检查
- [ ] ...



**难点：stylelint配置，新版本配置比较麻烦**

参考：

[https://juejin.cn/post/7022720509875847182#heading-6](https://juejin.cn/post/7022720509875847182#heading-6)

[https://juejin.cn/post/7057029473979334692#comment](https://juejin.cn/post/7057029473979334692#comment)

**难点：移动端适配**，px-2-vw插件不支持postcss8.x，

[https://juejin.cn/post/7046169975706353701#heading-0](https://juejin.cn/post/7046169975706353701#heading-0)

### 快速使用

**1.安装依赖**

```
yarn #
```

**2.本地开发**

```
yarn dev
```

**3.打包上线**

```
yarn build
```

### 注意:由于使用`vite，rollup`打包目前不支持`jsx、tsx`以下图片引入写法：

静态图片：

```React TSX
// 不生效
<img src="../assets/images/test.png" />
```

```React TSX
// 生效
import testPng from '../assets/images/test.png'
;<img src={testPng} />
```

动态图片：

```React TSX
import { getImageUrl } from '@/utils'
;<img src={getImageUrl('product/move.svg')} />
```

### mock 模拟数据

根目录下得 mock 文件夹下添加需要模拟数据的 ts 文件，参考`mock/test.ts`即可

### 部署在非根目录

修改`.env.production`中的`VITE_ROUTER_BASE`

```bash
# 路由子目录，根据部署得目录添加
VITE_ROUTER_BASE=/test/
```

```nginx
# nginx
location /test {
    try_files $uri $uri /test/index.html;
}
```

### 修改提交流程

```javascript
// 普通修改
git add .
yarn cz
git push

// 版本迭代
npm run release
git push origin --tags
```

前缀规范如下：

- feat: 新功能（feature）
- fix: 修补 bug
- docs: 文档（documentation）
- style: 格式（不影响代码运行的变动）
- refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）
- perf: 性能优化
- test: 增加测试
- build: 编译相关的修改（例如 webpack, npm, gulp 等）
- ci: CI 相关的修改（例如 Travis, Circle 等）
- chore: 构建过程或辅助工具的变动
- revert: 回滚上一次 commit

commit 示例：

```
feat: 新增后台管理页面
```

开发者如果对以上规范不熟悉，可以使用辅助工具代替 git commit 进行提交。

有以下两种方式：

直接运行 <code>npm run commit</code> 代替 <code>git commit</code>

全局安装 <code>cz</code> 后运行 <code>git cz</code> 代替 <code>git commit</code>

```
yarn add global commitizen
yarn add global cz-conventional-changelog
```

参考链接：

[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

[Commit types](https://github.com/commitizen/conventional-commit-types)

### 其他

#### 参考文档：

**vite:**

[https://cn.vitejs.dev/guide/](https://cn.vitejs.dev/guide/)

[https://juejin.cn/post/7055878408365932557#comment](https://juejin.cn/post/7055878408365932557#comment)

