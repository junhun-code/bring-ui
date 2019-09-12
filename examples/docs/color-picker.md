# BaseCard 基础卡片

## 基础用法

<!-- {.md} -->

使用<!-- {.md} --> `slot="content"` 插槽来自定义卡片上部内容<!-- {.md} -->，
使用<!-- {.md} --> `slot="footer"` 插槽来自定义卡片底部内容<!-- {.md} -->。

:::demo

```html
<template>
  <b-color-picker
    v-model="color"
    v-on:change="headleChangeColor"
  ></b-color-picker>
</template>

<script>
export default {
  data() {
    return {
      color: "#ff0000"
    };
  },
  methods: {
    headleChangeColor() {
      console.log("颜色改变");
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
