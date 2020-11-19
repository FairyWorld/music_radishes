## Radishes 2.0.0

`Radishes`是这个项目的名称，它是由`萝卜`翻译而来。

项目目前还在 rfc 阶段，只有一个大致方向，具体细节可以讨论。

界面表现和功能参考 windows 网易云音乐界面和 ios 的网易云音乐，会对一些功能进行移动端支持。希望能找到合适的基于 vue3 的移动端打包工具（非套壳）。

项目成立原因：

- 通过完成此项目，接触 vue3 以及周边生态。
- [TypeScript 4.x](https://github.com/Microsoft/TypeScript) 已经发布，它的好处已经足够明显，故借此项目深入学习。
- 使用前沿技术让一个项目从 0 到 1 的过程不仅可以提升我们的 coding 水平，还可以提升非 coding （设计、 git 、 nginx 等）的能力。

### PR 说明

以 next 分支为默认分支，请基于 next 分支 fock 自己的仓库，在提交之前请同步 next 分支，尽量避免代码冲突。

在基本架构完成之后我会创建一些基本的编码规则和提交规则，也欢迎大家参与进来一起制定。

### 重构计划

~~2020.10.31 之前完成基本架构（可能更早）。~~(已完成基本架构，可能会因为功能需求变更一些，但是整体上不会有大的变动。)  
因为时间安排，只会在业余时间去重构，所以时间上没有具体安排。如果你也是如此，希望在业余时间做一些或学一些东西，我觉得这个重构计划很适合你，参与方式在下面。

### 支持的功能

`browser`: 浏览器支持  
`electron`: 桌面级支持  
`mobile`: 移动端支持  
`√`: 已经支持  
`×`: 不打算支持

| 功能                                                            | browser | electron | mobile |
| :-------------------------------------------------------------- | :-----: | :------: | :----: |
| 登录支持，邮箱、手机号                                          |         |          |        |
| 朋友动态查看、点赞等                                            |         |          |        |
| 视频播放、收藏                                                  |         |          |        |
| 歌单列表、全部播放、收藏、添加待播放队列                        |         |          |        |
| 推荐歌单、推荐歌曲、热搜榜                                      |         |          |        |
| 通知(已登录)                                                    |    ×    |          |   ×    |
| 本地音乐                                                        |    ×    |          |   ×    |
| 音效(待定)                                                      |    ×    |          |   ×    |
| 搜索 - 支持歌曲播放                                             |    √    |    √     |        |
| 歌曲播放、暂停、歌词(横向、纵向)、音量 MediaSession(windows 10) |    √    |    √     |        |
| ...                                                             |         |          |        |

### Git 提交规范

- build 版本发布
- feat 增加新功能
- fix 修复问题/BUG
- style 代码风格相关无影响运行结果的
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等

[rules](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js)

提交模式如下：  
`type(scope?): subject`

更多规则参考[https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)

### Electron

在开发的同时会快速兼容 Electron 。所谓的快速就是调用很少的 API 实现 PC 端的功能，比如放大、缩小、通知、歌词、音乐拖放上传。

### ~~在线 API [NeteaseCloudMusicApi](https://music.linkorg.club/)~~

### `vue3.x`已发布，音乐项目已完成基本架构

目前会利用闲暇时间进行重构，如果你也想参与进来，可以发邮件或在[这里](https://github.com/Linkontoask/radishes/issues/6)告诉我

### 邀请前端开发人员进行重构

> 请在 issues 中留下你的想法，或者给我发送邮件告诉我你的想法 [linkorgs@163.com](linkorgs@163.com)，我会及时回复您

### 项目运行

```
1、 克隆项目
  git clone --recurse-submodules https://github.com/Linkontoask/radishes.git

2、 安装npm包
  yarn || npm i
  cd NeteaseCloudMusicApi/
  yarn || npm i

3、运行项目
  在主目录下运行 yarn dev
```

相关链接：

- [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
- [vuejs](https://v3.vuejs.org/)
- [commitlint](https://commitlint.js.org/#/)
- [vue-cli](https://cli.vuejs.org/zh/)
- [prettier](https://prettier.io/)
- [webpack-chain](https://github.com/neutrinojs/webpack-chain#getting-started)
- [storybook](https://github.com/storybookjs/storybook/tree/next/app/vue)
- [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)
- [vue-cli jsx](https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md)
- [nativescript vue 3 issues](https://github.com/nativescript-vue/nativescript-vue/issues/583)
- [browser module](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)

Test ci
