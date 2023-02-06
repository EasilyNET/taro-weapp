### 读我.md

- 安装[yarn 2.x](https://yarnpkg.com/getting-started/install)包管理工具
- 要求 [Node.js](https://nodejs.org/en/download/) 的版本 >=18.6
- 以管理员身份打开命令提示符

```bash
# 使用管理员权限运行corepack命令
corepack enable
corepack prepare yarn@stable --activate
# 将yarn包管理工具安装到项目
yarn set version berry
# 导入 yarn 更新依赖包插件
yarn plugin import interactive-tools
# 导入 yarn TypeScript 库自动加入插件
yarn plugin import typescript

# 安装项目依赖
yarn install
# 启动项目
yarn dev:weapp
# 构建项目
yarn build:weapp
# 更新项目依赖
yarn upgrade-interactive
```

- 本项目使用 [@antmjs/vantui](https://antmjs.github.io/vantui/#/home) UI 库
- [Taro](https://taro-docs.jd.com/docs/react-overall) 框架进行微信小程序开发,使用 React Hooks 技术栈
- 使用 LESS 作为样式文件.
