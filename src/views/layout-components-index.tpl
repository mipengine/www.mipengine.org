{{ target: layout-components-index }}
# 组件列表

MIP 官方提供了一系列组件，封装了前端开发经常会用到的功能、样式或者布局等等，方便 MIP 开发者在无需引入自定义 JS 的情况下开发出功能丰富且性能好的网页。

官方组件从引入方式上分，可以分为两种：

- 内置组件，MIP 核心（mip.js）内置了一部分常用 MIP 组件，开发者无需额外引入 script 就能够直接使用。比如 `mip-img`、`mip-fixed`、`mip-video` 等等；
- 扩展组件，需要开发者在使用的时候引入对应的 script 标签才能生效，比如 `mip-accordion`、`mip-tabs` 等等。

下面的列表我们通过功能对 MIP 组件进行划分可以分成以下几类，开发者可以根据实际页面开发时所需要的功能在以下列表当中进行快速查找。

## 布局

| 组件名 | 中文名 | 简要描述 |
| ---- | ---- | ---- |
{{ for: ${layout} as ${item}, ${index} }}
| [${item.name}](./layout/${item.name}.md) | ${item.chinese || '-'} | ${item.desc} |
{{ /for }}

## 呈现

| 组件名 | 中文名 | 简要描述 |
| ---- | ---- | ---- |
{{ for: ${presentation} as ${item}, ${index} }}
| [${item.name}](./presentation/${item.name}.md) | ${item.chinese || '-'} | ${item.desc} |
{{ /for }}

## 多媒体

| 组件名 | 中文名 | 简要描述 |
| ---- | ---- | ---- |
{{ for: ${media} as ${item}, ${index} }}
| [${item.name}](./media/${item.name}.md) | ${item.chinese || '-'} | ${item.desc} |
{{ /for }}

## 动态内容

| 组件名 | 中文名 | 简要描述 |
| ---- | ---- | ---- |
{{ for: ${dynamicContent} as ${item}, ${index} }}
| [${item.name}](./dynamic-content/${item.name}.md) | ${item.chinese || '-'} | ${item.desc} |
{{ /for }}

## 广告

| 组件名 | 中文名 | 简要描述 |
| ---- | ---- | ---- |
{{ for: ${ads} as ${item}, ${index} }}
| [${item.name}](./ads/${item.name}.md) | ${item.chinese || '-'} | ${item.desc} |
{{ /for }}

## 社交与分享

| 组件名 | 中文名 | 简要描述 |
| ---- | ---- | ---- |
{{ for: ${social} as ${item}, ${index} }}
| [${item.name}](./social/${item.name}.md) | ${item.chinese || '-'} | ${item.desc} |
{{ /for }}

## 统计与分析

| 组件名 | 中文名 | 简要描述 |
| ---- | ---- | ---- |
{{ for: ${analytics} as ${item}, ${index} }}
| [${item.name}](./analytics/${item.name}.md) | ${item.chinese || '-'} | ${item.desc} |
{{ /for }}
