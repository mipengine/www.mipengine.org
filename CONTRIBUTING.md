# MIP 官网贡献指南

非常感谢您关注 [mipengine](#mipengine)/[www.mipengine.org](https://github.com/mipengine/www.mipengine.org) 项目，在提交您的贡献之前，请务必认真阅读以下准则。

- [问题反馈](#issue)
- [开发指南](#develop)
    - [常用脚本命令（ npm scripts ）](#npm-scripts)
    - [代码风格](#code-spec)
    - [项目结构](#dir-spec)
    - [提交请求（pull request）](#pull-request)
- [提交信息规范](#commit-message-spec)
- [文档说明](#docs-spec)
    - [文档提醒语法](#docs-tips)
    - [新增文档](#new-docs)

<a id="issue"></a>
## 问题反馈

- 请避免提交重复的 issue，在提交之前搜索现有的 issue 。
- 请确定 issue 的类型，并在 issue 内容描述清晰，我们将根据内容对 issue 打上对应的 label 。
- [组件列表](https://www.mipengine.org/doc/3-widget/10-widgets.html) 内所有组件文档请参考文档页面标题右侧编辑按钮提交。

<a id="develop"></a>
## 开发设置

需要安装 [nodejs](https://nodejs.org/) 版本4+ ，下载项目到本地后安装依赖 `npm install` ，安装完成后将自动更新 [核心内置组件](https://github.com/mipengine/mip/tree/master/src/components) 和 [官方扩展组件文档](https://github.com/mipengine/mip-extensions) 到本地。

<a id="npm-scripts"></a>
### 常用脚本命令（ npm scripts ）

``` bash
# 启动本地 http 服务器用来本地预览
$ npm run server

# 编译 markdown 文档为 html 文件
$ npm run build

# 同步最新的核心内置组件文档和官方扩展组件文档
$ npm run sync-components

# 验证编译生成的 html 文件是否符合 MIP 规范
$ npm run validator

# 使用 fecs 验证代码风格
$ npm run lint
```

<a id="code-spec"></a>
### 代码风格

基于 <https://github.com/ecomfe/spec> 风格编写代码，基于 <https://github.com/ecomfe/fecs/> 验证代码风格。

<a id="dir-spec"></a>
### 项目结构

```
.
├── _config.yml             - 站点常用配置项
├── dist                    - `npm run build` 生成 html 文件目录
├── scripts                 - 基于 Hexo 的扩展插件
├── source                  - 文档数据源
│   ├── _data
│   │   ├── menu.yml        - 顶部导航配置
│   │   └── sidebar.yml     - 文档左面导航配置
│   ├── doc                 - 文档 markdown 源文件目录
│   └── examples            - 组件预览源目录，该目录不在本仓库维护
├── test                    - 验证 MIP 规范、死链接检测脚本
├── themes                  - MIP 官网定制化主题
│   └── mip
│       ├── layout
│       │   ├── doc.swig                - 文档模板
│       │   ├── examples.swig           - 组件预览模板
│       │   ├── index.swig              - 主页模板
│       │   ├── mip.layout.swig         - mip基础模板
│       │   ├── mippath.swig            - MIP PATH 路径转换模板
│       │   ├── nomip.layout.swig       - 非 MIP 页基础模板
│       │   ├── post.swig               - 文章模板
│       │   └── timeline.swig           - 项目进展模板
└── tools
    ├── changelog.json      - MIP 项目进展配置
    ├── components.json     - MIP 组件文档配置
```

<a id="pull-request"></a>
### 提交请求（pull request）

1. fork [mipengine/www.mipengine.org](https://github.com/mipengine/www.mipengine.org)
1. 把个人仓库（repository）克隆到电脑上，并安装所依赖的插件。
1. 开始编辑文件，可以通过命令 `npm run server` 预览编辑的效果，编辑完成后，需要检查：
    1. 运行 `npm run validator` 确保 MIP 规范验证通过。
    2. 运行 `npm run lint` 确保代码风格验证通过。
1. 推送（push）分支。
1. 建立一个新的合并申请（pull request）并描述变动。

<a id="commit-message-spec"></a>
## 提交信息规范

git commit 信息和 pull request 标题必须遵循 MIP 项目的 [提交信息规范](https://github.com/mipengine/spec/blob/master/docs/commit-message-spec.md) ，否则不予合入。

<a id="docs-spec"></a>
## 文档说明

- 文档基于 Markdown 格式编写。
- 文档编辑地址可通过访问文档右上角编辑按钮获得。
- 文档内链接使用绝对路径，如： `[新的起点](/doc/00-mip-101.html)` 。
- 使用中文半角标点符号。

<a id="docs-tips"></a>
### 文档提醒语法

在段落前插入 `特殊标记` 用于重点强调信息，如：

```
[notice] MIP 十分关注页面速度，也因此禁用了一些引起拖慢速度的 html 标签。

[info] MIP HTML 基于 HTML 基础规范进行了扩展。

[warning] 出于对代码质量和性能的考虑， MIP 页中不允许自定义 javascript 代码。
```

显示的样式如下：

![image](https://user-images.githubusercontent.com/3872051/32155586-25267f66-bd73-11e7-8c3e-dc862e4aa530.png)

<a id="new-docs"></a>
### 新增文档

#### 文档目录

在 `source/` 对应目录下新增 `.md` 文件，如：

- `source/demos.md` 对应链接路径 `/demos.html`
- `source/test/index.md` 对应链接路径 `/test`
- `source/test/ok.md` 对应链接路径 `/test/ok.html`
- `source/doc/mip-cdn.md` 对应链接路径 `/doc/mip-cdn.html`

#### 文档配置

```markdown
title: MIP
layout: post
keywords: 关键词
description: 描述
---

我是内容
```

注意：

- `title` - 配置页面标题内容。
- `layout: post` - 配置继承 `themes/mip/layout/post.swig` 模板，为文章类型，也可以继承 `doc` 模板。
- `keywords` - 配置页面关键词信息，默认为 `_config.yml` 配置内容，如果为 false 表示不输出。
- `description` - 配置页面描述信息，默认为 `_config.yml` 配置内容，如果为 false 表示不输出。
