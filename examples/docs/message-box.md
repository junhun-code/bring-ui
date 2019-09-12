# BaseCard 基础卡片

## 基础用法

<!-- {.md} -->

使用<!-- {.md} --> `slot="content"` 插槽来自定义卡片上部内容<!-- {.md} -->，
使用<!-- {.md} --> `slot="footer"` 插槽来自定义卡片底部内容<!-- {.md} -->。

:::demo

```html
<template>
  <button @click="showMessageBox">open message box</button>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    showMessageBox() {
      this.$msgBox
        .showMsgBox({
          content: "再坚持一下就可以学完了哦！<br/>确认退出学习？"
        })
        .then(val => {
          console.log("确认");
        })
        .catch(() => {
          console.log("取消");
        });
    }
  }
};
</script>
```

:::

## Attributes

<!-- {.md} -->

| 参数          | 说明             | 类型     | 可选值                             | 默认值    |
| ------------- | ---------------- | -------- | ---------------------------------- | --------- |
| themeType     | 卡片主题色       | `String` | `default | primary`                | `default` |
