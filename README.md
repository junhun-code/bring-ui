

## VUE组件库。

`bring-ui` 是基于Vue 的移动端组件库

### 使用说明

#### 通过npm源安装（待发布）
```
npm install bring-ui --save
```

#### 使用

全量使用

```javascript
import bringUI from 'bring-ui'  
Vue.use(bringUI) 
```

按需引入

需要安装插件[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)
```
npm i babel-plugin-component -D
``` 
使用方法

```
import { Button } from 'bring-ui'
```

<!-- 
按模块引用

npm install babel-plugin-import --save-dev -->


### 开发说明
- 组件源码目录：packages 
- demo目录： examples

### 构建说明 
- `npm run dev` 运行examples，组件修改后可以实时预览
- `npm run build:lib`  构建js，通过packages/index.js打包到lib目录
 
