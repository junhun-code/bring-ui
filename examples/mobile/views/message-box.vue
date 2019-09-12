<template>
  <button @click="showMessageBox">open message box</button>
</template>

<script>
export default {
  data() {
    return {};
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
